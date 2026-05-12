import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import link from '../assets/link-out.svg';
import github from '../assets/github.svg';
import flixi from '../assets/flixi.png';
import arrow from '../assets/arrow.svg';

function ProjectFlixi({ isOpen }){

	useEffect(() => {
		document.title = `Flixi Movie Database - ${appTitle}`;
	}, []);

	return (
		<main>
			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<section className="single-grid">
					<div className="single-left">
						<h1>Flixi Movie Database</h1>

						<div className="single-hero">
							<img src={flixi} alt="Flixi Movie Database project" />
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://github.com/atanhq/fwdp-3400-flixi" target="_blank">
								<img src={github} alt="view github" /> 
								<span>Github</span></a>
							</div>

							<div className="view-link">
								<a href="https://nanatan.com/flixi/" target="_blank">
								<img src={link} alt="view live" /> 
								<span>Live</span></a>
							</div>
						</div>

						<div className="single-details">
							<p className="single-details-label">Role</p>
							<p>Designer & Developer, Team of 3</p>
							
							<p className="single-details-label">Tools Used</p>
							<p>React, Adobe XD, Illustrator, Photoshop</p>
							
							<p className="single-details-label">Skills Gained</p>
							<p>API integration, React Redux, Prototyping</p>
						</div>
					</div>

					<div className="single-right">
						<h1>Flixi Movie Database</h1>

						<div className="single-blurb">
							<p>A movie database built with React, featuring TMDB API, favourites, and search.</p>
						</div>

						<div className="single-accordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header><h2>The Vision</h2></Accordion.Header>
										<Accordion.Body>
											<p>The name <em>Flixi</em> came to us over greasy burgers and generously salted fries. We were a month into the web development program, mulling over the movie database project we would need to design and develop. What would be the theme? The colours? The name? A stroke of brilliance struck one of my teammates all of a sudden. "Flixi," she blurted, as a joke. But it stuck. <em>Flixi</em>, our movie-loving robot!</p>

											<p>We went traditional with our initial lo-fi mockup, using only pen and paper and the occasional straight edge of a credit card. The ideas were endless, but we were quick to identify non-negotiables. We wanted a dark theme - reminiscient of cozy movie nights - and a clean, minimalist design that made it easy for the user to find movies.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p>The movie database was our first large-scale team project. It felt like a huge mountain to overcome, even when we were armed with a high-fi prototype. Our gameplan was to set the global elements of the site before breaking down each page and feature. What we didn't realize starting out was how integrated every component would eventually become. There were merge conflicts and critical errors, but we remained open and communicative, working together to resolve the issue before moving forward.</p>

											<p>As a result of our seamless collaboration, we were able to add sleek features to enhance the user experience such as incorporating a loader of our mascot, search suggestion, and genre tags.</p>

											<p>I built my next project - this portfolio - with everything I'd learned from Flixi. Check it out here: <Link to="/portfolio"><img src={link} alt="view live" /> NANA! Portfolio</Link>.</p>
										</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>

						<div className="view-next">
							<Link to="/portfolio">View Next Project <img src={arrow} alt="arrow pointing right" aria-label="view project portfolio" className="view-next-arrow"/></Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	);

}

export default ProjectFlixi;
