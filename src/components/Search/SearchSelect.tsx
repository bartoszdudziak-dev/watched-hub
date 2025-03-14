import { SearchConfig, useSearchPost } from '@/context/SearchContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type SelectItem = { value: string; label: string };
type SelectItems = SelectItem[];

type SearchSelectProps = {
  placeholder: string;
  items: SelectItems;
  name: keyof SearchConfig;
  label: string;
};

function SearchSelect({ placeholder, items, name, label }: SearchSelectProps) {
  const { searchConfig, onSearchConfigChange } = useSearchPost();
  const selectedValue = String(searchConfig[name as keyof SearchConfig] ?? '');

  return (
    <div>
      <span className="text-sm font-semibold tracking-wider uppercase">{label}</span>
      <Select onValueChange={value => onSearchConfigChange(name, value)} value={selectedValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SearchSelect;
