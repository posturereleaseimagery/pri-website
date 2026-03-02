import fs from 'fs';
import path from 'path';
import { Article, Tidbit } from "../src/lib/types/blog";

interface FacebookPost {
  timestamp: number;
  attachments?: any[];
  data?: any[];
  title?: string;
}

interface ExtractedPost {
  id: string;
  timestamp: number;
  date: string;
  title: string;
  content: string;
  mediaFiles: string[];
  wordCount: number;
  hasMedia: boolean;
}

// Function to extract tags from content
function extractTags(content: string): string[] {
  const tags: string[] = [];
  const lowerContent = content.toLowerCase();
  
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

// Function to extract posts from Facebook data
function extractFacebookPosts(): ExtractedPost[] {
  const facebookDataPath = path.join(process.cwd(), 'public/facebook/posts/profile_posts_1.json');
  const facebookPosts: FacebookPost[] = JSON.parse(fs.readFileSync(facebookDataPath, 'utf-8'));

  return facebookPosts
    .filter(post => post.data && post.data.some((item: any) => item.post && item.post.trim().length > 50))
    .map((post, index) => {
      const contentItem = post.data!.find((item: any) => item.post);
      const content = contentItem.post.trim();
      
      // Extract media URIs
      const mediaUris: string[] = [];
      if (post.attachments && post.attachments.length > 0) {
        post.attachments.forEach(attachment => {
          if (attachment.data && attachment.data.length > 0) {
            attachment.data.forEach((dataItem: any) => {
              if (dataItem.media && dataItem.media.uri) {
                const localPath = dataItem.media.uri.replace("this_profile's_activity_across_facebook/", "facebook/");
                mediaUris.push(localPath);
              }
            });
          }
        });
      }
      
      return {
        id: `fb-${post.timestamp}`,
        timestamp: post.timestamp,
        date: new Date(post.timestamp * 1000).toISOString().split('T')[0],
        title: post.title || content.split('\n')[0] || `Facebook Post ${index + 1}`,
        content: content,
        mediaFiles: mediaUris,
        wordCount: content.split(' ').length,
        hasMedia: mediaUris.length > 0
      };
    });
}

// Function to convert to blog format
function convertToBlogFormat(posts: ExtractedPost[]): { articles: Article[], tidbits: Tidbit[] } {
  const articles: Article[] = [];
  const tidbits: Tidbit[] = [];

  posts.forEach(post => {
    const isArticle = post.wordCount > 300 || post.content.includes('\n\n') || post.content.includes('*');
    
    if (isArticle) {
      const article: Article = {
        id: post.id,
        title: post.title,
        slug: post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 50),
        excerpt: post.content.split(' ').slice(0, 30).join(' ') + '...',
        coverImage: post.mediaFiles.length > 0 ? `/images/${path.basename(post.mediaFiles[0])}` : '',
        publishDate: post.date,
        tags: extractTags(post.content),
        readingTime: Math.ceil(post.wordCount / 200),
        content: post.content,
        featured: false
      };
      articles.push(article);
    } else {
      const tidbit: Tidbit = {
        id: post.id,
        text: post.content,
        publishDate: post.date,
        tags: extractTags(post.content)
      };
      tidbits.push(tidbit);
    }
  });

  return { articles, tidbits };
}

// Main execution
function createFacebookBlogContent() {
  const extractedPosts = extractFacebookPosts();
  const { articles, tidbits } = convertToBlogFormat(extractedPosts);

  // Create the TypeScript file
  const blogContentTS = `import { Article, Tidbit } from "@/lib/types/blog";

export const facebookArticles: Article[] = [
${articles.map(article => `  {
    id: "${article.id}",
    title: "${article.title.replace(/"/g, '\\"')}",
    slug: "${article.slug}",
    excerpt: "${article.excerpt.replace(/"/g, '\\"')}",
    coverImage: "${article.coverImage}",
    publishDate: "${article.publishDate}",
    tags: [${article.tags.map((tag: string) => `"${tag}"`).join(', ')}],
    readingTime: ${article.readingTime},
    content: \`${article.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
    featured: ${article.featured}
  }`).join(',\n')}
];

export const facebookTidbits: Tidbit[] = [
${tidbits.map(tidbit => `  {
    id: "${tidbit.id}",
    text: "${tidbit.text.replace(/"/g, '\\"')}",
    publishDate: "${tidbit.publishDate}",
    tags: [${tidbit.tags.map((tag: string) => `"${tag}"`).join(', ')}]
  }`).join(',\n')}
];
`;

  // Write the file
  const outputPath = path.join(process.cwd(), 'src/lib/data/facebook-converted-content.ts');
  fs.writeFileSync(outputPath, blogContentTS);

  console.log('✅ Facebook blog posts created successfully!');
  console.log(`📝 Articles: ${articles.length}`);
  console.log(`💬 Tidbits: ${tidbits.length}`);
  console.log(`📁 File saved to: ${outputPath}`);

  // Display summary
  console.log('\n=== CREATED CONTENT ===');
  articles.forEach((article, i) => {
    console.log(`\n--- Article ${i + 1}: ${article.title} ---`);
    console.log(`Slug: ${article.slug}`);
    console.log(`Date: ${article.publishDate}`);
    console.log(`Reading time: ${article.readingTime} min`);
    console.log(`Tags: ${article.tags.join(', ')}`);
    console.log(`Cover image: ${article.coverImage || 'None'}`);
    console.log(`Word count: ${article.content.split(' ').length}`);
  });

  return { articles, tidbits };
}

// Export the function
export { createFacebookBlogContent };

// Run if executed directly
if (require.main === module) {
  createFacebookBlogContent();
}
