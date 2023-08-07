import { DialOptions } from 'nexusui2/dist/types/interfaces/dial';
import { NumberOptions } from 'nexusui2/dist/types/interfaces/number';
import { BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface';

import Nexus from 'nexusui2';
import { assertInstanceOf } from '../utils/dom';

// @todo differentiate layout and audio context options
const defaultDialOptions = {
	size: [64, 64],
	interaction: 'vertical',
	mode: 'relative',
	min: -1,
	max: 1,
	step: 0.1,
	value: 0,
} as DialOptions & BaseInterfaceOptions;

const defaultNumOptions = {
	size: [60, 30],
} as NumberOptions & BaseInterfaceOptions;

const selectors = {
	dial: 'nexus-dial',
	num: 'nexus-num',
};

export default function NumberDialComponent(id: string, label: string) {
	return `
<div id="${id}" class="component number-dial-component">
	<div class="number-dial">
		<p>${label}</p>
		<div class="${selectors.dial}"></div>
		<div class="${selectors.num}"></div>
	</div>
</div>`;
}

export const hydrateNumberDialComponent = (
	element: HTMLElement,
	options: Partial<DialOptions & BaseInterfaceOptions>
) => {
	const [dialElement, numElement] = Object.values(selectors).map((s) => element.getElementsByClassName(s)[0]);

	assertInstanceOf(dialElement, HTMLDivElement);
	assertInstanceOf(numElement, HTMLDivElement);

	options = Object.assign(defaultDialOptions, options);

	const dial = new Nexus.Dial(dialElement, options);
	const num = new Nexus.Number(numElement, defaultNumOptions);

	num.link(dial);

	return dial;
};
