import { selectSortOptions } from '@/constants/selectSortOptions';
import { selectOrderOptions } from '@/constants/selectOrderOptions';
import RateFilter from './RatingFilter';
import SearchInput from './SearchInput';
import SearchSelect from './SearchSelect';
import { useSearchPost } from '@/context/SearchContext';

function SearchBar() {
  const { onSearch } = useSearchPost();

  return (
    <form onSubmit={onSearch} className="mb-12 flex flex-col gap-10 border-b-1 pb-10 md:flex-row">
      <div className="flex gap-2 md:flex-col">
        <SearchSelect name="sort" label="Sort by" placeholder="Sort by" items={selectSortOptions} />
        <SearchSelect name="order" label="Order" placeholder="Order" items={selectOrderOptions} />
      </div>

      <RateFilter maxRating={5} />
      <SearchInput />
    </form>
  );
}

export default SearchBar;
