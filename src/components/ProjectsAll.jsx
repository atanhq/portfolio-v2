import { Link } from "react-router-dom";
import arrow from '../assets/arrow.svg';

const ProjectsAll = () => {
    
    return (
        <>
					<section className="all-list">
						<h2 className="all-heading">Projects</h2>

						<Link to="/tofino-time">
							<article className="all-item">
								<div className="number">01</div>
								<h3 className="all-title">Tofino Time</h3>
								<div className="stacks">
									<i class="devicon-woocommerce-plain"></i>
									<i class="devicon-php-plain"></i>
									<i class="devicon-figma-plain"></i>
								</div>
								<div className="arrow">
									<img src={arrow} alt="view project" />
								</div>
							</article>
						</Link>

						<Link to="/flixi-movie-database">
							<article className="all-item">
								<div className="number">02</div>
								<h3 className="all-title">Flixi</h3>
								<div className="stacks">
									<i class="devicon-react-original"></i>
									<i class="devicon-xd-plain"></i>
								</div>
								<div className="arrow">
									<img src={arrow} alt="view project" />
								</div>
							</article>
						</Link>

						<Link to="/portfolio">
							<article className="all-item">
								<div className="number">03</div>
								<h3 className="all-title">Portfolio</h3>
								<div className="stacks">
									<i class="devicon-react-original"></i>
									<i class="devicon-bootstrap-plain"></i>
									<i class="devicon-sass-original"></i>
								</div>
								<div className="arrow">
									<img src={arrow} alt="view project" />
								</div>
							</article>
						</Link>

						<Link to="/escape-the-lair">
							<article className="all-item">
								<div className="number">04</div>
								<h3 className="all-title">Escape!</h3>
								<div className="stacks">
									<i class="devicon-javascript-plain"></i>
									<i class="devicon-css3-plain"></i>
								</div>
								<div className="arrow">
									<img src={arrow} alt="view project" />
								</div>
							</article>
						</Link>

				</section>
			</>
    )

}

export default ProjectsAll