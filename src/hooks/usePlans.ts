import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/prismic/postsApi';

export const usePosts = (category: string = 'all') => {
  const {
    data: posts,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['posts', category],
    queryFn: () => getPosts(category),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  return { posts, isError, isPending };
};
