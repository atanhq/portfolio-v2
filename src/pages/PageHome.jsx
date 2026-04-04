import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';

import ToggleMenu from '../components/ToggleMenu'
import ProjectsAll from '../components/ProjectsAll'
import Notification from '../components/Notification'

import portrait from '../assets/placeholder-home.png'

function PageHome(){

    // set state for nav toggle, passes to ToggleMenu.jsx
    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

	useEffect(() => {
		document.title = `${appTitle}`;
	}, []);

	return (
		<main>
			<ToggleMenu isOpen={isOpen} toggle={toggle} />

			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<Notification />

				<section className="landing">
					<span className="home-name">Nana</span>
					<img src={portrait} alt="portrait" className="portrait" />
				</section>

				<div className="tagline">
					<span>Developer</span>
					<span>Designer</span>
				</div>

				<ProjectsAll />
			</div>
		</main>
	);

}

export default PageHome;
