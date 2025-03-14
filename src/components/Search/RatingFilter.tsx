import { useSearchPost } from '@/context/SearchContext';
import Rating from '../Rating/Rating';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

type RatingFilterProps = {
  maxRating: number;
};

function RatingFilter({ maxRating }: RatingFilterProps) {
  const {
    searchConfig: { rate: rates },
    onSearchConfigChange,
  } = useSearchPost();

  return (
    <div>
      <span className="text-sm font-semibold tracking-wider uppercase">Rating</span>

      {Array.from({ length: maxRating }).map((_, i) => {
        return (
          <div key={i} className="flex items-center gap-2">
            <Checkbox
              className="cursor-pointer rounded-md"
              id={`rate-${i + 1}`}
              value={i + 1}
              checked={rates.includes(i + 1)}
              onCheckedChange={checked => {
                if (checked) {
                  onSearchConfigChange('rate', [...rates, i + 1]);
                } else {
                  onSearchConfigChange(
                    'rate',
                    rates.filter(rate => rate !== i + 1),
                  );
                }
              }}
            />
            <Label htmlFor={`rate-${i + 1}`} className="cursor-pointer py-1">
              <Rating maxRate={maxRating} rate={i + 1} size={4} />
            </Label>
          </div>
        );
      })}
    </div>
  );
}

export default RatingFilter;
