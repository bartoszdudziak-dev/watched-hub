import Posts from '@/components/Posts/Posts';
import { usePosts } from '@/hooks/usePosts';
import { Loader } from 'lucide-react';

function Series() {
  const { posts: series, isPending, isError } = usePosts('series');

  if (isPending) return <Loader />;

  if (isError) return <p>Error</p>;

  if (series && series.length > 0) return <Posts posts={series} />;

  return <p>No results</p>;
}

export default Series;
