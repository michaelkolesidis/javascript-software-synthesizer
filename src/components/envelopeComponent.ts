import { BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface.js';
import { MultiSliderOptions } from 'nexusui2/dist/types/interfaces/multislider';
import Nexus, { NexusMultislider, NexusSelect } from 'nexusui2';

import { PolySynth, FMSynth } from 'tone';

import { assertInstanceOf } from '../utils/dom.js';
import { scale } from '../utils/utils.js';

// const defaultEnvelopeOptions = {
// 	size: [220, 134],
// 	numberOfSliders: 4,
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	candycane: 3,
// 	values: [0.005, 0.005, 1, 0.1],
// 	smoothing: 0,
// 	mode: 'bar',
// } as Partial<MultiSliderOptions & BaseInterfaceOptions>;

const attackReleaseOptions = ['linear', 'exponential', 'sine', 'cosine', 'bounce', 'ripple', 'step'];
const decayOptions = ['linear', 'exponential'];

const adsrLabels = ['Attack', 'Decay', 'Sustain', 'Release'] as const;
const curveLabels = adsrLabels.map((label) => `${label} Curve`);

const selectors = {
	adsrSlider: 'nexus-adsr-slider',
	attackCurve: 'nexus-attack-curve',
	decayCurve: 'nexus-decay-curve',
	releaseCurve: 'nexus-release-curve',
};

export default function EnvelopeComponent(id: string) {
	return `
<div id="${id}" class="component envelope-component">
	<div class="envelope-slider-wrapper">
		<p>${adsrLabels.join(' &nbsp;&nbsp; ')}</p>
		<div class="${selectors.adsrSlider}"></div>
	</div>
	<div class="envelope-select-wrapper">
		<p>${curveLabels[0]}</p>
		<div class="${selectors.attackCurve}"></div>
		<p>${curveLabels[1]}</p>
		<div class="${selectors.decayCurve}"></div>
		<p>${curveLabels[2]}</p>
		<div class="${selectors.releaseCurve}"></div>
	</div>
</div>
	`;
}

export const hydrateEnvelopeComponent = (
	element: HTMLElement,
	options: EnvelopeComponentOptions,
	node: PolySynth<FMSynth>
) => {
	const [adsrSliderElement, attackSelectElement, decaySelectElement, releaseSelectElement] = Object.values(
		selectors
	).map((s) => element.getElementsByClassName(s)[0]);

	console.log('@todo', options);

	assertInstanceOf(adsrSliderElement, HTMLElement);
	assertInstanceOf(attackSelectElement, HTMLElement);
	assertInstanceOf(decaySelectElement, HTMLElement);
	assertInstanceOf(releaseSelectElement, HTMLElement);

	const interfaces = {
		adsrSlider: new Nexus.Multislider(adsrSliderElement, {
			size: [220, 134],
			numberOfSliders: 4,
			min: 0,
			max: 1,
			step: 0.01,
			candycane: 3,
			values: [0.005, 0.005, 1, 0.1],
			smoothing: 0,
			// @todo
			// mode: 'bar',
		}),
		attackSelect: new Nexus.Select(attackSelectElement, {
			size: [117, 27],
			options: attackReleaseOptions,
		}),
		decaySelect: new Nexus.Select(decaySelectElement, {
			size: [117, 27],
			options: decayOptions,
		}),
		releaseSelect: new Nexus.Select(releaseSelectElement, {
			size: [117, 27],
			options: attackReleaseOptions,
		}),
	};

	interfaces.adsrSlider.on('change', function (this: NexusMultislider, ...args: any[]) {
		// @todo
		// console.log((this, ...args));
		const [a, d, s, r] = args[0];

		node.set({
			[options.prop]: {
				attack: scale(a, 0, 1, 0, 2),
				decay: scale(d, 0, 1, 0, 2),
				sustain: s,
				release: scale(r, 0, 1, 0, 5),
			},
		});
	});

	interfaces.attackSelect.on('change', function (this: NexusSelect, ...args: any[]) {
		// @todo
		// console.log(this, ...args);
		const { value } = args[0];

		node.set({
			[options.prop]: {
				attackCurve: value,
			},
		});
	});

	interfaces.decaySelect.on('change', function (this: NexusSelect, ...args: any[]) {
		// @todo
		// console.log(this, ...args);
		const { value } = args[0];

		node.set({
			[options.prop]: {
				decayCurve: value,
			},
		});
	});

	interfaces.releaseSelect.on('change', function (this: NexusSelect, ...args: any[]) {
		// @todo
		// console.log(this, ...args);
		const { value } = args[0];

		node.set({
			[options.prop]: {
				releaseCurve: value,
			},
		});
	});
};

type EnvelopeComponentOptions = {
	prop: string;
} & Partial<MultiSliderOptions & BaseInterfaceOptions>;
