import fs from 'fs';
import path from 'path';
import { Article, Tidbit } from '../src/lib/types/blog';

interface FacebookPost {
  timestamp: number;
  post: string;
  title?: string;
  attachments?: any[];
}

interface ConversionResult {
  articles: Article[];
  tidbits: Tidbit[];
  skipped: number;
}

// Conversion logic for Facebook posts
export function convertFacebookPostToBlogContent(post: FacebookPost): { type: 'article' | 'tidbit' | null, content: Article | Tidbit | null } {
  const content = post.post.trim();

  // Skip very short posts
  if (content.length < 50) {
    return { type: null, content: null };
  }

  // Determine if this is article-worthy (longer, more detailed content)
  if (content.length > 500 || content.includes('\n\n') || content.includes('*')) {
    // Convert to article
    const article: Article = {
      id: `fb-${post.timestamp}`,
      title: extractTitle(content) || 'Facebook Post',
      slug: generateSlug(content, post.timestamp),
      excerpt: extractExcerpt(content),
      coverImage: '', // Would need to extract from attachments
      publishDate: new Date(post.timestamp * 1000).toISOString().split('T')[0],
      tags: extractTags(content),
      readingTime: Math.ceil(content.split(' ').length / 200), // Rough estimate
      content: formatContentForArticle(content),
      featured: false
    };
    return { type: 'article', content: article };
  } else {
    // Convert to tidbit
    const tidbit: Tidbit = {
      id: `fb-${post.timestamp}`,
      text: content,
      publishDate: new Date(post.timestamp * 1000).toISOString().split('T')[0],
      tags: extractTags(content)
    };
    return { type: 'tidbit', content: tidbit };
  }
}

function extractTitle(content: string): string {
  // Try to extract a title from the first line
  const firstLine = content.split('\n')[0];
  if (firstLine.length > 10 && firstLine.length < 100) {
    return firstLine;
  }
  // Fallback: create a title from the first 50 characters
  return content.substring(0, 50) + (content.length > 50 ? '...' : '');
}

function extractExcerpt(content: string): string {
  const words = content.split(' ');
  return words.slice(0, 30).join(' ') + (words.length > 30 ? '...' : '');
}

function extractTags(content: string): string[] {
  const tags: string[] = [];
  const lowerContent = content.toLowerCase();

  // PRI-specific tags
  if (lowerContent.includes('dorsal') || lowerContent.includes('ventral')) {
    tags.push('dorsal', 'ventral');
  }
  if (lowerContent.includes('four types') || lowerContent.includes('postural type')) {
    tags.push('four types');
  }
  if (lowerContent.includes('alexander') || lowerContent.includes('technique')) {
    tags.push('alexander technique');
  }
  if (lowerContent.includes('evolutionary') || lowerContent.includes('evolution')) {
    tags.push('evolutionary posture');
  }
  if (lowerContent.includes('imagery') || lowerContent.includes('image')) {
    tags.push('imagery practice');
  }

  return tags;
}

function generateSlug(content: string, timestamp: number): string {
  const baseSlug = content.substring(0, 50)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 30);

  return `${baseSlug}-${timestamp}`;
}

function formatContentForArticle(content: string): string {
  // Basic HTML formatting
  return content
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function convertAllFacebookPosts(): ConversionResult {
  const facebookDataPath = path.join(process.cwd(), 'public/facebook/posts/profile_posts_1.json');
  const facebookPosts: any[] = JSON.parse(fs.readFileSync(facebookDataPath, 'utf-8'));

  const articles: Article[] = [];
  const tidbits: Tidbit[] = [];
  let skipped = 0;

  facebookPosts.forEach(post => {
    if (post.data && post.data.some((item: any) => item.post && item.post.trim().length > 0)) {
      const contentItem = post.data.find((item: any) => item.post);
      const fbPost: FacebookPost = {
        timestamp: post.timestamp,
        post: contentItem.post,
        title: post.title
      };

      const result = convertFacebookPostToBlogContent(fbPost);

      if (result.type === 'article' && result.content) {
        articles.push(result.content as Article);
      } else if (result.type === 'tidbit' && result.content) {
        tidbits.push(result.content as Tidbit);
      } else {
        skipped++;
      }
    }
  });

  return { articles, tidbits, skipped };
}
