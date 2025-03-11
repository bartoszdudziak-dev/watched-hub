import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useLocation } from 'react-router';

function SearchBox() {
  const { pathname } = useLocation();
  const [query, setQuery] = useState('');

  const getPlaceholder = () => {
    if (pathname.includes('movies')) return 'Type movie title';
    if (pathname.includes('series')) return 'Type series title';

    return 'Type movie or series title';
  };

  return (
    <div className="mx-auto mb-10 flex h-12 w-full max-w-lg items-stretch gap-2">
      <Input
        placeholder={getPlaceholder()}
        className="h-full !text-lg"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button size="lg" type="submit" className="h-full text-lg">
        Search
      </Button>
    </div>
  );
}

export default SearchBox;
