/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type Destination } from 'tone/build/esm/core/context/Destination.js';
import { type PolySynth, type FMSynth } from 'tone';

import { assertNotNull } from '../utils/utils.js';

// Nexus Interfaces
import displaysUI from '../elements/displays/displays.ui.js';

// @todo
import { getInterface as getKeyboardUI, handlers as keyboardHandlers } from '../elements/keyboard/keyboard.js';

import createSynth from './synth.js';
import createSynthHandlers from './synth.handlers.js';

import createEffects from './effects.js';
import createSequencerHandlers from './sequencer.handlers.js';

let synth: PolySynth<FMSynth>;
let destination: Destination;

async function createContext() {
	const { start, getDestination, Midi } = await import('./tone.js');

	await start();
	// console.log('started tone context');

	destination = getDestination();

	assertNotNull(displaysUI.oscilloscope);
	assertNotNull(displaysUI.spectrogram);
	assertNotNull(displaysUI.meter);

	displaysUI.oscilloscope.connect(destination as unknown as AudioNode);
	displaysUI.spectrogram.connect(destination as unknown as AudioNode);
	displaysUI.meter.connect(destination as unknown as AudioNode, 1);

	// apply ui settings to audio node
	synth = await createSynth();
	synth.toDestination();

	// add ui handlers
	createSynthHandlers();
	createSequencerHandlers();

	createEffects();

	// ---------------------------------------------------------------------
	// Synthesizer On-Screen Keyboard Playbility Implementation
	// ---------------------------------------------------------------------
	// Polyphonic synths need a note or an array of notes

	const keyboard = getKeyboardUI();

	let notes: string[] = [];

	keyboard.on('change', async (note) => {
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

	// keydown and keyup event
	// => alternate octave / change keyboard interface state
	for (const [event, handler] of Object.entries(keyboardHandlers)) {
		document.addEventListener(event, handler);
	}
}

export default {
	create: createContext,
	get() {
		return {
			synth,
			destination,
		};
	},
	getSynth() {
		return synth;
	},
	getDestination() {
		return destination;
	},
};
