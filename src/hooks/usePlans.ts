import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/prismic/postsApi';

export const usePosts = () => {
  const { data: posts, isError, isPending } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  return { posts, isError, isPending };
};
