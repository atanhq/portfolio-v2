import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';

import ToggleMenu from '../components/ToggleMenu'
import Accordion from 'react-bootstrap/Accordion';

import link from '../assets/link-out.svg';
import github from '../assets/github.svg';
import tofino from '../assets/tofino.png';

function ProjectTofino(){

	const [ isOpen, setIsOpen ] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		document.title = `Tofino Time - ${appTitle}`;
	}, []);

	return (
		<main>
			<ToggleMenu isOpen={isOpen} toggle={toggle} />

			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<section className="single-grid">
					<div className="single-left">
						<h1>Tofino Time</h1>

						<div className="single-hero">
							<img src={tofino} alt="Tofino Time project" />
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://github.com/htpwebdesign/tofino-time-theme"><img src={github} alt="view github" /> <span>Github</span></a>
							</div>

							<div className="view-link">
								<a href="https://tofinotime.bcitwebdeveloper.ca/"><img src={link} alt="view live" /> <span>Live</span></a>
							</div>
						</div>

						<div className="single-details">
							<p className="single-details-label">Role</p>
							<p>Designer & Developer, Team of 4</p>
							
							<p className="single-details-label">Tools Used</p>
							<p>Wordpress, Woocommerce, Figma</p>
							
							<p className="single-details-label">Skills Gained</p>
							<p>Woocommerce, ACF, Leaflet JS library</p>
						</div>
					</div>

					<div className="single-right">
						<h1>Tofino Time</h1>

						<div className="single-blurb">
							<p>Explore the beauty of Tofino through guided tours, built with Woocommerce.</p>
						</div>

						<div className="single-accordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header><h2>The Vision</h2></Accordion.Header>
										<Accordion.Body>
											<p>The fresh, crisp air. The calm, cool water. Tofino is the place to go when you want a fun, casual weekend trip with good company - and that's what my team wanted to capture with our design. More details coming soon.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p>We wanted users to find information about our tours, workshops, and guides easily, so we focused our efforts into short, visually appealing details with decorative icons to draw the eye. For a majority of our output, we used Advanced Custom Fields, allowing the client to seamlessly add information. More details coming soon.</p>
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

export default ProjectTofino;
