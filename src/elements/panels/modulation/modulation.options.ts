/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type CreateEnvelopeOptions } from '../../../components/envelopeComponent';
import { type CreateWaveformOptions, defaultTypes } from '../../../components/waveformComponent';

export const ids = {
	modulator: 'modulator',
	modulationEnvelope: 'modulation-envelope',
} as const;

export default <const>{
	modulator: <CreateWaveformOptions>{
		types: defaultTypes,
		radiobutton: {
			active: 1,
		},
	},
	modulationEnvelope: <CreateEnvelopeOptions>{
		multislider: {
			values: [0.25, 0.05, 1, 0.5],
		},
	},
};

export type ModulationIds = typeof ids;
