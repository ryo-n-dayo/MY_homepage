export type PostSummary = { slug: string; title: string; date: string; description: string }
export type Post = PostSummary & { content: string }

// 新しい記事はこの配列に追加します。
const posts: Post[] = [{ slug: 'welcome', title: 'このブログについて', date: '2026.09.11', description: '開発の経験談や、参加したイベントで得た学びを記録していきます。', content: 'このブログでは、個人開発の試行錯誤やイベント参加の記録を発信します。\n\n作ったものの背景、うまくいかなかったこと、次に試したいことまで、自分の言葉で残していく予定です。' }]
export function getPosts(): PostSummary[] { return posts.map(({ slug, title, date, description }) => ({ slug, title, date, description })) }
export function getPost(slug: string): Post | undefined { return posts.find((post) => post.slug === slug) }
