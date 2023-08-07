import Header from './base/header/header.js';
import Main from './base/main/main.js';
import Footer from './base/footer/footer.js';
import Overlay from './base/overlay/overlay.js';

export default () => {
	// use DocumentFragment to improve performance
	const fragment = new DocumentFragment();
	const template = document.createElement('template');

	template.innerHTML = `
	<!-- Header -->
	${Header(false)}

	<!-- Main Content -->
	${Main()}

	<!-- Footer -->
	${Footer()}

	<!-- Inverted Colors -->
	${Overlay()}
`;

	fragment.append(template.content.cloneNode(true));

	return fragment;
};
