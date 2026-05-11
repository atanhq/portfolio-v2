import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { HashLink } from "react-router-hash-link";
import ProjectsAll from '../components/ProjectsAll'
import Notification from '../components/Notification'
import Copyright from '../components/Copyright'
import portrait from '../assets/placeholder-home.png'
import arrow from '../assets/arrow.svg';

function PageHome({ isOpen }){

	useEffect(() => {
		document.title = `${appTitle}`;
	}, []);

	return (
		<main>
			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<Notification />

				<section className="home-landing">
					<div className="home-tagline">
						<span>Nana</span>
						<span>Developer</span>
						<span>UX/UI Designer</span>

						<HashLink smooth to="/#projects" className="scroll-down"><img src={arrow} alt="arrow pointing down" aria-label="skip to content"/></HashLink>
					</div>

					<img src={portrait} alt="" className="home-portrait" />
				</section>

				<section id="projects">
					<ProjectsAll />
				</section>

				<Copyright />
			</div>
		</main>
	);

}

export default PageHome;
