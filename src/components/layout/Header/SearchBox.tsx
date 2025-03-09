import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        placeholder="Movie or TV Series"
        className="!text-lg"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </div>
  );
}

export default SearchBox;
