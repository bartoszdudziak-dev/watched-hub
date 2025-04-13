import { PostDocument } from '@/types/types.generated';
import reviewFallback from '@/constants/reviewFallback';
import Rating from '../Rating/Rating';
import { PrismicRichText, PrismicImage } from '@prismicio/react';
import { Skeleton } from '../ui/skeleton';
import { Separator } from '../ui/separator';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '../ui/button';

type PostReviewProps = { post: PostDocument };

function PostReview({ post }: PostReviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const { poster, title, rate, review } = post.data;

  return (
    <div className="mx-auto max-w-2xl">
      <Button onClick={() => navigate(-1)} variant="outline" size={'sm'} className="mb-2">
        Go back
      </Button>

      <PrismicImage
        field={poster}
        onLoad={() => setIsLoaded(true)}
        className={`${isLoaded ? 'block' : 'hidden'} aspect-video object-fill`}
      />
      <Skeleton className={`${isLoaded ? 'hidden' : 'block'} aspect-video w-full`} />

      <div className="px-4 py-8 md:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl tracking-wider uppercase md:text-3xl">{title}</h2>

          <div className="flex items-center gap-2">
            <span className="text-2xl">{rate}</span>
            <Rating rate={Number(rate)} maxRate={5} size={5} />
          </div>
        </div>

        <Separator className="my-4" />

        <div>
          <PrismicRichText field={review} fallback={reviewFallback} />
        </div>
      </div>
    </div>
  );
}

export default PostReview;
