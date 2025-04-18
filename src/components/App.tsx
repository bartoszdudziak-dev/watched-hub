import { Route, Routes } from 'react-router';
import AppLayout from './Layout/AppLayout';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import Series from '@/pages/Series';
import Review from '@/pages/Review';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
      <Route path="/review/:id" element={<Review />} />
    </Routes>
  );
}

export default App;
