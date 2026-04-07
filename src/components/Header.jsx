import { Link } from "react-router-dom";

const Header = () => {

    return (
      <>
        <header>
          <div className="logo">
            <Link to="/"><img src="https://placehold.co/50x50/000000/FFF" /></Link>
          </div>
        </header>
      </>
    )
}

export default Header