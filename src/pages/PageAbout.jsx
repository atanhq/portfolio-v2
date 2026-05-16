import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Accordion from 'react-bootstrap/Accordion';
import arrow from '../assets/arrow.svg';

function PageAbout({ isOpen }){

	useEffect(() => {
		document.title = `About - ${appTitle}`;
	}, []);

return (
	<main>
		<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

		<section className="about">
			<div className="about-left">
				<h1>Hello, <br />
				I'm Nana.</h1>

				<div className="about-details">
					<p>I'm a Web Developer and UX Designer based in Vancouver, BC.</p>

					<p>To me, development is a lot like storytelling where every colour, every piece of content, and every line of code build a unique experience for the end user.</p>
					
					<p>Along with my Front-End Web Development certificate from BCIT, I hold a BA in Business Management and Psychology with a specialization in positive psychology - a subfield that focuses on human satisfaction and accomplishment. I take this people-first, interaction-oriented approach when conceptualizing my designs.</p>

					<div className="view-next about-view">
						<HashLink smooth to="/#projects">View My Projects <img src={arrow} alt="arrow pointing right" aria-label="view my projects" className="view-next-arrow"/></HashLink>
					</div>
				</div>
			</div>

			<div className="about-right">
				<div className="toolbox-container">
					<h2 className="toolbox-title">Toolbox</h2>

					<div className="tools">
						<i class="devicon-react-original" aria-label="react"></i>
						<i class="devicon-javascript-plain" aria-label="javascript"></i>
						<i class="devicon-php-plain" aria-label="php"></i>
						<i class="devicon-sass-original" aria-label="sass"></i>
						<br />
						<i class="devicon-bootstrap-plain" aria-label="bootstrap"></i>
						<i class="devicon-wordpress-plain" aria-label="wordpress"></i>
						<i class="devicon-woocommerce-plain" aria-label="woocommerce"></i>
						<i class="devicon-css3-plain" aria-label="css"></i>
						<br />
						<i class="devicon-figma-plain" aria-label="figma"></i>
						<i class="devicon-photoshop-plain" aria-label="photoshop"></i>
						<i class="devicon-illustrator-plain" aria-label="illustrator"></i>
						<i class="devicon-xd-plain" aria-label="adobe xd"></i>
					</div>
				</div>

				<div className="fun-facts">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>What are your hobbies?</Accordion.Header>
							<Accordion.Body>
								<p>Writing! I've been telling stories for as long as I can remember. I also love reading. Some of my favourite authors are Uketsu, Gillian Flynn, and R.F. Kuang.</p>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="1">
							<Accordion.Header>How about your MBTI?</Accordion.Header>
							<Accordion.Body>
								<p>INTP, the Logician. Creative and resourceful, I like to push the envelope of what is possible, analyzing, researching, and plunging myself into the depths of whatever captures my interest. Lately, it's been the Hook Model.</p>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>Recs for foodie spots?</Accordion.Header>
							<Accordion.Body>
								<p><strong>Canffle</strong> if you love a good brunch. <strong>East is East</strong> for an amazing dining experience. <strong>La Taqueria</strong> for their nachos. <strong>Paragon</strong> is known for their matcha, but don't sleep on their mango hojicha. And <strong>Just Pizza</strong> - give their adventurous ones a try!</p>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>Give us a fun fact!</Accordion.Header>
							<Accordion.Body>
								<p>I've traveled to 12 countries - The United States, Mexico, England, France, Italy, Switzerland, Germany, China, Hong Kong, South Korea, Japan, and Thailand. One day, I'd love to visit Vietnam too.</p>
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

export default PageAbout;