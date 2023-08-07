import Nexus, { NexusDial } from 'nexusui2';

import { hydrateNumberDialComponent } from '../../../components/numberDialComponent.js';
import { hydrateEnvelopeComponent } from '../../../components/envelopeComponent.js';
import { hydrateWaveformComponent } from '../../../components/waveformComponent.js';

import { getElementsFromFragment } from '../../../utils/dom.js';
import { Color } from '../../../utils/enums.js';

import synth from '../../../audio/synth.js';

import { ids as synthIDs, type SynthIDs } from './render.synthesizer.js';

export default function hydrateSynthesizer(fragment: DocumentFragment) {
	// @todo darkMode
	Nexus.colors.accent = Color.cyan;
	Nexus.colors.fill = Color.light_gray;

	const elements = getElementsFromFragment<SynthIDs>(synthIDs, fragment);
	// console.log({ ...elements });

	// ---------------------------------------------------------------------
	// Volume
	// ---------------------------------------------------------------------
	hydrateNumberDialComponent(elements.volume, {
		min: -60,
		max: 20,
		step: 0.1,
		value: -16,
		event: function (this: NexusDial, ...args: any[]) {
			// @todo
			// pass synth node and prop as arguments
			// console.log(this, ...args);
			synth.set({ volume: args[0] });
		},
	});

	// ---------------------------------------------------------------------
	// Detune
	// ---------------------------------------------------------------------
	// In cents - 100 cents = 8hz = 1 note - if detune 100, C4 becomes C4#, if detune 200 C4 becomes D4 and so on
	// detune range : -1000-1000 (choice)
	hydrateNumberDialComponent(elements.detune, {
		min: -1000,
		max: 1000,
		step: 1,
		value: 0,
		event: function (this: NexusDial, ...args: any[]) {
			synth.set({ detune: args[0] });
		},
	});

	// ---------------------------------------------------------------------
	// Modulation Index
	// ---------------------------------------------------------------------
	// The modulation index is essentially the amound of modulation occuring. It is the ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.
	// modulationIndex range: 0-300 (choice)
	hydrateNumberDialComponent(elements.modIndex, {
		min: 0,
		max: 100,
		step: 1,
		value: 10,
		event: function (this: NexusDial, ...args: any[]) {
			synth.set({ modulationIndex: args[0] });
		},
	});

	// ---------------------------------------------------------------------
	// Harmonicity
	// ---------------------------------------------------------------------
	// Harmonicity is the ratio between the two voices. A harmonicity of 1 is no change. Harmonicity = 2 means a change of an octave.
	// range: 0-20 (choice)
	hydrateNumberDialComponent(elements.harmonicity, {
		min: 0,
		max: 20,
		step: 0.1,
		value: 3,
		event: function (this: NexusDial, ...args: any[]) {
			synth.set({ harmonicity: args[0] });
		},
	});

	// ---------------------------------------------------------------------
	// ADSR Envelope
	// ---------------------------------------------------------------------
	// https://tonejs.github.io/docs/Envelope.html

	//          /\
	//         /  \
	//        /    \
	//       /      \
	//      /        \___________
	//     /                     \
	//    /                       \
	//   /                         \
	//  /                           \

	// Attack
	// Range: 0 to 2
	// attackCurve
	// defaults: 0.01 linear

	// Decay
	// Range: 0+ to 2
	// decayCurve
	// defaults: 0.01 linear

	// Sustain
	// Range: 0 to 1
	// The percent of the maximum value that the envelope rests at untilthe release is triggered. ()
	// default: 1

	// Release
	// Range: 0+ to  * seconds
	// releaseCurve
	// defaults: 0.5 linear
	// synth.options.envelope.release = 0.5;

	// @todo options argument
	hydrateEnvelopeComponent(elements.amplitudeEnvelope, { prop: 'envelope' }, synth);

	// ---------------------------------------------------------------------
	// Oscillator
	// ---------------------------------------------------------------------
	hydrateWaveformComponent(elements.oscillator, { prop: 'oscillator' }, synth);
}
