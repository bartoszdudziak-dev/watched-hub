import Header from './Header';
import { Outlet } from 'react-router';
import SearchBox from '../SearchBox/SearchBox';
import Main from './Main';

function AppLayout() {
  return (
    <div className="min-h-dvh">
      <Header />

      <Main>
        <SearchBox />
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
