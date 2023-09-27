/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type DistortionOptions } from 'tone';
import Nexus from 'nexusui2';

import { EffectController } from '../../../../audio/effect.controller.js';

import NumberDialComponent, { type CreateDialOptions } from '../../../../components/numberDialComponent.js';

import { assertNotNull } from '../../../../utils/utils.js';
import { createEffectElements, defaultToggleOptions, type BaseEffectUI, type EffectUI } from '../effects.utils.js';

type DistortionUIOptions = {
	[K in keyof Pick<DistortionOptions, 'distortion'>]: CreateDialOptions;
};

type DistortionUIKeys = {
	[K in keyof DistortionUIOptions]: string;
};

type DistortionUI = EffectUI<DistortionUIOptions>;

const id = 'distortion';

const ids = <DistortionUIKeys>{
	distortion: `${id}-distortion`,
};

const labels = <DistortionUIKeys>{
	distortion: 'Amount',
};

const options = <DistortionUIOptions>{
	distortion: {
		min: 0,
		max: 1,
		step: 0.01,
		value: 0.9,
	},
};

const interfaces = <BaseEffectUI<DistortionUI>>{
	toggle: null,
	distortion: null,
};

function render() {
	const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(id);

	interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

	interfaces.distortion = NumberDialComponent(contentWrapper, ids.distortion, labels.distortion, options.distortion);

	return wrapper;
}

async function create() {
	const { Distortion } = await import('../../../../audio/tone.js');

	assertNotNull(interfaces.toggle);
	assertNotNull(interfaces.distortion);

	const effect = new EffectController(
		new Distortion({
			distortion: interfaces.distortion.value,
		})
	);

	// @todo
	// console.log(effect.node.name, effect.node.get());
	// name === 'FeedbackDelay'
	// get() === Object {
	// 	wet: 1,
	// 	feedback: 0.5,
	// 	delayTime: 0.25,
	// 	maxDelay: 1,
	// };

	interfaces.toggle.on('change', (state) => {
		effect.active = state;
		effect.update();
	});

	interfaces.distortion.on('change', (value) => {
		effect.node.set(<DistortionOptions>{
			distortion: value,
		});
	});
}

export default {
	render,
	create,
};
