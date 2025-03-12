import { useParams } from 'react-router';

function Review() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Review;
