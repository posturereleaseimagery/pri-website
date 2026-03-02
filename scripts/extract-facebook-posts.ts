import fs from 'fs';
import path from 'path';

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
  title?: string;
  content?: string;
  mediaFiles: string[];
  externalLinks: string[];
  postType: 'text' | 'media' | 'link' | 'mixed';
  wordCount: number;
  hasEducationalValue: boolean;
}

// Function to extract media file paths from URIs
function extractMediaPaths(mediaUris: string[]): string[] {
  return mediaUris.map(uri => {
    // Convert Facebook URI to local file path
    // Example: "this_profile's_activity_across_facebook/posts/media/Photos_751115996138101/1600591081190584.jpg"
    // Becomes: "facebook/posts/media/Photos_751115996138101/1600591081190584.jpg"
    return uri.replace("this_profile's_activity_across_facebook/", "facebook/");
  });
}

// Function to determine if content has educational value for PRI
function hasEducationalValue(content: string, title?: string): boolean {
  const text = (content + ' ' + (title || '')).toLowerCase();
  const keywords = [
    'pri', 'posture', 'dorsal', 'ventral', 'imagery', 'alexander',
    'evolution', 'surface', 'seam', 'wave', 'peristalsis', 'undulation',
    'four types', 'movement', 'body', 'somatic'
  ];

  return keywords.some(keyword => text.includes(keyword));
}

// Function to extract individual posts from Facebook JSON
function extractIndividualPosts(): ExtractedPost[] {
  const facebookDataPath = path.join(process.cwd(), 'public/facebook/posts/profile_posts_1.json');
  const facebookPosts: FacebookPost[] = JSON.parse(fs.readFileSync(facebookDataPath, 'utf-8'));

  return facebookPosts.map((post, index) => {
    // Extract text content
    const content = post.data?.find((item: any) => item.post)?.post?.trim();

    // Extract media URIs
    const mediaUris: string[] = [];
    const externalLinks: string[] = [];

    if (post.attachments && post.attachments.length > 0) {
      post.attachments.forEach(attachment => {
        if (attachment.data && attachment.data.length > 0) {
          attachment.data.forEach((dataItem: any) => {
            if (dataItem.media && dataItem.media.uri) {
              mediaUris.push(dataItem.media.uri);
            }
            if (dataItem.external_context && dataItem.external_context.url) {
              externalLinks.push(dataItem.external_context.url);
            }
          });
        }
      });
    }

    // Determine post type
    let postType: 'text' | 'media' | 'link' | 'mixed' = 'text';
    if (mediaUris.length > 0 && content) postType = 'mixed';
    else if (mediaUris.length > 0) postType = 'media';
    else if (externalLinks.length > 0) postType = 'link';

    // Convert media URIs to file paths
    const mediaFiles = extractMediaPaths(mediaUris);

    return {
      id: `fb-post-${post.timestamp}-${index}`,
      timestamp: post.timestamp,
      date: new Date(post.timestamp * 1000).toISOString().split('T')[0],
      title: post.title,
      content: content || undefined,
      mediaFiles,
      externalLinks,
      postType,
      wordCount: content ? content.split(' ').length : 0,
      hasEducationalValue: content ? hasEducationalValue(content, post.title) : false
    };
  });
}

// Analyze and display results
const extractedPosts = extractIndividualPosts();

console.log('=== Facebook Posts Extraction Analysis ===');
console.log(`Total posts extracted: ${extractedPosts.length}`);

const postsWithContent = extractedPosts.filter(p => p.content);
const postsWithMedia = extractedPosts.filter(p => p.mediaFiles.length > 0);
const educationalPosts = extractedPosts.filter(p => p.hasEducationalValue);

console.log(`Posts with text content: ${postsWithContent.length}`);
console.log(`Posts with media attachments: ${postsWithMedia.length}`);
console.log(`Posts with educational value: ${educationalPosts.length}`);

console.log('\n=== Post Type Distribution ===');
const typeCounts = extractedPosts.reduce((acc, post) => {
  acc[post.postType] = (acc[post.postType] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

Object.entries(typeCounts).forEach(([type, count]) => {
  console.log(`${type}: ${count} posts`);
});

console.log('\n=== Sample Extracted Posts ===');
const samplePosts = extractedPosts.filter(p => p.content && p.hasEducationalValue).slice(0, 3);

samplePosts.forEach((post, i) => {
  console.log(`\n--- Post ${i + 1} ---`);
  console.log(`ID: ${post.id}`);
  console.log(`Date: ${post.date}`);
  console.log(`Title: ${post.title || 'No title'}`);
  console.log(`Type: ${post.postType}`);
  console.log(`Word count: ${post.wordCount}`);
  console.log(`Educational value: ${post.hasEducationalValue}`);
  console.log(`Content preview: ${post.content!.substring(0, 150)}...`);

  if (post.mediaFiles.length > 0) {
    console.log(`Media files: ${post.mediaFiles.length}`);
    post.mediaFiles.slice(0, 2).forEach(file => console.log(`  - ${file}`));
  }

  if (post.externalLinks.length > 0) {
    console.log(`External links: ${post.externalLinks.length}`);
    post.externalLinks.slice(0, 2).forEach(link => console.log(`  - ${link}`));
  }
});

console.log('\n=== Media Connection Summary ===');
console.log('Facebook posts can be connected to media files through:');
console.log('1. Media URIs in post.attachments[].data[].media.uri');
console.log('2. URIs follow pattern: "this_profile\'s_activity_across_facebook/posts/media/[album]/[filename]"');
console.log('3. Convert to local path by replacing "this_profile\'s_activity_across_facebook/" with "facebook/"');
console.log('4. Media folders are organized by album (e.g., Photos_751115996138101, Coverphotos_751115989471435)');

export { extractIndividualPosts, type ExtractedPost };
