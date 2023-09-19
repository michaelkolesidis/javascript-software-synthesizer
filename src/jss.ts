/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

// @todo
// => tsconfig.json paths & vite.config.ts import alias paths

// immediately import only a minimum of styles to prevent flashing of content
import './style.scss';

// used in welcome message
import { homepage } from '../package.json';

import { getElementById } from './utils/utils.js';
import { hideSplashScreen, showSplashScreen } from './elements/splash/splashScreen.js';

// @todo import dynamically ??
// @todo => overlay.ts ??
import invertColors from './utils/invertColors.js';
import { collapseAllEffectsOnResize } from './elements/panels/effects/effects.utils.js';

// ---------------------------------------------------------------------
// Welcome Message in Console
// ---------------------------------------------------------------------
const consoleStyles = [
	'background: rgb(1, 0, 76)',
	'color: rgb(230, 230, 230)',
	'font-weight: 600; font-size: 13px',
].join(';');

console.log('%c * JSS-01 | JavaScript Software Synthesizer *', consoleStyles);
console.log(
	`Since you are here you might want to check our project at GitHub, have a look at the source code, find bugs, submit issues, create pull requests and become part of our community!
	${homepage}`
);


// ---------------------------------------------------------------------
// Main iife
// ---------------------------------------------------------------------
const root = getElementById('root', HTMLDivElement);

showSplashScreen(root);

(async () => {
	// dynamically/lazy import main contents
	// render.js also imports main styles
	const render = await import('./elements/render.js').then((module) => module.default);

	const enable = await import('./audio/webmidi.js').then((module) => module.default);
	const audio = await import('./audio/audio.js').then((module) => module.default);

	// create html
	// @todo => pass 'darkMode' as prop to render
	const fragment = render();

	// await user interaction
	// to prevent warnings in console
	// and fulfil autoplay policies
	// https://developer.chrome.com/blog/autoplay/

	// @todo clicking Nexus interfaces doesn't invoke mousedown event (!!!)
	// maybe bind `onUserInteraction` to every interface element (???)
	const onUserInteraction = () => {
		// connect rendered nexus interface events with synth node
		// calling audio.create() in the outer scope results in a lot of warnings in the console
		audio.create();

		// document.removeEventListener('mousedown', onUserInteraction);
		document.removeEventListener('keydown', onUserInteraction);
		document.removeEventListener('click', onUserInteraction);

		// @todo
		// requires a message like 'click or press the any key to start'
		// displayed on the splashscreen
	};

	// document.addEventListener('mousedown', onUserInteraction);
	document.addEventListener('keydown', onUserInteraction);
	document.addEventListener('click', onUserInteraction);

	await hideSplashScreen();

	root.append(fragment);

	// MIDI Implementation
	enable();

	// @todo import listeners
	// listen();
	invertColors();
	collapseAllEffectsOnResize();
})();