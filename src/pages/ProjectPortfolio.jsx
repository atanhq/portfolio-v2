import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import ToggleMenu from '../components/ToggleMenu'

import Accordion from 'react-bootstrap/Accordion';
import link from '../assets/link-out.svg';
import github from '../assets/github.svg';
import portfolio from '../assets/portfolio.png';

function ProjectPortfolio(){

	const [ isOpen, setIsOpen ] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		document.title = `Portfolio - ${appTitle}`;
	}, []);

	return (
		<main>
			<ToggleMenu isOpen={isOpen} toggle={toggle} />

			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<section className="single-grid">
					<div className="single-left">
						<h1>NANA! Portfolio</h1>

						<div className="single-hero">
							<img src={portfolio} alt="Portfolio project" />
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://github.com/atanhq/portfolio-v2"><img src={github} alt="view github" /> <span>Github</span></a>
							</div>

							<div className="view-link">
								<a href="/"><img src={link} alt="view live" /> <span>Live</span></a>
							</div>
						</div>

						<div className="single-details">
							<p className="single-details-label">Role</p>
							<p>Designer & Developer</p>
							
							<p className="single-details-label">Tools Used</p>
							<p>React, Bootstrap, Figma</p>
							
							<p className="single-details-label">Skills Gained</p>
							<p>Router, Bootstrap, Prototyping</p>
						</div>
					</div>

					<div className="single-right">
						<h1>NANA! Portfolio</h1>

						<div className="single-blurb">
							<p>A portfolio designed in Figma and built with React and Bootstrap.</p>
						</div>

						<div className="single-accordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header><h2>The Vision</h2></Accordion.Header>
										<Accordion.Body>
											<p>Ever since my first mockup, I'd wanted to do a container design. I was inspired by the layout of a computer screen and big, bold typography that takes advantage of all the white space.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p><em>Show your personality.</em> That was our directive for the portfolio. For weeks, I pondered what that meant for me and how I could translate that into a design. I looked at my room, my clothes, the websites that I admired, and found the common thread: simple, clean, and mostly monochromatic. Since I value minimalism, I pushed myself with several iterations before settling on the one you see before you. The animations are subtle, and the content is spaced out and easy on the eyes. I wanted to bring a calm and reflective experience to anyone who visits my page.</p>
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

export default ProjectPortfolio;
