import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import ToggleMenu from '../components/ToggleMenu'
import { Link } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageAbout(){

    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
		document.title = `About - ${appTitle}`;
	}, []);

return (
    <main>
			<ToggleMenu isOpen={isOpen} toggle={toggle} />

			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>

			<div className="logo">
				<Link to="/"><img src="https://placehold.co/50x50/000000/FFF" /></Link>
			</div>

			{/* <h2 className="my-story-title">My Story</h2> */}

			{/* <div className="based-in">
					<i class="bi bi-pin-angle-fill"></i>
					<p className="based-in-tagline">Based in Vancouver, BC</p>
			</div> */}

			<section className="about">

				<div className="left">
					<h1>Hi, I'm Nana!</h1>

					<div className="about-details">
						<p>I'm a web developer and designer based in <strong>Vancouver, BC</strong>. My passion for designing webpages started with one goal: to make a Myspace page that made people go WOW!</p>

						<p>But with Myspace coming to an end, I found myself looking towards other pursuits. I graduated with a degree in Business Management and Psychology.</p>

						<p>It wasn't until I was well into my corporate career did I realize a future in web development was possible. It was a difficult choice, as is every career change, but when I set foot in BCIT's Front-End Developer Program, I knew this was where I wanted to be.</p>

						<p>So now I'm back here with the same goal: to make you go WOW!</p>
					</div>
				</div>

				<div className="right">
					<div className="toolbox-container">
						<h2 className="toolbox-title">Toolbox</h2>

						<div className="tools">
							<i class="devicon-react-original"></i>
							<i class="devicon-javascript-plain"></i>
							<i class="devicon-php-plain"></i>
							<i class="devicon-sass-original"></i>
							<br />
							<i class="devicon-bootstrap-plain"></i>
							<i class="devicon-wordpress-plain"></i>
							<i class="devicon-woocommerce-plain"></i>
							<i class="devicon-figma-plain"></i>
							<br />
							<i class="devicon-photoshop-plain"></i>
							<i class="devicon-illustrator-plain"></i>
							<i class="devicon-xd-plain"></i>
						</div>
					</div>

					<div className="fun-facts">
							<Accordion>
									<Accordion.Item eventKey="0">
											<Accordion.Header>What are some of your hobbies?</Accordion.Header>
											<Accordion.Body>
												<p>Writing and drawing - one of my dreams is to be able to illustrate the stories in my head. I also enjoy learning languages (the spoken kind) and going on runs.</p>
											</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="1">
											<Accordion.Header>How about your MBTI?</Accordion.Header>
											<Accordion.Body>
												<p>Drumroll please ... INTP! Creative and resourceful, I like to push the envelope of what is possible, analyzing, researching, and plunging myself into the depths of whatever captures my interest.</p>
											</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="2">
											<Accordion.Header>Any recs for foodie spots?</Accordion.Header>
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