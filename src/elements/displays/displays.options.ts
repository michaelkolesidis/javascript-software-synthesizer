import { NexusMeter, NexusOscilloscope, NexusSpectrogram } from 'nexusui2';
import { BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface.js';

export const ids = {
	midiDisplay: 'midi-display',
	oscilloscope: 'oscilloscope',
	spectrogram: 'spectrogram',
	meter: 'meter',
} as {
	readonly [K in DisplaysUIKeys]: string;
};

export type DisplaysIds = typeof ids;

export default <const>{
	midiDisplay: {
		// @todo
	},
	oscilloscope: {
		size: [300, 150],
	},
	spectrogram: {
		size: [300, 150],
	},
	meter: {
		size: [45, 150],
	},
} as {
	readonly [K in DisplaysUIKeys]: Partial<BaseInterfaceOptions>;
};

export type DisplaysUI = {
	midiDisplay: null
	oscilloscope: NexusOscilloscope
	spectrogram: NexusSpectrogram
	meter: NexusMeter
}

export type DisplaysUIKeys = keyof DisplaysUI


