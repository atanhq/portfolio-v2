import { Link } from "react-router-dom";
import logo from '../../public/favicon-96x96.png';
import ToggleMenu from '../components/ToggleMenu'

const Header = ({ isOpen, toggle }) => {

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>

        <ToggleMenu isOpen={isOpen} toggle={toggle} />
      </header>
    </>
  )
}

export default Header