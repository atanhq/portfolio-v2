import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" exact element={<PageAbout />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
