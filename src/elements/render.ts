import './style.main.scss';

// @todo import nexus dynamically in render() to minimize chunk size
import Nexus from 'nexusui2';

import { getElementById } from '../utils/dom.js';
import { Color } from '../utils/enums.js';

import Header from './base/header/header.js';
import Footer from './base/footer/footer.js';
import Overlay from './base/overlay/overlay.js';

import createMidiDisplay from './midi/midi.js';
import createDisplays from './displays/displays.js';
import createPanels from './panels/panels.js';
import createKeyboard from './keyboard/keyboard.js';
import createExtras from './extras/extras.js';

const sectionIds = {
	displays: 'displays',
	panels: 'panels',
	extras: 'extras',
	keyboard: 'keyboard',
} as const;

const template = document.createElement('template');
template.innerHTML = `
<!-- Header -->
${Header(false)}

<!-- Main Content -->
<main>
	<section id="${sectionIds.displays}"></section>
	<section id="${sectionIds.panels}"></section>
	<section id="${sectionIds.extras}"></section>
	<section id="${sectionIds.keyboard}"></section>
</main>

<!-- Footer -->
${Footer()}

<!-- Inverted Colors -->
${Overlay()}`;

export default function render() {
	// use DocumentFragment to improve performance
	const fragment = new DocumentFragment();
	fragment.append(template.content.cloneNode(true));

	// rendered elements are required to create Nexus interfaces
	const sections = Object.values(sectionIds).reduce(
		(all, id) => Object.assign(all, { [id]: getElementById(id, HTMLElement, fragment) }),
		{} as {
			[K in keyof typeof sectionIds]: HTMLElement;
		}
	);

	// @todo darkMode
	// set style for all NexusUI2 components
	Nexus.colors.fill = Color.gray;

	Nexus.colors.accent = Color.blue;
	createMidiDisplay(sections.displays);
	createDisplays(sections.displays);

	// Nexus Color is set in each panel
	createPanels(sections.panels);

	createExtras(sections.extras);

	// if (darkMode) {
	// 	Nexus.colors.accent = Color.gray;
	// 	Nexus.colors.dark = Color.gray_dark;
	// 	Nexus.colors.light = Color.black;
	// }

	Nexus.colors.accent = Color.gray;
	createKeyboard(sections.keyboard);

	return fragment;
}
