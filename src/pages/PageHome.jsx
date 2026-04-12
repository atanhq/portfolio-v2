import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import ProjectsAll from '../components/ProjectsAll'
import Notification from '../components/Notification'
import Copyright from '../components/Copyright'
import portrait from '../assets/placeholder-home.png'

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
					</div>
					<img src={portrait} alt="portrait" className="home-portrait" />
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
