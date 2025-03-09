import Logo from './Logo';
import SearchBox from './SearchBox';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <header className="border-b-1 p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
        <Logo />
        <SearchBox />
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
