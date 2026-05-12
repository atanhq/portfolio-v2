import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import link from '../assets/link-out.svg';
import tofino from '../assets/tofino.png';
import arrow from '../assets/arrow.svg';

function ProjectTofino({ isOpen }){

	useEffect(() => {
		document.title = `Tofino Time - ${appTitle}`;
	}, []);

	return (
		<main>
			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

				<section className="single-grid">
					<div className="single-left">
						<h1>Tofino Time</h1>

						<div className="single-hero">
							<img src={tofino} alt="Tofino Time project" />
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://www.figma.com/design/NRpVm7SRqt9QMPiIovnZZb/tofino-time-v2?node-id=0-1&p=f" target="_blank">
								<i class="devicon-figma-plain"></i>
								<span>Figma</span></a>
							</div>

							<div className="view-link">
								<a href="https://tofinotime.bcitwebdeveloper.ca/" target="_blank">
								<img src={link} alt="view live" /> 
								<span>Live</span></a>
							</div>
						</div>

						<div className="single-details">
							<p className="single-details-label">Role</p>
							<p>Designer & Developer, Team of 4</p>
							
							<p className="single-details-label">Tools Used</p>
							<p>WordPress, WooCommerce, Figma</p>
							
							<p className="single-details-label">Skills Gained</p>
							<p>WooCommerce, ACF, Leaflet JS library</p>
						</div>
					</div>

					<div className="single-right">
						<h1>Tofino Time</h1>

						<div className="single-blurb">
							<p>A guided tourism and workshop site, built with WooCommerce.</p>
						</div>

						<div className="single-accordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header><h2>The Vision</h2></Accordion.Header>
										<Accordion.Body>
											<p>The fresh, crisp air. The calm, cool water. Tofino is the place to go when you want a fun, casual weekend trip with good company - and that's what my team wanted to capture with our design. Since we were working with a tourism site, we prioritized a seamless navigation, straight-forward content, and visuals that showcased the beauty of Tofino.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p>Our kick-off meeting lasted several hours as we scoured tourism sites to gain a sense of what we wanted our site to look like and how we should present information. With four people, opinions varied and aesthetics clashed, but we all agreed on one core aspect - quick and easy. This became the foundation of our development. We wanted users to find, read, and digest information at a glance, so we opted for bullet points, supplementary icons, and wooden buttons to draw the eye.</p>

											<p>The most challenging feature was our interactive map. We dabbled with plugins and ACF's Google Maps, but ultimately, decided to use the open-source JavaScript library, Leaflet. Our idea was to output the tour's information in a pop-up once the user clicks on a pin. To do this, we used ACF fields, a little bit of PHP, and a lot of JavaScript. It was through many trials and errors that we were able to create a feature that didn't have a lot of resources. The triumph that came from "hacking it" reminded us why we wanted to go into development in the first place: we wanted to create something cool!</p>
										</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="view-next">
							<Link to="/escape-the-lair">View Next Project <img src={arrow} alt="arrow pointing right" aria-label="view project escape the lair" className="view-next-arrow"/></Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	);

}

export default ProjectTofino;
