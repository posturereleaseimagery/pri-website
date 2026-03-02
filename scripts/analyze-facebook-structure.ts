import fs from 'fs';
import path from 'path';

interface FacebookPost {
  timestamp: number;
  attachments?: any[];
  data?: any[];
  title?: string;
}

interface PostWithContent {
  timestamp: number;
  post?: string;
  title?: string;
  mediaUris?: string[];
  hasTextContent: boolean;
  hasMedia: boolean;
}

// Read and analyze Facebook posts
const facebookDataPath = path.join(process.cwd(), 'public/facebook/posts/profile_posts_1.json');
const facebookPosts: FacebookPost[] = JSON.parse(fs.readFileSync(facebookDataPath, 'utf-8'));

// Extract posts with analysis
const analyzedPosts: PostWithContent[] = facebookPosts.map(post => {
  const hasTextContent = post.data && post.data.some((item: any) =>
    item.post && item.post.trim().length > 0
  );

  const postText = hasTextContent ?
    post.data!.find((item: any) => item.post)?.post : undefined;

  // Extract media URIs
  const mediaUris: string[] = [];
  if (post.attachments && post.attachments.length > 0) {
    post.attachments.forEach(attachment => {
      if (attachment.data && attachment.data.length > 0) {
        attachment.data.forEach((dataItem: any) => {
          if (dataItem.media && dataItem.media.uri) {
            mediaUris.push(dataItem.media.uri);
          }
          if (dataItem.external_context && dataItem.external_context.url) {
            // Handle external links
            mediaUris.push(dataItem.external_context.url);
          }
        });
      }
    });
  }

  return {
    timestamp: post.timestamp,
    post: postText,
    title: post.title,
    mediaUris,
    hasTextContent,
    hasMedia: mediaUris.length > 0
  };
});

console.log('=== Facebook Posts Analysis ===');
console.log(`Total posts: ${analyzedPosts.length}`);

const postsWithText = analyzedPosts.filter(p => p.hasTextContent);
const postsWithMedia = analyzedPosts.filter(p => p.hasMedia);
const postsWithBoth = analyzedPosts.filter(p => p.hasTextContent && p.hasMedia);

console.log(`Posts with text content: ${postsWithText.length}`);
console.log(`Posts with media: ${postsWithMedia.length}`);
console.log(`Posts with both text and media: ${postsWithBoth.length}`);

console.log('\n=== Media Connection Analysis ===');
console.log('Sample media URIs found:');
const sampleMediaPosts = analyzedPosts.filter(p => p.mediaUris && p.mediaUris.length > 0).slice(0, 3);
sampleMediaPosts.forEach((post, i) => {
  console.log(`\nPost ${i + 1} (timestamp: ${post.timestamp}):`);
  console.log(`Title: ${post.title || 'No title'}`);
  console.log(`Has text: ${post.hasTextContent}`);
  console.log('Media URIs:');
  post.mediaUris!.forEach(uri => console.log(`  - ${uri}`));
});

console.log('\n=== Sample Text Posts ===');
const sampleTextPosts = postsWithText.slice(0, 2);
sampleTextPosts.forEach((post, i) => {
  console.log(`\nPost ${i + 1}:`);
  console.log(`Date: ${new Date(post.timestamp * 1000).toLocaleDateString()}`);
  console.log(`Title: ${post.title || 'No title'}`);
  console.log(`Text preview: ${post.post!.substring(0, 150)}...`);
  console.log(`Has media: ${post.hasMedia}`);
});

export { analyzedPosts, type PostWithContent };
