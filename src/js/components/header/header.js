import helper from '../../helper-functions';
import './header.css';

// import template from 'header-template';
const init = async (data, el) => {
	const head = document.querySelector(el);
	head.innerHTML = `
			<h1>Hed tk</h1>
		`;
}


export default { init };