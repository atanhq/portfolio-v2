import { useEffect } from 'react';
import close from "../assets/close.svg";
import { HashLink } from "react-router-hash-link";

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
                    <li><a href="/">Home</a></li>
                    <li><HashLink smooth to="/#projects">Projects</HashLink></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://github.com/atanhq">Github</a></li>
                </ul>

                <div className="lets-chat">
                    {/* <img src="https://placehold.co/40x40/000000/ffffff" />
                    <p>Let's chat<em>!</em></p> */}
                    <p className="chat-bubble">Fancy a chat? :)</p>
                    <p className="copy-email">Copy Email</p>
                </div>
            </nav>
        </>
    )
}

export default ToggleMenu