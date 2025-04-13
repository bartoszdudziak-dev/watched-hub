import Container from '@/components/Layout/Container';
import Header from '@/components/Layout/Header';
import Loader from '@/components/Loader/Loader';
import PostReview from '@/components/Posts/PostReview';

import { usePost } from '@/hooks/usePost';

function Review() {
  const { post, isError, isPending } = usePost();

  return (
    <div>
      <Header />

      <Container>
        <div className="py-10">
          {isPending && <Loader />}
          {isError && <p>Error</p>}
          {post && <PostReview post={post} />}
        </div>
      </Container>
    </div>
  );
}

export default Review;
