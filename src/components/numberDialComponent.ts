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

import { type DialOptions } from 'nexusui2/dist/types/interfaces/dial';
import { type NumberOptions } from 'nexusui2/dist/types/interfaces/number';
import { type BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface';
import Nexus from 'nexusui2';

import { assertInstanceOf } from '../utils/utils.js';

// @todo differentiate layout and audio context options
const defaultDialOptions = <CreateDialOptions>{
  size: [64, 64],
  interaction: 'vertical',
  mode: 'relative',
  min: -1,
  max: 1,
  step: 0.1,
  value: 0,
};

const defaultNumOptions = <CreateNumOptions>{
  size: [60, 30],
};

export type CreateDialOptions = Partial<DialOptions & BaseInterfaceOptions>;
export type CreateNumOptions = Partial<NumberOptions & BaseInterfaceOptions>;

const setLabel = (component: HTMLElement, text: string) => {
  // get HTMLParagraphElement
  component.children[0].children[0].textContent = text;
};

const createDial = (component: HTMLElement, options = defaultDialOptions) => {
  // get first HTMLDivElement
  const element = component.children[0].children[1];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Dial(element, options);
};

const createNumber = (component: HTMLElement, options = defaultNumOptions) => {
  // get second HTMLDivElement
  const element = component.children[0].children[2];
  assertInstanceOf(element, HTMLElement);
  return new Nexus.Number(element, options);
};

export default function NumberDialComponent(
  parent: HTMLElement,
  id: string,
  label: string,
  dialOptions?: CreateDialOptions,
  numOptions?: CreateNumOptions
) {
  const component = document.createElement('div');
  component.id = id;
  component.classList.add('component', 'number-dial-component');
  component.innerHTML = `
	<div class="number-dial">
		<p></p>
		<div class="nexus-dial"></div>
		<div class="nexus-num"></div>
	</div>`;

  setLabel(component, label);

  dialOptions = Object.assign(defaultDialOptions, dialOptions);
  numOptions = Object.assign(defaultNumOptions, numOptions);

  const dial = createDial(component, dialOptions);
  const num = createNumber(component, numOptions);

  num.link(dial);

  parent.append(component);

  // nexus interfaces
  return dial;

  //	return `
  //	<div id="${id}" class="component number-dial-component">
  //		<div class="number-dial">
  // 			<p>${label}</p>
  // 			<div class="${selectors.dial}"></div>
  // 			<div class="${selectors.num}"></div>
  // 		</div>
  //	</div>`;
}
