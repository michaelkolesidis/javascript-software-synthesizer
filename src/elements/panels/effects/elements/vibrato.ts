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

import { type VibratoOptions } from 'tone';
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

type VibratoUIOptions = {
  [K in keyof Pick<VibratoOptions, 'frequency' | 'depth'>]: CreateDialOptions;
};

type VibratoUIKeys = {
  [K in keyof VibratoUIOptions]: string;
};

type VibratoUI = EffectUI<VibratoUIOptions>;

const id = 'vibrato';

const ids = <VibratoUIKeys>{
  frequency: `${id}-frequency`,
  depth: `${id}-depth`,
};

const labels = <VibratoUIKeys>{
  frequency: 'Frequency',
  depth: 'Depth',
};

const options = <VibratoUIOptions>{
  frequency: {
    min: 0,
    max: 2000,
    step: 1,
    value: 9,
  },
  depth: {
    min: 0,
    max: 1,
    step: 0.01,
    value: 0.9,
  },
};

const interfaces = <BaseEffectUI<VibratoUI>>{
  toggle: null,
  frequency: null,
  depth: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(id);

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.frequency = NumberDialComponent(
    contentWrapper,
    ids.frequency,
    labels.frequency,
    options.frequency
  );
  interfaces.depth = NumberDialComponent(
    contentWrapper,
    ids.depth,
    labels.depth,
    options.depth
  );

  return wrapper;
}

async function create() {
  const { Vibrato } = await import('../../../../audio/tone.js');
  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.frequency);
  assertNotNull(interfaces.depth);

  const effect = new EffectController(
    new Vibrato({
      frequency: interfaces.frequency.value,
      depth: interfaces.depth.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'Vibrato'
  // get() === Object {
  // 	wet: 1,
  // 	maxDelay: 0.005,
  // 	frequency: 9,
  // 	depth: 0.9,
  // 	type: 'sine',
  // }

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  Object.entries(<VibratoUI>interfaces).forEach(([key, item]) => {
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
