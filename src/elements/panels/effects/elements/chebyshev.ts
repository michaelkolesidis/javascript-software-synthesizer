/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
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
