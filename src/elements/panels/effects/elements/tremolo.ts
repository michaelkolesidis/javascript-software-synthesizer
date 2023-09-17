/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type TremoloOptions } from 'tone';
import Nexus from 'nexusui2';

import { EffectController } from '../../../../audio/effect.controller.js';

import NumberDialComponent, { type CreateDialOptions } from '../../../../components/numberDialComponent.js';

import { assertNotNull } from '../../../../utils/utils.js';
import { createEffectElements, defaultToggleOptions, type BaseEffectUI, type EffectUI } from '../effects.utils.js';

type TermoloUIOptions = {
	[K in keyof Pick<TremoloOptions, 'frequency' | 'depth'>]: CreateDialOptions;
};

type TremoloUIKeys = {
	[K in keyof TermoloUIOptions]: string;
};

type TremoloUI = EffectUI<TermoloUIOptions>;

const id = 'tremolo';

const ids = <TremoloUIKeys>{
	frequency: `${id}-frequency`,
	depth: `${id}-depth`,
};

const labels = <TremoloUIKeys>{
	frequency: 'Frequency',
	depth: 'Depth',
};

const options = <TermoloUIOptions>{
	frequency: {
		min: 0,
		max: 50,
		step: 1,
		value: 9,
	},
	depth: {
		min: 0,
		max: 1,
		step: 0.01,
		value: 0.75,
	},
};

const interfaces = <BaseEffectUI<TremoloUI>>{
	toggle: null,
	frequency: null,
	depth: null,
};

function render() {
	const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(id);

	interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

	interfaces.frequency = NumberDialComponent(contentWrapper, ids.frequency, labels.frequency, options.frequency);
	interfaces.depth = NumberDialComponent(contentWrapper, ids.depth, labels.depth, options.depth);

	return wrapper;
}

async function create() {
	const { Tremolo } = await import('../../../../audio/tone.js');

	assertNotNull(interfaces.toggle);
	assertNotNull(interfaces.frequency);
	assertNotNull(interfaces.depth);

	const effect = new EffectController(
		new Tremolo({
			frequency: interfaces.frequency.value,
			depth: interfaces.depth.value,
		})
	);

	// @todo
	// console.log(effect.node.name, effect.node.get());
	// name === 'Tremolo'
	// get() === Object {
	// 	wet: 1,
	// 	frequency: 9,
	// 	type: "sine",
	// 	depth: 0.75,
	// 	spread: 180
	// }

	interfaces.toggle.on('change', (state) => {
		effect.active = state;
		effect.update();
	});

	Object.entries(<TremoloUI>interfaces).forEach(([key, item]) => {
		item.on('change', (value) => {
			effect.node.set({
				[key]: value,
			});
		});
	});
}

export default {
	render,
	create,
};
