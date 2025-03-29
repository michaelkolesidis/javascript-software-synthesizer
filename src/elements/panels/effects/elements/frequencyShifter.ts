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

import { type RecursivePartial } from 'tone/build/esm/core/util/Interface.js';
import { type EffectOptions } from 'tone/build/esm/effect/Effect.js';

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

type FrequencyShifterOptions = {
  // @todo
  frequency: number;
};

type FrequencyShifterUIOptions = {
  [K in keyof FrequencyShifterOptions]: CreateDialOptions;
};

type FrequencyShifterUIKeys = {
  [K in keyof FrequencyShifterUIOptions]: string;
};

type FrequencyShifterUI = EffectUI<FrequencyShifterUIOptions>;

const id = 'freq-shifter';

const ids = <FrequencyShifterUIKeys>{
  frequency: `${id}-frequency`,
};

const labels = <FrequencyShifterUIKeys>{
  frequency: 'Frequency',
};

const options = <FrequencyShifterUIOptions>{
  frequency: {
    min: -600,
    max: 600,
    step: 1,
    value: 42,
  },
};

const interfaces = <BaseEffectUI<FrequencyShifterUI>>{
  toggle: null,
  frequency: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(
    id,
    'Freq. Shifter'
  );

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.frequency = NumberDialComponent(
    contentWrapper,
    ids.frequency,
    labels.frequency,
    options.frequency
  );

  return wrapper;
}

async function create() {
  const { FrequencyShifter } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.frequency);

  const effect = new EffectController(
    new FrequencyShifter({
      frequency: interfaces.frequency.value,
    })
  );

  // console.log(effect.node.name, effect.node.get());
  // name === 'FrequencyShifter'
  // get() === Object {
  // 	wet: 1,
  // 	frequency: 1,
  // }

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  interfaces.frequency.on('change', (value) => {
    // @todo
    effect.node.set(<RecursivePartial<EffectOptions>>{
      frequency: value,
    });
  });
}

export default {
  render,
  create,
};
