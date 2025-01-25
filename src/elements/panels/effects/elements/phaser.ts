/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type PhaserOptions } from 'tone';
import Nexus from 'nexusui2';

import { EffectController } from '../../../../audio/effect.controller.js';

import NumberDialComponent, {
  type CreateDialOptions,
} from '../../../../components/numberDialComponent.js';

import { assertNotNull } from '../../../../utils/utils.js';
import {
  createEffectElements,
  defaultToggleOptions,
  type BaseEffectUI,
  type EffectUI,
} from '../effects.utils.js';

type PhaserUIOptions = {
  [K in keyof Pick<
    PhaserOptions,
    'baseFrequency' | 'frequency' | 'octaves'
  >]: CreateDialOptions;
};

type PhaserUIKeys = {
  [K in keyof PhaserUIOptions]: string;
};

type PhaserUI = EffectUI<PhaserUIOptions>;

const id = 'phaser';

const ids = <PhaserUIKeys>{
  baseFrequency: `${id}-base-frequency`,
  frequency: `${id}-frequency`,
  octaves: `${id}-octaves`,
};

const labels = <PhaserUIKeys>{
  baseFrequency: 'Base Freq.',
  frequency: 'frequency',
  octaves: 'Octaves',
};

const options = <PhaserUIOptions>{
  baseFrequency: {
    min: 0,
    max: 2000,
    step: 1,
    value: 1000,
  },
  frequency: {
    min: 0,
    max: 70,
    step: 0.01,
    value: 15,
  },
  octaves: {
    min: 0,
    max: 20,
    step: 1,
    value: 5,
  },
};

const interfaces = <BaseEffectUI<PhaserUI>>{
  toggle: null,
  baseFrequency: null,
  frequency: null,
  octaves: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(id);

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.baseFrequency = NumberDialComponent(
    contentWrapper,
    ids.baseFrequency,
    labels.baseFrequency,
    options.baseFrequency
  );
  interfaces.frequency = NumberDialComponent(
    contentWrapper,
    ids.frequency,
    labels.frequency,
    options.frequency
  );
  interfaces.octaves = NumberDialComponent(
    contentWrapper,
    ids.octaves,
    labels.octaves,
    options.octaves
  );

  return wrapper;
}

async function create() {
  const { Phaser } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.baseFrequency);
  assertNotNull(interfaces.frequency);
  assertNotNull(interfaces.octaves);

  const effect = new EffectController(
    new Phaser({
      baseFrequency: interfaces.baseFrequency.value,
      frequency: interfaces.frequency.value,
      octaves: interfaces.octaves.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'Phaser'
  // get() === Object {
  // 	wet: 1,
  // 	baseFrequency: 1000,
  // 	frequency: 15,
  // 	octaves: 5,
  // 	stages: 10,
  // 	Q: 10,
  // }

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  Object.entries(<PhaserUI>interfaces).forEach(([key, item]) => {
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
