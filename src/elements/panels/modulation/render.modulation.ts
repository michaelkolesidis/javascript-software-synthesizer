/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import CollapsibleComponent from '../../../components/collapsibleComponent';
import WaveformComponent from '../../../components/waveformComponent';
import EnvelopeComponent from '../../../components/envelopeComponent';

import { capitalizeSlug, capitalizeString } from '../../../utils/utils';

const ID = 'modulation';

export const IDs = {
	modulationWaveform: 'modulation-waveform',
	modulationEvenlope: 'modulation-envelope',
} as const;

export type ModulationIDs = typeof IDs;

const panelTitle = `
<div class="panel-title">
  <h2>${capitalizeString(ID)}</h2>
</div>`;

const sectionWaveform = WaveformComponent(IDs.modulationWaveform);

const sectionEnvelope = CollapsibleComponent(
	IDs.modulationEvenlope,
	`<div class="section-title">
    <h3>${capitalizeSlug(IDs.modulationEvenlope)}</h3>
  </div>`,
	EnvelopeComponent(IDs.modulationEvenlope)
);

const panelBody = sectionWaveform + sectionEnvelope;

export default function Modulation() {
	return /*html*/ `
<div id="${ID}" class="panel">
  ${CollapsibleComponent(ID, panelTitle, panelBody)}
</div>`;
}
