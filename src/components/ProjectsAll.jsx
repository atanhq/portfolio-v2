// import { Link } from "react-router-dom";
import arrow from '../assets/arrow.svg';

const ProjectsAll = () => {

	return (
		<>
			<section className="all-list">
				<h2 className="all-heading">Projects</h2>

					<a href="/escape-the-lair">
						<article className="all-item featured">
							<div className="number">01</div>
							<h3 className="all-title">Escape!</h3>
							<div className="stacks">
								<i className="devicon-javascript-plain" aria-label="javascript"></i>
								<i className="devicon-css3-plain" aria-label="css"></i>
							</div>
							<div className="arrow">
								<img src={arrow} alt="arrow pointing right" aria-label="view project escape the lair" />
							</div>
						</article>
					</a>

					<a href="/flixi-movie-database">
						<article className="all-item">
							<div className="number">02</div>
							<h3 className="all-title">Flixi Movie</h3>
							<div className="stacks">
								<i className="devicon-react-original" aria-label="react"></i>
								<i className="devicon-xd-plain" aria-label="adobe XD"></i>
							</div>
							<div className="arrow">
								<img src={arrow} alt="arrow pointing right" aria-label="view project flixi movie database" />
							</div>
						</article>
					</a>

					<a href="/portfolio">
						<article className="all-item">
							<div className="number">03</div>
							<h3 className="all-title">Portfolio</h3>
							<div className="stacks">
								<i className="devicon-react-original" aria-label="react"></i>
								<i className="devicon-bootstrap-plain" aria-label="bootstrap"></i>
								<i className="devicon-sass-original" aria-label="sass"></i>
							</div>
							<div className="arrow">
								<img src={arrow} alt="arrow pointing right" aria-label="view project portfolio" />
							</div>
						</article>
					</a>

					<a href="/tofino-time">
						<article className="all-item">
							<div className="number">04</div>
							<h3 className="all-title">Tofino Time</h3>
							<div className="stacks">
								<i className="devicon-woocommerce-plain" aria-label="woocommerce"></i>
								<i className="devicon-php-plain" aria-label="php"></i>
								<i className="devicon-figma-plain" aria-label="figma"></i>
							</div>
							<div className="arrow">
								<img src={arrow} alt="arrow pointing right" aria-label="view project tofino time" />
							</div>
						</article>
					</a>

			</section>
		</>
	)

}

export default ProjectsAll