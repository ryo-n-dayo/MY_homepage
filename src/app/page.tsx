import { OrderedProfile } from '@/components/profile'
import { getPosts } from '@/lib/posts'

export default function Home() {
  return <OrderedProfile posts={getPosts()} />
}
