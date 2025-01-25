/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface.js';
import { type MultiSliderOptions } from 'nexusui2/dist/types/interfaces/multislider';
import { type SelectOptions } from 'nexusui2/dist/types/interfaces/select.js';
import Nexus from 'nexusui2';

// import { PolySynth, FMSynth } from 'tone';

import { assertInstanceOf } from '../utils/utils.js';
// import { scale } from '../utils/utils.js';

const defaultAttackReleaseCurveSelectOptions = <CreateEnvelopeSelectOptions>{
  size: [117, 27],
  options: [
    'linear',
    'exponential',
    'sine',
    'cosine',
    'bounce',
    'ripple',
    'step',
  ],
};

const defaultDecayCurveSelectOptions = <CreateEnvelopeSelectOptions>{
  size: [117, 27],
  options: ['linear', 'exponential'],
};

const defaultOptions = {
  multislider: <CreateEnvelopeSliderOptions>{
    size: [220, 134],
    numberOfSliders: 4,
    min: 0,
    max: 1,
    step: 0,
    smoothing: 0,
    candycane: 3,
    values: [0.005, 0.005, 1, 0.1],
  },
  selectAttack: <CreateEnvelopeSelectOptions>{
    ...defaultAttackReleaseCurveSelectOptions,
  },
  selectDecay: <CreateEnvelopeSelectOptions>{
    ...defaultDecayCurveSelectOptions,
  },
  selectRelease: <CreateEnvelopeSelectOptions>{
    ...defaultAttackReleaseCurveSelectOptions,
  },
};

export type CreateEnvelopeOptions = typeof defaultOptions;

type CreateEnvelopeSliderOptions = Partial<
  MultiSliderOptions & BaseInterfaceOptions
>;
type CreateEnvelopeSelectOptions = Partial<
  SelectOptions & BaseInterfaceOptions
>;

const adsrLabels = ['Attack', 'Decay', 'Sustain', 'Release'] as const;
const curveLabels = adsrLabels.map((label) => `${label} Curve`);

const template = document.createElement('template');
template.innerHTML = `
<div class="envelope-slider-wrapper">
	<p>${adsrLabels.join(' &nbsp;&nbsp; ')}</p>
	<div class="nexus-adsr-slider"></div>
</div>
<div class="envelope-curves-wrapper">
	<p>${curveLabels[0]}</p>
	<div class="nexus-attack-curve"></div>
	<p>${curveLabels[1]}</p>
	<div class="nexus-decay-curve"></div>
	<p>${curveLabels[3]}</p>
	<div class="nexus-release-curve"></div>
</div>`;

const createSlider = (
  component: HTMLElement,
  options: CreateEnvelopeSliderOptions
) => {
  const element = component.children[0].children[1];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Multislider(element, options);
};

// @todo refactor
const createAttackSelect = (
  component: HTMLElement,
  options: CreateEnvelopeSelectOptions
) => {
  const element = component.children[1].children[1];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Select(element, options);
};

const createDecaySelect = (
  component: HTMLElement,
  options: CreateEnvelopeSelectOptions
) => {
  const element = component.children[1].children[3];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Select(element, options);
};

const createReleaseSelect = (
  component: HTMLElement,
  options: CreateEnvelopeSelectOptions
) => {
  const element = component.children[1].children[5];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Select(element, options);
};

