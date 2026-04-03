import { useEffect } from 'react';
import { appTitle } from '../globals/appTitle';

function PageHome(){

	useEffect(() => {
		document.title = `${appTitle}`;
	}, []);

	return (
		<main>
			<p>hello world</p>
		</main>
	);

}

export default PageHome;
