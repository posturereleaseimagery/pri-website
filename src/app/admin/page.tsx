'use client';

import { useState, useEffect, useRef } from 'react';
import type { Attachment } from '@/lib/posts';

const PostType = { article: 'article', exercise: 'exercise', tidbit: 'tidbit' } as const;

type Post = {
  id: string;
  title: string;
  content: string;
  type: typeof PostType[keyof typeof PostType];
  images?: string[];
  tags?: string[];
  attachments?: Attachment[];
  createdAt: string;
  updatedAt: string;
};

export default function Admin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const initialDate = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    title: '',
    content: '',
    type: 'article' as 'article' | 'exercise' | 'tidbit',
    date: initialDate,
    tags: '',
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<'all' | typeof PostType[keyof typeof PostType]>('all');
  const [filterYear, setFilterYear] = useState<'all' | number>('all');
  const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([]);
  const [selectedAttachments, setSelectedAttachments] = useState<File[]>([]);
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called', { editingId, selectedFiles, existingImages, existingAttachments, selectedAttachments, form });
    const url = editingId ? `/api/posts/${editingId}` : '/api/posts';
    const method = editingId ? 'PUT' : 'POST';
    const tags = form.tags.split(',').map(t => t.trim()).filter(t => t);
    let res;
    try {
      const needsFormData = selectedFiles.length > 0 || selectedAttachments.length > 0;
      if (!needsFormData) {
        // Use JSON for creates/updates without image
        console.log('Sending JSON', { url, method, body: form });
        res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: form.title,
            content: form.content,
            type: form.type,
            images: existingImages,
            attachments: existingAttachments,
            tags,
            date: form.date,
          }),
        });
      } else {
        // Use FormData for creates/updates with image
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('content', form.content);
        formData.append('type', form.type);
        formData.append('date', form.date);
        formData.append('existingImages', JSON.stringify(existingImages));
        formData.append('existingAttachments', JSON.stringify(existingAttachments));
        selectedFiles.forEach((file) => formData.append('images', file));
        selectedAttachments.forEach((file) => formData.append('attachments', file));
        formData.append('tags', JSON.stringify(tags));
        console.log('Sending FormData', { url, method, formData });
        res = await fetch(url, {
          method,
          body: formData,
        });
      }
    } catch (error) {
      console.error('Network error', error);
      alert('Network error: ' + (error as Error).message);
      return;
    }
    console.log('Response status', res?.status);
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Server error response:', errorText);
      alert('Server error');
      return;
    }
    const result = await res.json();
    console.log('Success response:', result);
    setForm({ title: '', content: '', type: 'article', date: initialDate, tags: '' });
    setSelectedFiles([]);
    setExistingImages([]);
    setExistingAttachments([]);
    setSelectedAttachments([]);
    setEditingId(null);
    fetchPosts();
  };

  const handleEdit = (post: Post) => {
    setForm({
      title: post.title,
      content: post.content,
      type: post.type,
      date: post.createdAt.split('T')[0],
      tags: post.tags?.join(', ') || '',
    });
    setEditingId(post.id);
    setSelectedFiles([]);
    setExistingImages(post.images || []);
    setExistingAttachments(post.attachments || []);
  };

  const handleAttachFiles = (files: FileList | null) => {
    if (!files) return;
    setSelectedAttachments((prev) => [...prev, ...Array.from(files)]);
  };

  const removeExistingAttachment = (url: string) => {
    setExistingAttachments((prev) => prev.filter((attachment) => attachment.url !== url));
  };

  const removeSelectedAttachment = (index: number) => {
    setSelectedAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    const updated = editorRef.current?.innerText ?? form.content;
    setForm((prev) => ({ ...prev, content: updated }));
    editorRef.current?.focus();
  };

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerText !== form.content) {
      editorRef.current.innerText = form.content;
    }
  }, [form.content]);

  const handleDelete = async (id: string) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          required
          className="w-full p-2 border rounded"
        />
        <div className="space-y-2">
          <div className="flex gap-2 text-sm">
            <button type="button" onClick={() => handleFormat('bold')} className="px-2 py-1 rounded border bg-white">Bold</button>
            <button type="button" onClick={() => handleFormat('italic')} className="px-2 py-1 rounded border bg-white">Italic</button>
            <button type="button" onClick={() => handleFormat('underline')} className="px-2 py-1 rounded border bg-white">Underline</button>
            <button
              type="button"
              onClick={() => {
                const url = window.prompt('Enter link URL');
                if (url) handleFormat('createLink', url);
              }}
              className="px-2 py-1 rounded border bg-white"
            >
              Link
            </button>
          </div>
          <div
            ref={editorRef}
            contentEditable
            data-placeholder="Content"
            onInput={(e) => setForm({ ...form, content: (e.currentTarget as HTMLDivElement).innerText })}
            className="min-h-[160px] w-full rounded border p-3 focus:outline-none focus:border-warm bg-white text-sm resize-y overflow-auto"
            suppressContentEditableWarning
          />
        </div>
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value as 'article' | 'exercise' | 'tidbit' })}
          className="p-2 border rounded"
        >
          <option value="article">Article</option>
          <option value="exercise">Exercise</option>
          <option value="tidbit">Tidbit</option>
        </select>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={form.tags}
          onChange={e => setForm({ ...form, tags: e.target.value })}
          placeholder="Tags (comma separated)"
          className="p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={e => setSelectedFiles(Array.from(e.target.files || []))}
          className="p-2 border rounded"
        />
        {existingImages.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {existingImages.map((img) => (
              <img key={img} src={img} alt="thumbnail" className="h-10 w-10 rounded object-cover" />
            ))}
          </div>
        )}
        <label className="block text-sm font-medium">PDF Attachments</label>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => handleAttachFiles(e.target.files)}
          className="p-2 border rounded"
        />
        {existingAttachments.length > 0 && (
          <div className="space-y-1 text-xs text-muted-foreground">
            <p className="font-semibold">Attached PDFs</p>
            {existingAttachments.map((attachment) => (
              <div key={attachment.url} className="flex items-center justify-between gap-2">
                <a href={attachment.url} target="_blank" rel="noreferrer" className="underline">
                  {attachment.label || attachment.url.split('/').pop()}
                </a>
                <button
                  type="button"
                  onClick={() => removeExistingAttachment(attachment.url)}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {selectedAttachments.length > 0 && (
          <div className="space-y-1 text-xs text-muted-foreground">
            <p className="font-semibold">New attachments</p>
            {selectedAttachments.map((attachment, index) => (
              <div key={`${attachment.name}-${index}`} className="flex items-center justify-between gap-2">
                <span>{attachment.name}</span>
                <button
                  type="button"
                  onClick={() => removeSelectedAttachment(index)}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          {editingId ? 'Update' : 'Create'}
        </button>
        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setForm({ title: '', content: '', type: 'article', date: initialDate, tags: '' });
              setExistingImages([]);
              setSelectedFiles([]);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
        )}
      </form>
      <div className="mb-4 flex flex-wrap gap-3">
        {['all', 'article', 'exercise', 'tidbit'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type as typeof filterType)}
            className={`rounded-full px-4 py-1 text-sm font-medium transition ${
              filterType === type ? 'bg-warm text-white' : 'bg-muted text-muted-foreground'
            }`}
          >
            {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          className="rounded-full px-4 py-1 text-sm font-medium border bg-white dark:bg-slate-800"
        >
          <option value="all">All years</option>
          {[...new Set(posts.map((post) => new Date(post.createdAt).getFullYear()))]
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
        </select>
      </div>
      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      <ul className="space-y-2">
        {posts
          .filter(post => filterType === 'all' || post.type === filterType)
          .filter(post => filterYear === 'all' || new Date(post.createdAt).getFullYear() === filterYear)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map(post => (
            <li key={post.id} className="border p-4 rounded flex justify-between items-start">
              <div className="flex items-start gap-3">
                {post.images?.[0] && (
                  <img src={post.images[0]} alt={post.title} className="h-16 w-16 rounded object-cover" />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{post.title} ({post.type})</h3>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.createdAt || post.updatedAt).toLocaleDateString()}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <span className="text-xs text-muted-foreground">Tags: {post.tags.join(', ')}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{post.content.slice(0, 100)}...</p>
                </div>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(post)} className="bg-yellow-500 text-white px-2 py-1 rounded cursor-pointer">
                  Edit
                </button>
                <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
