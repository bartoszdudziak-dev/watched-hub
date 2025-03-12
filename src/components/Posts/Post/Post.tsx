import { PostDocument } from '@/types/types.generated';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import PostRate from './PostRate';
import { formatDate } from '@/helpers/formatDate';
import { asDate, ContentRelationshipField } from '@prismicio/client';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router';

// Not perfect solution // content relationship typing problem
type CategoryExtendType = ContentRelationshipField<'category'> & {
  data: { name: string; uid: string };
};

type PostProps = {
  post: PostDocument;
};

function Post({
  post: {
    data: { poster, title, rate, release_date, watched_date, category },
    uid: postId,
  },
}: PostProps) {
  const {
    data: { name: categoryName, uid: categoryId },
  } = category as CategoryExtendType;

  return (
    <Card className="overflow-hidden rounded-lg p-0 pb-6">
      <CardHeader className="w-full p-0">
        <img
          className="block aspect-video object-cover"
          src={poster.url || ''}
          alt={poster.alt || ''}
        />
      </CardHeader>
      <CardContent>
        <h3 className="mb-4 border-b-1 text-xl font-bold tracking-wider uppercase">{title}</h3>
        <div className="divide-y-1 text-sm">
          <div className="grid grid-cols-2 py-1">
            <span>Released on</span>
            <span className="ml-auto">{formatDate(asDate(release_date))}</span>
          </div>
          <div className="grid grid-cols-2 py-1">
            <span>Watched on</span>
            <span className="ml-auto">{formatDate(asDate(watched_date))}</span>
          </div>
          <div className="grid grid-cols-2 py-1">
            <span>Category</span>
            <span className="ml-auto">{categoryName}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <PostRate rate={Number(rate)} maxRate={5} />

        <Link to={`/${categoryId}/${postId}`} className={buttonVariants({ variant: 'outline' })}>
          See more
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Post;
