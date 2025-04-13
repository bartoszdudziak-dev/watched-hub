import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/context/ThemeContext';
import { MoonIcon, SunIcon } from 'lucide-react';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center gap-2">
      <SunIcon
        size={20}
        className={`${theme === 'dark' ? 'opacity-50' : 'opacity-100'} hidden sm:block`}
      />
      <Switch onClick={toggleTheme} checked={theme === 'dark'} />
      <MoonIcon
        size={20}
        className={`${theme === 'light' ? 'opacity-50' : 'opacity-100'} hidden sm:block`}
      />
    </div>
  );
}

export default ThemeSwitch;
