import Loader from '@/components/Loader/Loader';
import Posts from '@/components/Posts/Posts';
import { usePosts } from '@/hooks/usePosts';

function Home() {
  const { posts, isPending, isError } = usePosts();

  if (isPending) return <Loader />;

  if (isError) return <p>Error</p>;

  if (posts && posts.length > 0) return <Posts posts={posts} />;

  return <p>No results</p>;
}

export default Home;
