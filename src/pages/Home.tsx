import { usePosts } from '@/hooks/usePlans';

function Home() {
  const { posts } = usePosts();
  console.log(posts);
  return <div>Home</div>;
}

export default Home;
