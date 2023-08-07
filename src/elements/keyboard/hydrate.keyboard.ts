import { PianoOptions } from 'nexusui2/dist/types/interfaces/piano.js';
import Nexus, { NexusPiano } from 'nexusui2';

import { Midi } from 'tone';

import { Color } from '../../utils/enums.js';
import { getElementById } from '../../utils/dom.js';

import { constants, keyMapper } from './utils.keyboard.js';

import synth, { handleUserInput } from '../../audio/synth.js';

import { id } from './render.keyboard.js';

const options = {
	size: [1080, 90],
	mode: 'button', // 'button', 'toggle', or 'impulse'
	lowNote: 24,
	highNote: 108,
} as PianoOptions;

export default function hydrateKeyboard(fragment: DocumentFragment) {
	const element = getElementById(id, HTMLElement, fragment);

	const keyboard = new Nexus.Piano(element, options) as NexusPiano;

	keyboard.colorize('accent', Color.light_gray); // light mode

	// @todo darkMode
	// if (darkMode) {
	// 	Nexus.colors.accent = Color.gray; // dark mode
	// 	Nexus.colors.dark = Color.gray_dark; // darl mode
	// 	Nexus.colors.light = Color.black; // dark mode
	// }

	// @todo
	// @bug differentiate buttons
	// when user presses a mouse button
	// - while pressing another mouse buttton
	// - while keyboard keys are pressed
	// then triggerRelease is not called

	// Makes keyboard playble both with right and left click - prevents right click context menu
	element.addEventListener(
		'contextmenu',
		(event) => {
			event.preventDefault();
		},
		false
	);

	// ---------------------------------------------------------------------
	// Synthesizer On-Screen Keyboard Playbility Implementation
	// ---------------------------------------------------------------------
	// Polyphonic synths need a note or an array of notes
	let notes: string[] = [];

	keyboard.on('change', async (note) => {
		// await AudioContext !
		await handleUserInput();

		const noteString = Midi(note.note).toNote();
		// console.log(noteString);

		if (note.state) {
			synth.triggerAttack(noteString);
			notes.push(noteString);
		} else {
			synth.triggerRelease(note.note);
			notes = notes.filter((e) => e !== noteString);
		}
	});

	// ---------------------------------------------------------------------
	// Computer Keyboard Playbility Implementation
	// ---------------------------------------------------------------------

	// default C3
	// Range: C1 to C8
	let base = 24;

	// consider keyboard offset
	// console.log(Midi(base + options.lowNote).toNote());

	document.addEventListener('keydown', (event) => {
		// @todo
		// if (event.target === seqInput) {
		// 	return;
		// }

		// press key
		const keyIndex = keyMapper(event.code, base);

		if (keyIndex === null) return;

		const isPressed = keyboard.keys[keyIndex]._state.state;

		if (!isPressed) {
			keyboard.toggleIndex(keyIndex, true);
		}
	});

	document.addEventListener('keyup', (event) => {
		// one octave down
		if (event.code === 'KeyZ' && base >= constants.minBase) {
			base -= constants.octave;
			return;
		}

		// one octave up
		if (event.code === 'KeyX' && base < constants.maxBase) {
			base += constants.octave;
			return;
		}

		// release key
		const keyIndex = keyMapper(event.code, base);

		if (keyIndex === null) return;

		const isPressed = keyboard.keys[keyIndex]._state.state;

		if (isPressed) {
			keyboard.toggleIndex(keyIndex, false);
		}
	});
}
