import { StarIcon } from 'lucide-react';

type RatingProps = { rate: number; maxRate: number; size: number };

function Rating({ rate, maxRate, size }: RatingProps) {
  const ratingSize = `size-${size}`;

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRate }).map((_, i) => (
        <StarIcon
          key={i}
          className={`${i + 1 <= rate ? 'fill-primary' : 'transparent'} ${ratingSize}`}
        />
      ))}
    </div>
  );
}

export default Rating;
