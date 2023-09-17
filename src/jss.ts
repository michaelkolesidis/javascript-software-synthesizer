/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

// @todo
// => tsconfig.json paths & vite.config.ts import alias paths

// @todo
// import { WebMidi } from 'webmidi';

// immediately import only a minimum of styles to prevent flashing of content
import './style.scss';

// used in welcome message
import { homepage } from '../package.json';

import { getElementById } from './utils/dom.js';
import { hideSplashScreen, showSplashScreen } from './elements/splash/splashScreen.js';

// @todo => overlay.ts ??
import invertColors from './utils/invertColors.js';
import { collapseAllEffectsOnResize } from './elements/panels/effects/effects.utils.js';

// ---------------------------------------------------------------------
// Main iife
// ---------------------------------------------------------------------
const root = getElementById('root', HTMLDivElement);

showSplashScreen(root);

(async () => {
	// dynamically/lazy import main contents
	// render.js also imports main styles
	const render = await import('./elements/render.js').then((module) => module.default);
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
	};

	// document.addEventListener('mousedown', onUserInteraction);
	document.addEventListener('keydown', onUserInteraction);
	document.addEventListener('click', onUserInteraction);

	await hideSplashScreen();

	root.append(fragment);

	invertColors();
	collapseAllEffectsOnResize();
})();

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

// @todo
// ---------------------------------------------------------------------
// MIDI Display
// ---------------------------------------------------------------------
// const midiDisplay = document.getElementById('midi-display');

// ---------------------------------------------------------------------
// MIDI Implementation
// ---------------------------------------------------------------------
// Enable WebMidi.js and trigger the onEnabled() function when ready.

// WebMidi.enable()
// 	.then(onEnabled)
// 	.catch((err) => console.log(err));

// function onEnabled() {
// 	if (midiDisplay && WebMidi.inputs.length < 1) {
// 		midiDisplay.innerHTML += 'No device detected.';
// 	} else {
// 		if (midiDisplay) {
// 			midiDisplay.innerHTML += `Select MIDI controller:`;
// 		}
// 		WebMidi.inputs.forEach((device, index) => {
// 			if (midiDisplay) {
// 				midiDisplay.innerHTML += `<p id="${index}" class="midi-selector">${index} : ${device.name}</p>`;
// 			}
// 		});
// 	}

// 	let midiSelected = false;

// 	document.querySelectorAll('.midi-selector').forEach((item) => {
// 		item.addEventListener('click', (event) => {
// 			if (!midiSelected) {
// 				setTimeout(function () {
// 					item.style.color = Color.blue;
// 					midiDisplay.innerHTML += `<br>MIDI input selected`;
// 				}, 250);

// 				let mySynth = WebMidi.inputs[item.id];

// 				mySynth.channels[1].addListener('noteon', (e) => {
// 					synth.triggerAttack(midiToNoteString(e.data[1]));
// 					// notes.push(midiToNoteString(e.data[1]));
// 					midiDisplay.innerHTML = `<p style="font-size: 0.9rem; font-weight: 400;">MIDI note played: ${e.data[1]}<br>
//           Note name: ${midiToNoteString(e.data[1])}</p>`;
// 				});

// 				mySynth.channels[1].addListener('noteoff', (e) => {
// 					synth.triggerRelease(midiToNoteString(e.data[1]));
// 				});

// 				item.style.fontWeight = 500;
// 				midiSelected = true;
// 			}
// 		});
// 	});
// }
