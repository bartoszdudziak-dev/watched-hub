import Header from './Header';
import { Outlet } from 'react-router';
import Main from './Main';
import SearchBar from '../Search/SearchBar';
import { SearchProvider } from '@/context/SearchContext';

function AppLayout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <Header />

      <Main>
        <SearchProvider>
          <SearchBar />
        </SearchProvider>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
