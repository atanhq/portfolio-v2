import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import ToggleMenu from '../components/ToggleMenu'

import Accordion from 'react-bootstrap/Accordion';
import link from '../assets/link-out.svg';
import github from '../assets/github.svg';
// import flixi from '../assets/flixi.mov';
import flixi from '../assets/flixi.png';

function ProjectFlixi(){

	const [ isOpen, setIsOpen ] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		document.title = `Flixi Movie Database - ${appTitle}`;
	}, []);

	return (
		<main>
			<ToggleMenu isOpen={isOpen} toggle={toggle} />

			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<section className="single-grid">
					<div className="single-left">
						<h1>Flixi Movie Database</h1>

						<div className="single-hero">
							<img src={flixi} alt="Flixi Movie Database project" />

							{/* <video src={flixi} width="640" height="400" autoPlay loop muted></video> */}
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://github.com/atanhq/fwdp-3400-flixi"><img src={github} alt="view github" /> <span>Github</span></a>
							</div>

							<div className="view-link">
								<a href="https://nanatan.com/flixi/"><img src={link} alt="view live" /> <span>Live</span></a>
							</div>
						</div>

						<div className="single-details">
							<p className="single-details-label">Role</p>
							<p>Designer & Developer</p>
							
							<p className="single-details-label">Tools Used</p>
							<p>React, Photoshop, Adobe XD</p>
							
							<p className="single-details-label">Skills Gained</p>
							<p>API integration, React Redux, Prototyping</p>
						</div>
					</div>

					<div className="single-right">
						<h1>Flixi Movie Database</h1>

						<div className="single-blurb">
							<p>The name <em>Flixi</em> came to us over greasy burgers and overly-salted fries. We were a month into the program then, mulling over the movie database project we would need to design and develop. What would be the theme? The colours? The name? A stroke of brilliance struck one of my teammates all of a sudden. "Flixi," she blurted, clearly as a joke. But it stuck. <em>Flixi</em>, our movie-loving robot!</p>
						</div>

						<div className="single-accordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header><h2>The Vision</h2></Accordion.Header>
										<Accordion.Body>
											<p>We went traditional with our initial lo-fi mockup, using only pen and paper and the occasional straight edge of a credit card. The ideas were endless, and we were quick to identify non-negotiables. We wanted a dark theme - reminiscient of movie nights - and a clean, minimalist design that made it easy for the user to find and favourite movies.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p>After designing a high-fi prototype with XD, we dove into development by laying down the foundation of each page first. I learned how to pull API data from TMDB, integrate libraries to create a local storage for the user's favourites, and state management. This portfolio, coded with React and Bootstrap, is the direct result of what I'd learned from developing Flixi!</p>
										</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</section>
			</div>
		</main>
	);

}

export default ProjectFlixi;
