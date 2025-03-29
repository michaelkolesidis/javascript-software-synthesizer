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

import { type ChorusOptions } from 'tone';
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

type ChorusUIOptions = {
  [K in keyof Pick<
    ChorusOptions,
    'frequency' | 'delayTime' | 'depth'
  >]: CreateDialOptions;
};

type ChorusUIKeys = {
  [K in keyof ChorusUIOptions]: string;
};

type ChorusUI = EffectUI<ChorusUIOptions>;

const id = 'chorus';

const ids = <ChorusUIKeys>{
  frequency: `${id}-frequency`,
  delayTime: `${id}-delay-time`,
  depth: `${id}-depth`,
};

const labels = <ChorusUIKeys>{
  frequency: 'Frequency',
  delayTime: 'Delay',
  depth: 'Depth',
};

const options = <ChorusUIOptions>{
  frequency: {
    min: 0,
    max: 50,
    step: 0,
    value: 4,
  },
  delayTime: {
    min: 0,
    max: 200,
    step: 0,
    value: 2.5,
  },
  depth: {
    min: 0,
    max: 1,
    step: 0,
    value: 0.5,
  },
};

const interfaces = <BaseEffectUI<ChorusUI>>{
  toggle: null,
  frequency: null,
  delayTime: null,
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
  interfaces.delayTime = NumberDialComponent(
    contentWrapper,
    ids.delayTime,
    labels.delayTime,
    options.delayTime
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
  const { Chorus } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.frequency);
  assertNotNull(interfaces.delayTime);
  assertNotNull(interfaces.depth);

  const effect = new EffectController(
    new Chorus({
      frequency: interfaces.frequency.value,
      delayTime: interfaces.delayTime.value,
      depth: interfaces.depth.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'Chorus'
  // get() === Object {
  // 	wet: 0.5,
  // 	feedback: 0,
  // 	frequency: 4,
  // 	delayTime: 2.5,
  // 	depth: 0.5,
  // 	type: 'sine',
  // 	spread: 180,
  // };

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  Object.entries(<ChorusUI>interfaces).forEach(([key, item]) => {
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
