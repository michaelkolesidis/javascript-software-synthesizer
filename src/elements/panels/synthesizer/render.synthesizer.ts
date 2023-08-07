/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import CollapsibleComponent from '../../../components/collapsibleComponent.js';
import NumberDialComponent from '../../../components/numberDialComponent.js';
import EnvelopeComponent from '../../../components/envelopeComponent.js';
import WaveformComponent from '../../../components/waveformComponent.js';

import { capitalizeSlug, capitalizeString } from '../../../utils/utils.js';

const id = 'synthesizer';

export const ids = {
	settings: `${id}-settings`,
	volume: 'volume',
	detune: 'detune',
	modIndex: 'modulation-index',
	harmonicity: 'harmonicity',
	amplitudeEnvelope: 'amplitude-envelope',
	oscillator: 'oscillator',
} as const;

export type SynthIDs = typeof ids;

const panelTitle = `
<div class="panel-title">
  <h2>${capitalizeString(id)}</h2>
</div>`;

const sectionSettings = `
<div id="${ids.settings}">
  ${NumberDialComponent(ids.volume, 'Volume')}
  ${NumberDialComponent(ids.detune, 'Detune')}
  ${NumberDialComponent(ids.modIndex, 'Mod Index')}
  ${NumberDialComponent(ids.harmonicity, 'Harmonicity')}
</div>`;

const sectionEnvelope = CollapsibleComponent(
	ids.amplitudeEnvelope,
	`<div class="section-title">
    <h3>${capitalizeSlug(ids.amplitudeEnvelope)}</h3>
  </div>`,
	EnvelopeComponent(ids.amplitudeEnvelope)
);

const sectionOscillator = CollapsibleComponent(
	ids.oscillator,
	`<div class="section-title">
    <h3>${capitalizeString(ids.oscillator)}</h3>
  </div>`,
	WaveformComponent(ids.oscillator)
);

const panelBody = sectionSettings + sectionEnvelope + sectionOscillator;

export default function Synthesizer() {
	return /*html*/ `
<div id="${id}" class="panel">
  ${CollapsibleComponent(id, panelTitle, panelBody)}
</div>`;
}
