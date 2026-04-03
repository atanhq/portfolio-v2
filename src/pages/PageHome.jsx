import { useState, useEffect } from 'react';
import { appTitle } from '../globals/appTitle';
import ToggleMenu from '../components/ToggleMenu'

function PageHome(){

    // set state for nav toggle, passes to ToggleMenu.jsx
    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

	useEffect(() => {
		document.title = `${appTitle}`;
	}, []);

	return (
		<main>
			<ToggleMenu isOpen={isOpen} toggle={toggle} />

			<div className={`portfolio-wrapper ${isOpen ? "active" : "inactive"}`}>
				home page!!!!
			</div>
		</main>
	);

}

export default PageHome;
