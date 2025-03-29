/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import { type CreateDialOptions } from '../../../components/numberDialComponent';
import { type CreateEnvelopeOptions } from '../../../components/envelopeComponent';
import {
  type CreateWaveformOptions,
  defaultTypes,
} from '../../../components/waveformComponent';

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
