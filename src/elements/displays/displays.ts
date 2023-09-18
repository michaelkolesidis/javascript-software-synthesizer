/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import Nexus from 'nexusui2';

import { capitalizeString } from '../../utils/utils.js';

import options, { ids, type DisplaysUIKeys } from './displays.options.js';
import displaysUI from './displays.ui.js';

const createWrapper = (text: string, element: HTMLElement) => {
	const label = document.createElement('p');
	label.textContent = text;

	const wrapper = document.createElement('div');
	wrapper.append(label, element);

	return wrapper;

	// return `
	// 	<div>
	// 		<p>${label}</p>
	// 		<div>
	// 			${element}
	// 		</div>
	// 	</div>`
};

export default function createDisplays(section: HTMLElement) {
	// element which is used/transformed by nexusUI
	const elements = Object.keys(ids).reduce(
		(all, id) => Object.assign(all, { [id]: document.createElement('div') }),
		{} as {
			readonly [K in DisplaysUIKeys]: HTMLElement;
		}
	);

	displaysUI.set('oscilloscope', new Nexus.Oscilloscope(elements.oscilloscope, options.oscilloscope));
	displaysUI.set('spectrogram', new Nexus.Spectrogram(elements.spectrogram, options.oscilloscope));
	displaysUI.set('meter', new Nexus.Meter(elements.meter, options.meter));

	// wrapper element which contains the heading and the nexus element
	for (const [id, element] of Object.entries(elements)) {
		const text = capitalizeString(id);
		const wrapper = createWrapper(text, element);
		section.append(wrapper);
	}

	// @todo necessary ??
	return section;
}
