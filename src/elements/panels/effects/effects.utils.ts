/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type BaseInterfaceOptions } from 'nexusui2/dist/types/core/interface';
import { type ToggleOptions } from 'nexusui2/dist/types/interfaces/toggle';
import { type NexusDial, type NexusToggle } from 'nexusui2';

import CollapsibleComponent from '../../../components/collapsibleComponent.js';

import { assertNotNull, capitalizeString, throttle } from '../../../utils/utils.js';
import { createPanelSubtitle } from '../panels.js';

export const createEffectElements = (id: string, label = capitalizeString(id)) => {
	const wrapper = document.createElement('div');
	wrapper.classList.add('effect-wrapper');

	const subtitle = createPanelSubtitle(label);

	const toggleWrapper = document.createElement('div');
	toggleWrapper.classList.add('effect-toggle');

	const contentWrapper = document.createElement('div');
	contentWrapper.classList.add('effect-content');

	const component = CollapsibleComponent(id, subtitle, toggleWrapper, contentWrapper);
	wrapper.append(component.fragment);

	return [wrapper, toggleWrapper, contentWrapper];
};

export const defaultToggleOptions = <Partial<ToggleOptions & BaseInterfaceOptions>>{
	size: [36, 18],
	state: false,
};

type DefaultEffectUI = {
	toggle: NexusToggle;
};

export type BaseEffectUI<UI> = {
	[K in keyof UI]: null | UI[K];
};

export type EffectUI<Options> = DefaultEffectUI & {
	[K in keyof Omit<Options, 'context'>]: NexusDial;
};

export function collapseAllEffectsOnResize() {
	const effects = document.getElementById('effects');
	assertNotNull(effects);

	const content = effects.querySelector('.collapsible-content');
	assertNotNull(content);

	const inputs = [...content.querySelectorAll('input[hidden]')];

	const onWindowResize = () => {
		const w = window.innerWidth;

		if (w >= 1120 && w < 1440) {
			inputs.slice(1).forEach((element) => {
				if (!element.hasAttribute('checked')) element.setAttribute('checked', 'checked');
			});
		} else {
			inputs.forEach((element) => {
				if (element.hasAttribute('checked')) element.removeAttribute('checked');
			});
		}
	};

	onWindowResize();

	window.addEventListener('resize', throttle(onWindowResize.bind(Document), 100));
}
