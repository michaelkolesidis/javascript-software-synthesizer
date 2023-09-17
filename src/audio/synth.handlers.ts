import Nexus from 'nexusui2';

import { type OmniOscillatorSynthOptions } from 'tone/build/esm/source/oscillator/OscillatorInterface.js';
import { type RecursivePartial } from 'tone/build/esm/core/util/Interface.js';
import { type EnvelopeCurve } from 'tone';

import { assertNotNull } from '../utils/utils.js';
import { getElementById } from '../utils/dom.js';
import { Color } from '../utils/enums.js';

import { handleWaveformSlider } from '../components/waveformComponent.js';

import synthesizerUI from '../elements/panels/synthesizer/synthesizer.ui.js';
import { ids as synhtesizerIds } from '../elements/panels/synthesizer/synthesizer.options.js';

import modulationUI from '../elements/panels/modulation/modulation.ui.js';
import { ids as modulationIds } from '../elements/panels/modulation/modulation.options.js';

import audio from './audio.js';

export default function createSynthHandlers() {
	const synth = audio.getSynth();

	// @todo refactor
	assertNotNull(synthesizerUI.volume);
	assertNotNull(synthesizerUI.detune);
	assertNotNull(synthesizerUI.modulationIndex);
	assertNotNull(synthesizerUI.harmonicity);

	assertNotNull(synthesizerUI.type);
	assertNotNull(synthesizerUI.partialCount);
	assertNotNull(synthesizerUI.partials);

	assertNotNull(synthesizerUI.envelope);
	assertNotNull(synthesizerUI.attackCurve);
	assertNotNull(synthesizerUI.decayCurve);
	assertNotNull(synthesizerUI.releaseCurve);

	// ---------------------------------------------------------------------
	// Synthesizer settings
	// ---------------------------------------------------------------------
	synthesizerUI.volume.on('change', (value) => {
		synth.set({
			volume: value,
		});
		// console.log('set volume', synth.get());
	});

	// In cents - 100 cents = 8hz = 1 note - if detune 100, C4 becomes C4#, if detune 200 C4 becomes D4 and so on
	// detune range : -1000-1000 (choice)
	synthesizerUI.detune.on('change', (value) => {
		synth.set({
			detune: value,
		});
	});

	// The modulation index is essentially the amound of modulation occuring. It is the ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.
	// modulationIndex range: 0-300 (choice)
	synthesizerUI.modulationIndex.on('change', (value) => {
		synth.set({
			modulationIndex: value,
		});
	});

	// Harmonicity is the ratio between the two voices. A harmonicity of 1 is no change. Harmonicity = 2 means a change of an octave.
	// range: 0-20 (choice)
	synthesizerUI.harmonicity.on('change', (value) => {
		synth.set({
			harmonicity: value,
		});
	});

	// ---------------------------------------------------------------------
	// ADSR Amplitude Envelope
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

	// @todo types
	// @todo prefer a single Nexus.Slider for each value (maybe??)
	synthesizerUI.envelope.on('change', (...args: any) => {
		const [attack, decay, sustain, release] = args[0];
		synth.set({
			envelope: {
				attack,
				decay,
				sustain,
				release,
			},
		});
	});

	synthesizerUI.attackCurve.on('change', (curve) => {
		synth.set({
			envelope: {
				attackCurve: curve.value as EnvelopeCurve,
			},
		});
	});

	synthesizerUI.decayCurve.on('change', (curve) => {
		synth.set({
			envelope: {
				// @ts-ignore @todo => BasicEnvelopeCurve
				decayCurve: curve.value,
			},
		});
	});

	synthesizerUI.releaseCurve.on('change', (curve) => {
		synth.set({
			envelope: {
				releaseCurve: curve.value as EnvelopeCurve,
			},
		});
	});

	// ---------------------------------------------------------------------
	// Oscillator
	// ---------------------------------------------------------------------
	synthesizerUI.type.on('change', () => {
		assertNotNull(synthesizerUI.partials);

		const type = synthesizerUI.getType();
		synth.set({
			oscillator: <RecursivePartial<OmniOscillatorSynthOptions>>{
				type,
			},
		});
	});

	synthesizerUI.partialCount.on('change', (value) => {
		assertNotNull(synthesizerUI.type);
		assertNotNull(synthesizerUI.partials);

		synthesizerUI.partials.destroy();
		synthesizerUI.partials = null;

		Nexus.colors.accent = Color.cyan;

		const component = getElementById(synhtesizerIds.oscillator, HTMLElement);
		synthesizerUI.partials = handleWaveformSlider(component, value);

		const type = synthesizerUI.getType();
		const partials = synthesizerUI.partials.values;

		synth.set({
			oscillator: <RecursivePartial<OmniOscillatorSynthOptions>>{
				type,
				partials,
			},
		});
	});

	synthesizerUI.partials.on('change', (...args: any) => {
		const values = args[0];
		synth.set({
			oscillator: {
				partials: values,
			},
		});
	});

	// @todo refactor
	assertNotNull(modulationUI.type);
	assertNotNull(modulationUI.partialCount);
	assertNotNull(modulationUI.partials);

	assertNotNull(modulationUI.modulationEnvelope);
	assertNotNull(modulationUI.attackCurve);
	assertNotNull(modulationUI.decayCurve);
	assertNotNull(modulationUI.releaseCurve);

	// ---------------------------------------------------------------------
	// Modulator
	// ---------------------------------------------------------------------
	modulationUI.type.on('change', () => {
		// @todo fix deselect
		const type = modulationUI.getType();
		synth.set({
			modulation: <RecursivePartial<OmniOscillatorSynthOptions>>{
				type,
			},
		});
	});

	modulationUI.partialCount.on('change', (value) => {
		assertNotNull(modulationUI.type);
		assertNotNull(modulationUI.partials);

		modulationUI.partials.destroy();
		// modulationUI.partials = null;

		Nexus.colors.accent = Color.green;

		const component = getElementById(modulationIds.modulator, HTMLElement);
		modulationUI.set('partials', handleWaveformSlider(component, value));
		// modulationUI.partials = handleWaveformSlider(component, value);

		const type = modulationUI.getType();
		const partials = modulationUI.partials.values;

		synth.set({
			modulation: {
				// @ts-ignore @todo
				type,
				partials,
			},
			// modulation: <RecursivePartial<OmniOscillatorSynthOptions>>{
			// 	type,
			// 	partials,
			// },
		});
	});

	modulationUI.partials.on('change', (...args: any) => {
		const values = args[0];
		synth.set({
			modulation: {
				partials: values,
			},
		});
	});

	// ---------------------------------------------------------------------
	// Modulation Envelope
	// ---------------------------------------------------------------------
	modulationUI.modulationEnvelope.on('change', (...args: any) => {
		const [attack, decay, sustain, release] = args[0];
		synth.set({
			modulationEnvelope: {
				attack,
				decay,
				sustain,
				release,
			},
		});
		// console.log(synth.get());
	});

	modulationUI.attackCurve.on('change', (curve) => {
		synth.set({
			modulationEnvelope: {
				attackCurve: curve.value as EnvelopeCurve,
			},
		});
	});

	modulationUI.decayCurve.on('change', (curve) => {
		synth.set({
			modulationEnvelope: {
				// @ts-ignore @todo => BasicEnvelopeCurve
				decayCurve: curve.value,
			},
		});
	});

	modulationUI.releaseCurve.on('change', (curve) => {
		synth.set({
			modulationEnvelope: {
				releaseCurve: curve.value as EnvelopeCurve,
			},
		});
	});

	// ---------------------------------------------------------------------
	// Effects
	// ---------------------------------------------------------------------
}
