import Copyright from './Copyright'
import arrow from '../assets/arrow.svg';
import port from '../assets/port.png';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <section className="about-card">
        <div className="card-heading">
          <h2>Portfolio ID</h2>
        </div>

        <div className="card-portrait">
          <img src={port} className="card-image" />

          <p className="card-blurb">Hello, I'm Nana! I'm a Vancouver-based developer and designer with a background in psychology.</p>

          <div className="view-next about-view footer-view">
            <Link to="/about">About Me <img src={arrow} alt="arrow pointing right" aria-label="view about page" className="view-next-arrow"/></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer