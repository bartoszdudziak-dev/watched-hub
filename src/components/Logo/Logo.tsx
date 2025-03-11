import { useTheme } from '@/context/ThemeContext';
import lightLogo from '../../assets/images/logo-light.png';
import darkLogo from '../../assets/images/logo-dark.png';

function Logo() {
  const { theme } = useTheme();

  return (
    <div className="flex shrink-0 items-baseline gap-2">
      <img src={theme === 'light' ? darkLogo : lightLogo} alt="Logo" className="size-12" />
      <h1 className="hidden text-4xl font-semibold md:block">WatchedHub</h1>
    </div>
  );
}

export default Logo;
