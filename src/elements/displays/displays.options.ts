/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
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
