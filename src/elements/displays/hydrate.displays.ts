import { BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface';
import Nexus from 'nexusui2';

import { getDestination } from 'tone';

import { getElementsFromFragment } from '../../utils/dom.js';
import { Color } from '../../utils/enums.js';

import { ids, type DisplaysIds } from './render.displays.js';

const options = {
	midiDisplay: {
		// @todo
	},
	oscilloscope: {
		size: [300, 150],
	},
	spectrogram: {
		size: [300, 150],
	},
	meter: {
		size: [45, 150],
	},
} as {
	[K in keyof typeof ids]: Partial<BaseInterfaceOptions>;
};

export default function hydrateDisplays(fragment: DocumentFragment) {
	// @todo darkMode
	Nexus.colors.accent = Color.blue;
	Nexus.colors.fill = Color.light_gray;

	const elements = getElementsFromFragment<DisplaysIds>(ids, fragment);

	const interfaces = {
		oscilloscope: new Nexus.Oscilloscope(elements.oscilloscope, options.oscilloscope),
		spectrogram: new Nexus.Spectrogram(elements.spectrogram, options.spectrogram),
		meter: new Nexus.Meter(elements.meter, options.meter),
	};

	const destination = getDestination() as unknown as AudioNode;

	interfaces.oscilloscope.connect(destination);
	interfaces.spectrogram.connect(destination);
	interfaces.meter.connect(destination, 2);
};
