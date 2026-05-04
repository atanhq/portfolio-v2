import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import link from '../assets/link-out.svg';
import github from '../assets/github.svg';
import portfolio from '../assets/portfolio.png';

function ProjectPortfolio({ isOpen }){

	useEffect(() => {
		document.title = `Portfolio - ${appTitle}`;
	}, []);

	return (
		<main>
			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<section className="single-grid">
					<div className="single-left">
						<h1>NANA! Portfolio</h1>

						<div className="single-hero">
							<img src={portfolio} alt="Portfolio project" />
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://github.com/atanhq/portfolio-v2" target="_blank">
								<img src={github} alt="view github" /> 
								<span>Github</span></a>
							</div>

							<div className="view-link">
								<a href="/">
								<img src={link} alt="view live" /> 
								<span>Live</span></a>
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
											<p><em>Show us your personality</em>. That was our directive for the portfolio project. For weeks, I pondered what that meant for me and how I could translate it into a design. I looked at my workspace, the websites I admired, and the graphics that caught my eye, and found a common thread between them: simple, clean, and mostly monochromatic. Knowing that my portfolio would be stripped of colour, I pushed myself with its design, so even though it appears minimalistic, it still has personality.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p>I went through several iterations before settling on this current design. From the beginning, I knew I wanted a container element - something that emulated the digital experience of a computer screen without all the noise, so I opted for subtle animations and content that's easy on the eyes. At my core, I am a reflective person; the negative space in my design is intended to emphasize that by giving "breathing room."</p>

											<p>When developing the desktop home page, I applied what I learned in my design and UX/UI courses and considered how I wanted to guide the user's eye. Since we tend to read left to right, I placed my logo in the upper left, then drew attention to the right with a notification that slides in a second later. For the mobile navigation, I chose to move it to the bottom so it's easier for a phone user to tap on it.</p>

											<p>I carried what I'd learned into my Capstone project, <Link to="/tofino-time"><img src={link} alt="view live" /> Tofino Time</Link>.</p>
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
