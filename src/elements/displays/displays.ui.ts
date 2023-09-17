import { NexusMeter, NexusOscilloscope, NexusSpectrogram } from 'nexusui2';

import { type DisplaysUIKeys, type DisplaysUI } from './displays.options';

class Interfaces {
	midiDisplay: null;
	oscilloscope: null | NexusOscilloscope;
	spectrogram: null | NexusSpectrogram;
	meter: null | NexusMeter;

	constructor() {
		this.midiDisplay = null;
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
