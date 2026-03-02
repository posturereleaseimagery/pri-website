import { NextRequest, NextResponse } from 'next/server';
import { readPosts, writePosts, Post } from '../../../lib/posts';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  const posts = await readPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  try {
    const payload = await parsePostPayload(request);
    if (!payload.title || !payload.content || !payload.type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newPost: Post = {
      id: uuidv4(),
      title: payload.title,
      content: payload.content,
      type: payload.type as 'article' | 'exercise' | 'tidbit',
      images: payload.images,
      tags: payload.tags,
      createdAt: payload.date ? new Date(payload.date).toISOString() : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const posts = await readPosts();
    posts.push(newPost);
    await writePosts(posts);
    return NextResponse.json(newPost);
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

async function parsePostPayload(request: NextRequest): Promise<{
  title?: string;
  content?: string;
  type?: string;
  images?: string[];
  tags?: string[];
  date?: string;
}> {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const existingImagesRaw = formData.get('existingImages');
    const fileEntries = formData.getAll('images');
    const tagsRaw = formData.get('tags');
    let tags: string[] = [];
    if (tagsRaw && typeof tagsRaw === 'string') {
      try {
        tags = JSON.parse(tagsRaw);
      } catch {
        tags = [];
      }
    }
    return {
      title: getFormValue(formData.get('title')),
      content: getFormValue(formData.get('content')),
      type: getFormValue(formData.get('type')),
      date: getFormValue(formData.get('date')),
      images: [
        ...(existingImagesRaw && typeof existingImagesRaw === 'string'
          ? (JSON.parse(existingImagesRaw) as string[])
          : []),
        ...(await Promise.all(
          fileEntries.map((file) => saveFormFile(file as File)).filter(Boolean)
        )).filter(Boolean) as string[],
      ].filter(Boolean),
      tags,
    };
  }

  const body = await request.json();
  return {
    title: body.title,
    content: body.content,
    type: body.type,
    date: body.date,
    images: Array.isArray(body.images) ? body.images : [],
    tags: Array.isArray(body.tags) ? body.tags : [],
  };
}

function getFormValue(value: FormDataEntryValue | null) {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

async function saveFormFile(value: FormDataEntryValue | null) {
  if (!value || typeof value === 'string') {
    return undefined;
  }
  const file = value as File;
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadsDir, { recursive: true });
  const ext = path.extname(file.name) || '';
  const filename = `${uuidv4()}${ext}`;
  const filePath = path.join(uploadsDir, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, buffer);
  return `/uploads/${filename}`;
}
