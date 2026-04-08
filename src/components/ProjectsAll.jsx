import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';

import ToggleMenu from '../components/ToggleMenu'
import arrow from '../assets/arrow-right.svg';
import close from '../assets/close.svg';

function ProjectsAll(){

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

				<h2 className="all-title">Projects</h2>

				<section className="all">
					<img src={close} className="close" />

					<div className="all-cards">
					<article className="card">
						<div className="card-link">
							<h3>Tofino.php</h3>
							<img src={arrow} alt="view project" className="arrow" />
						</div>
						<img src="https://placehold.co/300x180/ccc/FFF" className="card-image" />
					</article>

					<article className="card">
						<div className="card-link">
							<h3>Flixi.jsx</h3>
							<img src={arrow} alt="view project" className="arrow" />
						</div>
						<img src="https://placehold.co/300x180/ccc/FFF" className="card-image" />
					</article>

					<article className="card">
						<div className="card-link">
							<h3>Portfolio.jsx</h3>
							<img src={arrow} alt="view project" className="arrow" />
						</div>
						<img src="https://placehold.co/300x180/ccc/FFF" className="card-image" />
					</article>

					<article className="card">
						<div className="card-link">
							<h3>Escape.js</h3>
							<img src={arrow} alt="view project" className="arrow" />
						</div>
						<img src="https://placehold.co/300x180/ccc/FFF" className="card-image" />
					</article>
					</div>
				</section>
			</div>
		</main>
	);

}

export default ProjectsAll;
