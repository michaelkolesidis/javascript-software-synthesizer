/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type BitCrusherOptions } from 'tone';
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

type BitCrusherUIOptions = {
  [K in keyof Pick<BitCrusherOptions, 'bits'>]: CreateDialOptions;
};

type BitcrusherUIKeys = {
  [K in keyof BitCrusherUIOptions]: string;
};

type BitcrusherUI = EffectUI<BitCrusherUIOptions>;

const id = 'bit-crusher';

const ids = <BitcrusherUIKeys>{
  bits: `${id}-bits`,
};

const labels = <BitcrusherUIKeys>{
  bits: 'Bits',
};

const options = <BitCrusherUIOptions>{
  bits: {
    min: 6,
    max: 10,
    step: 0.01,
    value: 7,
  },
};

const interfaces = <BaseEffectUI<BitcrusherUI>>{
  toggle: null,
  bits: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(
    id,
    'Bit Crusher'
  );

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.bits = NumberDialComponent(
    contentWrapper,
    ids.bits,
    labels.bits,
    options.bits
  );

  return wrapper;
}

async function create() {
  const { BitCrusher } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.bits);

  const effect = new EffectController(
    new BitCrusher({
      bits: interfaces.bits.value,
    })
  );

  // console.log(effect.node.name, effect.node.get());
  // name === 'BitCrusher'
  // get() === Object {
  // 	wet: 1,
  // 	bits: 7
  // }

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  interfaces.bits.on('change', (value) => {
    effect.node.set(<BitCrusherOptions>{
      bits: value,
    });
  });
}

export default {
  render,
  create,
};
