/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { capitalizeString } from '../../utils/utils.js';

const id = 'displays';

export const ids = {
	midiDisplay: 'midi-display',
	oscilloscope: 'oscilloscope',
	spectrogram: 'spectrogram',
	meter: 'meter',
} as const;

// used for hydration
export type DisplaysIds = typeof ids;

export default function Displays() {
	return /*html*/ `
<section id="${id}">
  <div>
    <p>MIDI</p>
    <div id="${ids.midiDisplay}"></div>
  </div>
  <div >
    <p>${capitalizeString(ids.oscilloscope)}</p>
    <div id="${ids.oscilloscope}"></div>
  </div>
  <div >
    <p>${capitalizeString(ids.spectrogram)}</p>
    <div id="${ids.spectrogram}"></div>
  </div>
  <div >
    <p>${capitalizeString(ids.meter)}</p>
    <div id="${ids.meter}"></div>
  </div>
</section>`;
}
