import { Profile } from '@/components/profile'
import { getPosts } from '@/lib/posts'

export default function Home() {
  return <Profile posts={getPosts()} />
}
