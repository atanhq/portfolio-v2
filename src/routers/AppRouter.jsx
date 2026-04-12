import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import ProjectFlixi from '../pages/ProjectFlixi';
import ProjectTofino from '../pages/ProjectTofino';
import ProjectEscape from '../pages/ProjectEscape';
import ProjectPortfolio from '../pages/ProjectPortfolio';
import Header from '../components/Header'

function AppRouter() {

  // set state for nav toggle, passes to ToggleMenu.jsx
	const [ isOpen, setIsOpen ] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

  return (
    <BrowserRouter>
      <Header isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" exact element={<PageHome isOpen={isOpen} />} />
          <Route path="/about" exact element={<PageAbout isOpen={isOpen} />} />
          <Route path="/flixi-movie-database" exact element={<ProjectFlixi isOpen={isOpen} />} />
          <Route path="/tofino-time" exact element={<ProjectTofino isOpen={isOpen} />} />
          <Route path="/escape-the-lair" exact element={<ProjectEscape isOpen={isOpen} />} />
          <Route path="/portfolio" exact element={<ProjectPortfolio isOpen={isOpen} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
