import { NextRequest, NextResponse } from 'next/server';
import { readPosts, writePosts } from '../../../../lib/posts';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const runtime = 'nodejs';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const payload = await parsePostPayload(request);
    const posts = await readPosts();
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    const existing = posts[index];
    posts[index] = {
      ...existing,
      title: payload.title || existing.title,
      content: payload.content || existing.content,
      type: (payload.type as 'article' | 'exercise' | 'tidbit') || existing.type,
      images: payload.images !== undefined ? payload.images : existing.images,
      createdAt: payload.date ? new Date(payload.date).toISOString() : existing.createdAt,
      updatedAt: new Date().toISOString(),
    };
    await writePosts(posts);
    return NextResponse.json(posts[index]);
  } catch (error) {
    console.error('PUT error:', error);
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
  if (!value || typeof value === 'string') return undefined;
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

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log('DELETE request', id);
  const posts = await readPosts();
  const index = posts.findIndex(p => p.id === id);
  console.log('Found index', index, 'posts length', posts.length);
  if (index === -1) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  posts.splice(index, 1);
  await writePosts(posts);
  return NextResponse.json({ message: 'Deleted' });
}
