import helper from '../../helper-functions';
import './header.css';

// import template from 'header-template';
const init = async (data, el) => {
	const head = document.querySelector(el);
	head.innerHTML = `
			<h2>The shape of COVID-19 deaths in Canada</h2>
		`;
}


export default { init };