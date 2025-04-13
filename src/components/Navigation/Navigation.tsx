import { NAVIGATION } from '@/constants/navigation';
import NavItem from './NavItem';

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-5 lg:gap-10">
        {NAVIGATION.map(({ label, path }) => (
          <NavItem path={path} key={path}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
