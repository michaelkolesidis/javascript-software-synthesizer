import { BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface';
import { RadioButtonOptions } from 'nexusui2/dist/types/interfaces/radiobutton';
import Nexus, { NexusMultislider } from 'nexusui2';

import { FMSynth, PolySynth } from 'tone';
import { assertInstanceOf } from '../utils/dom';
import { capitalizeSlug, capitalizeString } from '../utils/utils';

const defaultTypes = ['sine', 'square', 'sawtooth', 'triangle', 'pulse'] as const;

// const defaultTypeOptions = {
// 	size: [378, 22],
// 	numberOfButtons: 5,
// 	active: 0,
// } as Partial<RadioButtonOptions & BaseInterfaceOptions>;

// used for hydration
const selectors = {
	type: 'type',
	labels: 'labels',
	partialCount: 'partial-count',
	partials: 'partials',
};

export default function WaveformComponent(id: string, types = defaultTypes) {
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
}

export const hydrateWaveformComponent = (
	element: HTMLElement,
	options: WaveformComponentOptions,
	node: PolySynth<FMSynth>
) => {
	const [typeElement, selectionElement, countElement, partialsElement] = Object.values(selectors).map(
		(s) => element.getElementsByClassName(s)[0]
	);

	assertInstanceOf(typeElement, HTMLElement);
	assertInstanceOf(selectionElement, HTMLElement);
	assertInstanceOf(countElement, HTMLElement);
	assertInstanceOf(partialsElement, HTMLElement);

	const types = [...selectionElement.children].map((child) => child.textContent);

	let type = types[0];
	let partials = 0;

	let partialsInterface: NexusMultislider;

	// @todo deactivate if oscType === 'pulse'
	const createPartialsInterface = () =>
		new Nexus.Multislider(partialsElement, {
			size: [360, 72],
			numberOfSliders: partials,
			min: 0,
			max: 1,
			step: 0.05,
			candycane: 3,
			values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
			smoothing: 0,
			// @todo !!!
			// mode: 'bar',
			event: function (values: number[]) {
				node.set({
					[options.prop]: {
						partials: values,
					},
				});
			} as () => void, // @todo !!!!!
		});

	const getOscillatorType = () => {
		if (type === 'pulse') return type;

		if (partials >= 1) return `${type}${partials}`;

		return type;
	};

	const setOscillatorType = () => {
		if (type === 'pulse') {
			// @todo deacitvate partials
		} else {
			// @todo activate partials
		}

		node.set({
			[options.prop]: {
				type: getOscillatorType(),
			},
		});
	};

	Nexus.add('RadioButton', typeElement, {
		size: [378, 22],
		numberOfButtons: types.length,
		active: 0,
		event: function (value: number) {
			type = types[value];
			setOscillatorType();
		},
	});

	// const partialsCountInterface =
	Nexus.add('slider', countElement, {
		size: [360, 31],
		mode: 'relative',
		min: 0,
		max: 10,
		step: 1,
		value: 0,
		event: function (value: number) {
			partials = value;

			if (partialsInterface) {
				partialsInterface.destroy();
			}
			partialsInterface = createPartialsInterface();

			setOscillatorType();
		},
	});
};

type WaveformComponentOptions = {
	prop: string;
} & Partial<RadioButtonOptions & BaseInterfaceOptions>;
