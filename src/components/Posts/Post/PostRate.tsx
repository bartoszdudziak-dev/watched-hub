import { StarIcon } from 'lucide-react';

type PostRateProps = { rate: number; maxRate: number };

function PostRate({ rate, maxRate }: PostRateProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRate }).map((_, i) => (
        <StarIcon
          key={i}
          className={`${i + 1 <= Number(rate) ? 'fill-primary' : 'transparent'} size-5`}
        />
      ))}
    </div>
  );
}

export default PostRate;
