export type Article = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  publishDate: string
  tags: string[]
  readingTime: number
  content: string // Rich text content
  featured: boolean
}

export type Tidbit = {
  id: string
  text: string
  sourceTitle?: string
  sourceUrl?: string
  publishDate: string
  tags: string[]
  imageUrl?: string
}

export type BlogContent = Article | Tidbit

export type BlogPostType = 'article' | 'tidbit'

export interface Exercises {
  id: string
  title: string
  excerpt: string
  image?: string
  createdAt: string
}
