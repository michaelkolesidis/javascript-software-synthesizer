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

import { NexusMeter, NexusOscilloscope, NexusSpectrogram } from 'nexusui2';
import { BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface.js';

export const ids = {
  oscilloscope: 'oscilloscope',
  spectrogram: 'spectrogram',
  meter: 'meter',
} as {
  readonly [K in DisplaysUIKeys]: string;
};

export type DisplaysIds = typeof ids;

export default (<const>{
  oscilloscope: {
    size: [300, 150],
  },
  spectrogram: {
    size: [300, 150],
  },
  meter: {
    size: [45, 150],
  },
}) as {
  readonly [K in DisplaysUIKeys]: Partial<BaseInterfaceOptions>;
};

export type DisplaysUI = {
  oscilloscope: NexusOscilloscope;
  spectrogram: NexusSpectrogram;
  meter: NexusMeter;
};

export type DisplaysUIKeys = keyof DisplaysUI;
