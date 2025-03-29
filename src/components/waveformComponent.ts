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

import { type BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface';
import { type RadioButtonOptions } from 'nexusui2/dist/types/interfaces/radiobutton';
import { type MultiSliderOptions } from 'nexusui2/dist/types/interfaces/multislider';
import { type SliderOptions } from 'nexusui2/dist/types/interfaces/slider';
import Nexus from 'nexusui2';

import {
  assertInstanceOf,
  capitalizeSlug,
  capitalizeString,
} from '../utils/utils.js';

export const defaultTypes = [
  'sine',
  'square',
  'sawtooth',
  'triangle',
  'pulse',
] as const;

const defaultOptions = {
  types: defaultTypes,
  radiobutton: <CreateTypeRadioButtonOptions>{
    size: [378, 22],
    numberOfButtons: defaultTypes.length,
    active: 0,
  },
  slider: <CreatePartialCountSliderOptions>{
    size: [360, 31],
    mode: 'relative',
    min: 0,
    max: 10,
    step: 1,
    value: 0,
  },
  multislider: <CreatePartialsMultisliderOptions>{
    size: [360, 72],
    numberOfSliders: 0,
    min: 0,
    max: 1,
    step: 0.05,
    candycane: 3,
    values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    smoothing: 0,
  },
};

export type CreateTypeRadioButtonOptions = Partial<
  RadioButtonOptions & BaseInterfaceOptions
>;
export type CreatePartialCountSliderOptions = Partial<
  SliderOptions & BaseInterfaceOptions
>;
export type CreatePartialsMultisliderOptions = Partial<
  MultiSliderOptions & BaseInterfaceOptions
>;

export type CreateWaveformOptions = typeof defaultOptions;

const selectors = {
  type: 'type',
  labels: 'labels',
  partialCount: 'partial-count',
  partials: 'partials',
};

const createRadios = (
  component: HTMLElement,
  options?: CreateTypeRadioButtonOptions
) => {
  const element = component.getElementsByClassName(selectors.type)[0];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.RadioButton(element, options);
};

const createSlider = (
  component: HTMLElement,
  options?: CreatePartialCountSliderOptions
) => {
  const element = component.getElementsByClassName(selectors.partialCount)[0];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Slider(element, options);
};

const createMultislider = (
  component: HTMLElement,
  options?: CreatePartialsMultisliderOptions
) => {
  const element = component.getElementsByClassName(selectors.partials)[0];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Multislider(element, options);
};

export default function WaveformComponent(
  parent: HTMLElement | DocumentFragment,
  id: string,
  options: CreateWaveformOptions
) {
  options.types = Object.assign(defaultOptions.types, options.types);
  options.radiobutton = Object.assign(
    defaultOptions.radiobutton,
    options.radiobutton
  );
  options.slider = Object.assign(defaultOptions.slider, options.slider);
  options.multislider = Object.assign(
    defaultOptions.multislider,
    options.multislider
  );

  const component = document.createElement('div');
  component.id = id;
  component.classList.add('component', 'waveform-component');
  component.innerHTML = `
	<div>
		<p>${capitalizeString(selectors.type)}</p>
		<div id="${id}-type" class="${selectors.type}"></div>
		<div class="${selectors.labels}">
			${options.types.map((type) => `<div>${type}</div>`).join('\n')}
		</div>
	</div>
	<div class="partial-count-wrapper">
		<p>${capitalizeSlug(selectors.partialCount)}</p>
		<div class="${selectors.partialCount}"></div>
	</div>
	<div class="partials-wrapper">
		<p>${capitalizeString(selectors.partials)}</p>
		<div class="${selectors.partials}"></div>
	</div>`;

  const radios = createRadios(component, options.radiobutton);
  const slider = createSlider(component, options.slider);
  const multislider = createMultislider(component, options.multislider);

  parent.append(component);

  // nexus interfaces
  return {
    radios,
    slider,
    multislider,
  };

  /*
	return `
	<div id="${id}" class="component waveform-component">
		<div>
			<p>${capitalizeString(selectors.type)}</p>
			<div class="${selectors.type}"></div>
			<div class="${selectors.labels}">
				${types.map((type) => `<div>${type}</div>`).join('\n')}
			</div>
		</div>
		<div class="partial-count-wrapper">
			<p>${capitalizeSlug(selectors.partialCount)}</p>
			<div class="${selectors.partialCount}"></div>
		</div>
		<div class="partials-wrapper">
			<p>${capitalizeString(selectors.partials)}</p>
			<div class="${selectors.partials}"></div>
		</div>
	</div>`;
	*/
}

// @todo pass values array
export function handleWaveformSlider(component: HTMLElement, value: number) {
  const options = Object.assign(defaultOptions.multislider, <
    CreatePartialsMultisliderOptions
  >{
    numberOfSliders: value,
  });

  // @todo check element ??
  // multislider.destroy();

  return createMultislider(component, options);
}
