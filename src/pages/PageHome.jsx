import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { HashLink } from "react-router-hash-link";
import ProjectsAll from '../components/ProjectsAll'
import Notification from '../components/Notification'
import Copyright from '../components/Copyright'
import downarrow from '../assets/down-arrow.svg';

function PageHome({ isOpen }){

	useEffect(() => {
		document.title = `${appTitle}`;
	}, []);

	return (
		<main>
			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<Notification />

				<section className="home-landing">
					<div className="home-title">
						<span className="home-name">N<em>a</em>n<em>a</em></span>
						<span className="home-tagline">Web Developer <strong>&</strong> UX Designer</span>

						<div className="scroll-down">
							<HashLink smooth to="/#projects"><img src={downarrow} alt="arrow pointing down" aria-label="skip to content" /></HashLink>
						</div>
					</div>
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
