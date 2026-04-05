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

			<h2 className="my-story-title">My Story</h2>

			<div className="based-in">
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 384 512" fa-rotate-90><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>

					<p className="based-in-tagline">Based in Vancouver, BC</p>
			</div>

			<section className="my-story-extra">
					<p className="my-story-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tortor sagittis, porttitor orci nec, malesuada dui. Donec efficitur urna lorem, vel bibendum orci volutpat a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis orci lectus, pulvinar non mattis et, fringilla vitae orci. Morbi tempus arcu et eros commodo, at porttitor lacus ultrices. </p>

					<div className="toolbox-container">
							<h2 className="toolbox-title">Toolbox</h2>
							<div className="tools">
									tools here
							</div>
					</div>

					<div className="fun-facts">
							<Accordion>
									<Accordion.Item eventKey="0">
											<Accordion.Header>What are your hobbies?</Accordion.Header>
											<Accordion.Body>
											Lorem ipsum dolor sit amet.
											</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="1">
											<Accordion.Header>What's your MBTI?</Accordion.Header>
											<Accordion.Body>
											Lorem ipsum dolor sit amet.
											</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="2">
											<Accordion.Header>What are you learning?</Accordion.Header>
											<Accordion.Body>
											Lorem ipsum dolor sit amet.
											</Accordion.Body>
									</Accordion.Item>
							</Accordion>
					</div>
			</section>
			</div>
    </main>
);

}

export default PageAbout;