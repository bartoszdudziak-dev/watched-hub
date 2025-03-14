import Loader from '@/components/Loader/Loader';
import Posts from '@/components/Posts/Posts';
import { usePosts } from '@/hooks/usePosts';

function Movies() {
  const { posts: movies, isPending, isError } = usePosts('movies');

  if (isPending) return <Loader />;

  if (isError) return <p>Error</p>;

  if (movies && movies.length > 0) return <Posts posts={movies} />;

  return <p>No results</p>;
}

export default Movies;
