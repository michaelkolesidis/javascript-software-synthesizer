/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { NexusMeter, NexusOscilloscope, NexusSpectrogram } from 'nexusui2';

import { type DisplaysUIKeys, type DisplaysUI } from './displays.options';

class Interfaces {
	oscilloscope: null | NexusOscilloscope;
	spectrogram: null | NexusSpectrogram;
	meter: null | NexusMeter;

	constructor() {
		this.oscilloscope = null;
		this.spectrogram = null;
		this.meter = null;
	}

	set(key: DisplaysUIKeys, nexusInterface: unknown) {
		type K = typeof key;
		type T = DisplaysUI[K];
		this[key] = nexusInterface as T extends DisplaysUI ? T : never;
	}
}

export default new Interfaces();
