/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { RecursivePartial } from 'tone/build/esm/core/util/Interface.js';
import { EffectOptions } from 'tone/build/esm/effect/Effect.js';

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

// @todo
type ReverbUIOptions = {
  decay: CreateDialOptions;
};

type ReverbUIKeys = {
  [K in keyof ReverbUIOptions]: string;
};

type ReverbUI = EffectUI<ReverbUIOptions>;

const id = 'reverb';

const ids = <ReverbUIKeys>{
  decay: `${id}-decay`,
};

const labels = <ReverbUIKeys>{
  decay: 'Decay',
};

const options = <ReverbUIOptions>{
  decay: {
    min: 0,
    max: 30,
    step: 0.01,
    value: 1,
  },
};

const interfaces = <BaseEffectUI<ReverbUI>>{
  toggle: null,
  decay: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(id);

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);
  interfaces.decay = NumberDialComponent(
    contentWrapper,
    ids.decay,
    labels.decay,
    options.decay
  );

  return wrapper;
}

async function create() {
  const { Reverb } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.decay);

  const effect = new EffectController(
    new Reverb({
      decay: interfaces.decay.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'Reverb'
  // get() === Object {
  // 	wet: 1,
  // 	decay: 1,
  // 	preDelay: 0.01
  // }

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  interfaces.decay.on('change', (value) => {
    effect.node.set(<RecursivePartial<EffectOptions>>{
      decay: value,
    });
  });
}

export default {
  render,
  create,
};