export default function EnvelopeComponent(
  parent: HTMLElement | DocumentFragment,
  id: string,
  options: CreateEnvelopeOptions
) {
  const component = document.createElement('div');
  component.id = id;
  component.classList.add('component', 'envelope-component');
  component.append(template.content.cloneNode(true));

  options.multislider = Object.assign(
    defaultOptions.multislider,
    options.multislider
  );
  options.selectAttack = Object.assign(
    defaultOptions?.selectAttack,
    options.selectAttack
  );
  options.selectDecay = Object.assign(
    defaultOptions.selectDecay,
    options.selectDecay
  );
  options.selectRelease = Object.assign(
    defaultOptions.selectRelease,
    options.selectRelease
  );

  const multislider = createSlider(component, options.multislider);
  const selectAttack = createAttackSelect(component, options.selectAttack);
  const selectDecay = createDecaySelect(component, options.selectDecay);
  const selectRelease = createReleaseSelect(component, options.selectRelease);

  parent.append(component);

  return {
    multislider,
    selectAttack,
    selectDecay,
    selectRelease,
  };

  //	return `
  //	<div id="${id}" class="component envelope-component">
  // 		<div class="envelope-slider-wrapper">
  // 			<p>${adsrLabels.join(' &nbsp;&nbsp; ')}</p>
  // 			<div class="nexus-adsr-slider"></div>
  // 		</div>
  // 		<div class="envelope-select-wrapper">
  // 			<p>${curveLabels[0]}</p>
  // 			<div class="nexus-attack-curve"></div>
  // 			<p>${curveLabels[1]}</p>
  // 			<div class="nexus-decay-curve"></div>
  // 			<p>${curveLabels[2]}</p>
  // 			<div class="nexus-release-curve"></div>
  // 		</div>
  //	</div>`;
}

export const hydrateEnvelopeComponent = () =>
  // element: HTMLElement,
  // options: EnvelopeComponentOptions,
  // node: PolySynth<FMSynth>
  {
    // const [adsrSliderElement, attackSelectElement, decaySelectElement, releaseSelectElement] = Object.values(
    // 	selectors
    // ).map((s) => element.getElementsByClassName(s)[0]);
    // console.log('@todo', options);
    // assertInstanceOf(adsrSliderElement, HTMLElement);
    // assertInstanceOf(attackSelectElement, HTMLElement);
    // assertInstanceOf(decaySelectElement, HTMLElement);
    // assertInstanceOf(releaseSelectElement, HTMLElement);
    // const interfaces = {
    // 	adsrSlider: new Nexus.Multislider(adsrSliderElement, {
    // 		size: [220, 134],
    // 		numberOfSliders: 4,
    // 		min: 0,
    // 		max: 1,
    // 		step: 0.01,
    // 		candycane: 3,
    // 		values: [0.005, 0.005, 1, 0.1],
    // 		smoothing: 0,
    // 		// @todo
    // 		// mode: 'bar',
    // 	}),
    // 	attackSelect: new Nexus.Select(attackSelectElement, {
    // 		size: [117, 27],
    // 		options: attackReleaseOptions,
    // 	}),
    // 	decaySelect: new Nexus.Select(decaySelectElement, {
    // 		size: [117, 27],
    // 		options: decayOptions,
    // 	}),
    // 	releaseSelect: new Nexus.Select(releaseSelectElement, {
    // 		size: [117, 27],
    // 		options: attackReleaseOptions,
    // 	}),
    // };
    // interfaces.adsrSlider.on('change', function (this: NexusMultislider, ...args: any[]) {
    // 	// @todo
    // 	// console.log((this, ...args));
    // 	const [a, d, s, r] = args[0];
    // 	node.set({
    // 		[options.prop]: {
    // 			attack: scale(a, 0, 1, 0, 2),
    // 			decay: scale(d, 0, 1, 0, 2),
    // 			sustain: s,
    // 			release: scale(r, 0, 1, 0, 5),
    // 		},
    // 	});
    // });
    // interfaces.attackSelect.on('change', function (this: NexusSelect, ...args: any[]) {
    // 	// @todo
    // 	// console.log(this, ...args);
    // 	const { value } = args[0];
    // 	node.set({
    // 		[options.prop]: {
    // 			attackCurve: value,
    // 		},
    // 	});
    // });
    // interfaces.decaySelect.on('change', function (this: NexusSelect, ...args: any[]) {
    // 	// @todo
    // 	// console.log(this, ...args);
    // 	const { value } = args[0];
    // 	node.set({
    // 		[options.prop]: {
    // 			decayCurve: value,
    // 		},
    // 	});
    // });
    // interfaces.releaseSelect.on('change', function (this: NexusSelect, ...args: any[]) {
    // 	// @todo
    // 	// console.log(this, ...args);
    // 	const { value } = args[0];
    // 	node.set({
    // 		[options.prop]: {
    // 			releaseCurve: value,
    // 		},
    // 	});
    // });
  };
