import { ReactNode } from 'react';
import { NavLink } from 'react-router';

type NavItemProps = { path: string; children: ReactNode };

function NavItem({ path, children }: NavItemProps) {
  return (
    <li className="text-lg">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'font-semibold text-inherit' : 'text-muted-foreground'
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
