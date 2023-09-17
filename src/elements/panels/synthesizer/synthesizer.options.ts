import { type CreateDialOptions } from '../../../components/numberDialComponent';
import { type CreateEnvelopeOptions } from '../../../components/envelopeComponent';
import { type CreateWaveformOptions, defaultTypes } from '../../../components/waveformComponent';

export const ids = {
	volume: 'volume',
	detune: 'detune',
	modulationIndex: 'modulation-index',
	harmonicity: 'harmonicity',
	envelope: 'envelope',
	oscillator: 'oscillator',
} as const;
// @todo
// as {
// 	readonly [K in SynthesizerUIKeys]: string;
// };

export default <const>{
	volume: <CreateDialOptions>{
		min: -60,
		max: 20,
		step: 0.1,
		value: -16,
	},
	detune: <CreateDialOptions>{
		min: -1000,
		max: 1000,
		step: 1,
		value: 0,
	},
	modulationIndex: <CreateDialOptions>{
		min: 0,
		max: 100,
		step: 1,
		value: 10,
	},
	harmonicity: <CreateDialOptions>{
		min: 0,
		max: 20,
		step: 0.1,
		value: 3,
	},
	envelope: <CreateEnvelopeOptions>{
		multislider: {
			values: [0.01, 0.01, 1, 0.5],
		},
	},
	oscillator: <CreateWaveformOptions>{
		types: defaultTypes,
		radiobutton: {
			active: 0,
		},
	},
};

export type SynthesizerIds = typeof ids;

// export type SynthesizerUIOptions = typeof options;
