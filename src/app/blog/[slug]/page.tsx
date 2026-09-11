import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return getPosts().map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  return post ? { title: `${post.title} — Ryo`, description: post.description } : {}
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  return <main className="article-shell"><Link href="/" className="back-link">← Home</Link><article><p className="article-date">{post.date}</p><h1>{post.title}</h1><p className="article-description">{post.description}</p><div className="article-body">{post.content.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article></main>
}
