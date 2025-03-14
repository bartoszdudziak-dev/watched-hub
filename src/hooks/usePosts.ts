import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/prismic/postsApi';
import { useSearchParams } from 'react-router';

export const usePosts = (category: string = 'all') => {
  const [searchParams] = useSearchParams();

  // Params should be checked if they are valid
  const title = searchParams.get('title') || '';
  const order = (searchParams.get('order') as 'asc' | 'desc' | null) || 'asc';
  const sort = searchParams.get('sort') || 'title';
  const rate = searchParams.get('rate')?.split(',') || ['1', '2', '3', '4', '5'];

  const {
    data: posts,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['posts', category, title, order, sort, JSON.stringify(rate)],
    queryFn: () => getPosts({ category, title, order, rate, sort }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  return { posts, isError, isPending };
};
