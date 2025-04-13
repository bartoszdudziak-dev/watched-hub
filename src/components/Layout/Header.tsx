import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Container from './Container';

function Header() {
  return (
    <header className="border-b-1 p-6">
      <Container>
        <div className="flex items-center justify-between lg:gap-10">
          <Logo />
          <div className="mr-4 lg:ml-auto">
            <Navigation />
          </div>
          <ThemeSwitch />
        </div>
      </Container>
    </header>
  );
}

export default Header;
