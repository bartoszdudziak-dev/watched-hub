import { usePosts } from '@/hooks/usePlans';

function Series() {
  const { posts } = usePosts('series');
  console.log(posts);

  return <div>Series</div>;
}

export default Series;
