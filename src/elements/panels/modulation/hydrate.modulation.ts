import Nexus from 'nexusui2';

import { hydrateWaveformComponent } from '../../../components/waveformComponent.js';
import { hydrateEnvelopeComponent } from '../../../components/envelopeComponent.js';

import { getElementsFromFragment } from '../../../utils/dom.js';
import { Color } from '../../../utils/enums.js';

import synth from '../../../audio/synth.js';

import { IDs as modulationIDs, type ModulationIDs } from './render.modulation.js';

export default function hydrateModulation(fragment: DocumentFragment) {
	// @todo darkMode
	Nexus.colors.accent = Color.green;
	Nexus.colors.fill = Color.light_gray;

	const elements = getElementsFromFragment<ModulationIDs>(modulationIDs, fragment);

	console.log(elements);

	// ---------------------------------------------------------------------
	// Modulation
	// ---------------------------------------------------------------------
	hydrateWaveformComponent(elements.modulationWaveform, { prop: 'modulation' }, synth);

	// ---------------------------------------------------------------------
	// Modulation Envelope
	// ---------------------------------------------------------------------
	// attack
	// attackCurve
	// decay
	// decayCurve
	// sustain
	// release
	// releaseCurve
	hydrateEnvelopeComponent(elements.modulationEvenlope, { prop: 'modulationEnvelope' }, synth);
}
