import { usePosts } from '@/hooks/usePlans';

function Movies() {
  const { posts } = usePosts('movies');
  console.log(posts);

  return <div>Movies</div>;
}

export default Movies;
