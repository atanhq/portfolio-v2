import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import link from '../assets/link-out.svg';
import github from '../assets/github.svg';
import escape from '../assets/escape.png';

function ProjectEscape({ isOpen }){

	useEffect(() => {
		document.title = `Escape the Demon Lair - ${appTitle}`;
	}, []);

	return (
		<main>
			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>
				<section className="single-grid">
					<div className="single-left">
						<h1>Escape the Demon Lair</h1>

						<div className="single-hero">
							<img src={escape} alt="Escape the Lair project" />
						</div>

						<div className="single-links">
							<div className="view-link">
								<a href="https://github.com/atanhq/js-game"><img src={github} alt="view github" /> <span>Github</span></a>
							</div>

							<div className="view-link">
								<a href="https://nanatan.com/escape/"><img src={link} alt="view live" /> <span>Live</span></a>
							</div>
						</div>

						<div className="single-details">
							<p className="single-details-label">Role</p>
							<p>Developer</p>
							
							<p className="single-details-label">Tools Used</p>
							<p>JavaScript, Illustrator</p>
							
							<p className="single-details-label">Skills Gained</p>
							<p>JavaScript, CSS animations</p>
						</div>
					</div>

					<div className="single-right">
						<h1>Escape the Lair</h1>

						<div className="single-blurb">
							<p>A JavaScript game featuring a story element and sound effects.</p>
						</div>

						<div className="single-accordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header><h2>The Vision</h2></Accordion.Header>
										<Accordion.Body>
											<p><em>Hello ...? Can anyone hear me ...?</em> You wake up in an abyss, your senses dull to the eerieness around you. Where are you? How did you get here? You hear laughter echoing against distant walls - then you see them: those glowing red eyes, curved in mischief. You've fallen into the depths of a monster's lair, and the only way out is to beat them at their own game.</p>

											<p>When I first received details of this project, I knew I had to do a story element. It was mid-October, a few weeks out from Halloween, and I was in a spooky spirit, so dropping the player into a dark lair came naturally. My vision was simple: a dialogue sequence to set the tone, a gameboard that shakes when the monster loses, and an ending scene that loops back to the gameboard to imply that, even if the player "wins," they can never escape. Terrifying, isn't it? I spooked myself coding it late into the night.</p>
										</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header><h2>Reflection</h2></Accordion.Header>
										<Accordion.Body>
											<p><em>Escape the Lair</em> was my first ever "coding project." I'd dabbled with HTML and CSS before, but when it came to programming languages, I knew next to nothing. It was difficult to wrap my head around loops and if-else statements - but I had a vision, and I wanted to make it real. Developing this game led me to learn those core concepts and solidify a foundation that I could later build up from.</p>

											<p>While the player's enemy was the monster I'd created, my enemy was conditionals. Every time a hand is played, the monster's eyes, dialogue, and health bar changes. I initially tried to include it within the if-else statement that determines whether the monster wins, loses, or draws, but the statement quickly became too convulted and nested. My solution was to separate each result into its own function, which I could then call when a condition was met.</p>

											<p>Learning to break down each feature into smaller components became incredibly helpful when I developed my next project, <Link to="/flixi-movie-database"><img src={link} alt="view live" /> Flixi Movie Database</Link>.</p>
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

export default ProjectEscape;
