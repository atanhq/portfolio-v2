import { Link } from "react-router-dom";
import logo from '../../public/favicon-96x96.png';

const Header = () => {

    return (
      <>
        <header>
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
        </header>
      </>
    )
}

export default Header