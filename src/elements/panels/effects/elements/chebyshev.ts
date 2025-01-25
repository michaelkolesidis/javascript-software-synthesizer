/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type ChebyshevOptions } from 'tone';
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

type ChebyshevUIOptions = {
  [K in keyof Pick<ChebyshevOptions, 'order'>]: CreateDialOptions;
};

type ChebyshevUIKeys = {
  [K in keyof ChebyshevUIOptions]: string;
};

type ChebyshevUI = EffectUI<ChebyshevUIOptions>;

const id = 'chebyshev';

const ids = <ChebyshevUIKeys>{
  order: `${id}-order`,
};

const labels = <ChebyshevUIKeys>{
  order: 'Order',
};

const options = <ChebyshevUIOptions>{
  order: {
    min: 1,
    max: 100,
    step: 1,
    value: 51,
  },
};

const interfaces = <BaseEffectUI<ChebyshevUI>>{
  toggle: null,
  order: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(id);

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.order = NumberDialComponent(
    contentWrapper,
    ids.order,
    labels.order,
    options.order
  );

  return wrapper;
}

async function create() {
  const { Chebyshev } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.order);

  const effect = new EffectController(
    new Chebyshev({
      order: interfaces.order.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'Chebyshev'
  // get() === Object {
  // 	wet: 1,
  // 	order: 51,
  // 	oversample: 'none'
  // };

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  interfaces.order.on('change', (value) => {
    effect.node.set(<ChebyshevOptions>{
      order: value,
    });
  });
}

export default {
  render,
  create,
};
