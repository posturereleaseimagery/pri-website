import fs from 'fs';
import path from 'path';

interface FacebookPost {
  timestamp: number;
  attachments?: any[];
  data?: any[];
  title?: string;
}

interface PostWithContent extends FacebookPost {
  post: string;
  attachments?: any[];
  data?: any[];
  title?: string;
  timestamp: number;
}

// Read and parse Facebook posts
const facebookDataPath = path.join(process.cwd(), 'public/facebook/posts/profile_posts_1.json');
const facebookPosts: FacebookPost[] = JSON.parse(fs.readFileSync(facebookDataPath, 'utf-8'));

// Extract posts with actual text content
const postsWithContent: PostWithContent[] = facebookPosts.filter(post => {
  return post.data && post.data.some((item: any) => item.post && item.post.trim().length > 0);
}).map(post => {
  const contentItem = post.data!.find((item: any) => item.post);
  return {
    ...post,
    post: contentItem.post
  };
});

console.log(`Found ${postsWithContent.length} posts with text content`);

export { postsWithContent, type PostWithContent };
