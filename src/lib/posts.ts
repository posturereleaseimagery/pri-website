import fs from 'fs/promises';
import path from 'path';

export interface Post {
  id: string;
  title: string;
  content: string;
  type: 'article' | 'exercise' | 'tidbit';
  images?: string[];
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

const filePath = path.join(process.cwd(), 'data', 'posts.json');

export async function readPosts(): Promise<Post[]> {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function writePosts(posts: Post[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
}
