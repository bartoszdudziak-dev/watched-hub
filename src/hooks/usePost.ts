import { getPost } from '@/services/prismic/postApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const usePost = () => {
  const { id = '' } = useParams();

  const {
    data: post,
    isError,
    isPending,
  } = useQuery({
    queryKey: [id],
    queryFn: () => getPost(id),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  return { post, isError, isPending };
};
