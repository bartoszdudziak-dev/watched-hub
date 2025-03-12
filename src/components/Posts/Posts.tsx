import { PostDocument } from '@/types/types.generated';
import Post from './Post/Post';

type PostsProps = { posts: PostDocument<string>[] };

function Posts({ posts }: PostsProps) {
  console.log(posts);
  return (
    <ul className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <li key={post.id} className="mx-auto w-full max-w-lg">
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Posts;
