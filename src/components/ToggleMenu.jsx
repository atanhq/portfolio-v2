import { useEffect } from 'react';
import close from "../assets/close.svg";

const ToggleMenu = ({ isOpen, toggle }) => {

    useEffect(() => {
        document.body.classList.toggle('menu-open', isOpen);
    }, [isOpen]);

    return (
        <>
        <div className="menu">
            <button
                className="menu-title" 
                onClick={toggle}>
            {!isOpen ? "Menu" : <img src={close} alt="close menu" className="close-svg" />}
            </button>
        </div>

            <nav className={`menu-container ${isOpen ? "active" : "inactive"}`}>
                <div className="space"></div>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Github</li>
                </ul>

                <div className="lets-chat">
                    <img src="https://placehold.co/40x40/000000/ffffff" />
                    <p>Let's chat<em>!</em></p>
                    <p className="copy-email">Copy Email</p>
                </div>
            </nav>
        </>
    )
}

export default ToggleMenu