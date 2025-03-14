import { createContext, ReactNode, useContext, useState } from 'react';
import { useSearchParams } from 'react-router';

type SearchContextProps = {
  searchConfig: SearchConfig;
  onSearchConfigChange: <K extends keyof SearchConfig>(name: K, value: SearchConfig[K]) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

type SearchProviderProps = {
  children: ReactNode;
};

export type SearchConfig = {
  query: string;
  order: 'asc' | 'desc';
  sort: 'title' | 'rate' | 'watched_date' | 'release_date';
  rate: number[];
};

const getiInitSearchConfig = (searchParams: URLSearchParams) => {
  const query = searchParams.get('title');
  const order = searchParams.get('order');
  const sort = searchParams.get('sort');
  const rate = searchParams.get('rate');

  return {
    query: query || '',
    order: order || 'asc',
    sort: sort || 'title',
    rate: rate ? rate.split(',').map(rate => Number(rate)) : [1, 2, 3, 4, 5],
  };
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  // init values should be checked if they are valid fot SearchConfig
  const [searchConfig, setSearchConfig] = useState(
    getiInitSearchConfig(searchParams) as SearchConfig,
  );

  const onSearchConfigChange = <K extends keyof SearchConfig>(name: K, value: SearchConfig[K]) => {
    setSearchConfig(prevConfig => ({ ...prevConfig, [name]: value }));
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { query, sort, order, rate } = searchConfig;

    searchParams.set('title', query);
    searchParams.set('sort', sort);
    searchParams.set('order', order);
    searchParams.set('rate', rate.join(','));

    setSearchParams(searchParams);
  };

  return (
    <SearchContext.Provider value={{ searchConfig, onSearchConfigChange, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchPost = () => {
  const context = useContext(SearchContext);

  if (context === undefined) throw new Error('useSearchPost must be used within a SearchProvider');

  return context;
};
