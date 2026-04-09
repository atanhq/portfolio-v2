import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import ProjectFlixi from '../pages/ProjectFlixi';
import ProjectTofino from '../pages/ProjectTofino';
import ProjectEscape from '../pages/ProjectEscape';
import ProjectPortfolio from '../pages/ProjectPortfolio';

import Header from '../components/Header'

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" exact element={<PageAbout />} />
          <Route path="/flixi-movie-database" exact element={<ProjectFlixi />} />
          <Route path="/tofino-time" exact element={<ProjectTofino />} />
          <Route path="/escape-the-lair" exact element={<ProjectEscape />} />
          <Route path="/portfolio" exact element={<ProjectPortfolio />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
