import { Article, Tidbit } from '@/lib/types/blog';
import { sampleArticles, sampleTidbits } from '@/lib/data/blog-content';
import { readPosts, Post } from '@/lib/posts';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generateSlug(post: Post) {
  if (post.title) {
    return slugify(post.title);
  }
  return slugify(post.id);
}

function toArticle(post: Post): Article {
  const slug = generateSlug(post);
  const publishDate = post.createdAt.split('T')[0];
  const coverImage = post.images?.[0] ?? '';
  const excerpt = post.content.length > 160 ? `${post.content.slice(0, 160)}...` : post.content;
  const readingTime = Math.max(1, Math.round(post.content.length / 200));
  const content = `<p>${post.content.replace(/\n+/g, '</p><p>')}</p>`;

  return {
    id: post.id,
    title: post.title,
    slug,
    excerpt,
    coverImage,
    publishDate,
    tags: [],
    readingTime,
    content,
    featured: false,
    attachments: post.attachments,
  };
}

export async function getAllBlogArticles(): Promise<Article[]> {
  const posts = await readPosts();
  const dynamicArticles = posts
    .filter((post) => post.type === 'article')
    .map(toArticle);
  return dynamicArticles;
}

export function toTidbit(post: Post): Tidbit {
  return {
    id: post.id,
    text: post.content,
    publishDate: post.createdAt.split('T')[0],
    tags: [],
    imageUrl: post.images?.[0],
  };
}

export async function getTidbitById(id: string): Promise<Tidbit | null> {
  const tidbits = await getAllTidbits();
  return tidbits.find(t => t.id === id) || null;
}

export async function getAllTidbits(): Promise<Tidbit[]> {
  const posts = await readPosts();
  return posts
    .filter(post => post.type === 'tidbit')
    .map(toTidbit);
}

export function toExercise(post: Post) {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.content.length > 120 ? `${post.content.slice(0, 120)}...` : post.content,
    image: post.images?.[0],
    createdAt: post.createdAt,
    content: post.content,
  };
}

export async function getExerciseById(id: string) {
  const exercises = await getAllExercises();
  return exercises.find(e => e.id === id);
}

export async function getAllExercises() {
  const posts = await readPosts();
  const dynamicExercises = posts
    .filter((post) => post.type === 'exercise')
    .map(toExercise);
  return dynamicExercises;
}

export async function findArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getAllBlogArticles();
  return articles.find((article) => article.slug === slug);
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const articles = await getAllBlogArticles();
  return articles.map((article) => article.slug);
}
