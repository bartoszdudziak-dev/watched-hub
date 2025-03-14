import { useLocation } from 'react-router';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useSearchPost } from '@/context/SearchContext';

function SearchInput() {
  const {
    searchConfig: { query },
    onSearchConfigChange,
  } = useSearchPost();

  const { pathname } = useLocation();

  const getPlaceholder = () => {
    if (pathname.includes('movies')) return 'Type movie title';
    if (pathname.includes('series')) return 'Type series title';
    return 'Type movie or series title';
  };

  return (
    <div className="mt-4 flex h-12 w-full max-w-lg items-stretch gap-2">
      <Input
        placeholder={getPlaceholder()}
        className="h-full !text-lg"
        value={query}
        name="query"
        onChange={e => onSearchConfigChange('query', e.target.value)}
      />
      <Button size="lg" type="submit" className="h-full text-lg">
        Search
      </Button>
    </div>
  );
}

export default SearchInput;
