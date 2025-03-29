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

import { type PingPongDelayOptions } from 'tone';
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

type PingPongDelayUIOptions = {
  [K in keyof Pick<
    PingPongDelayOptions,
    'delayTime' | 'feedback'
  >]: CreateDialOptions;
};

type PingPongDelayUIKeys = {
  [K in keyof PingPongDelayUIOptions]: string;
};
type PingPongDelayUI = EffectUI<PingPongDelayUIOptions>;

const id = 'ping-pong-delay';

const ids = <PingPongDelayUIKeys>{
  delayTime: `${id}-delay-time`,
  feedback: `${id}-feedback`,
};

const labels = <PingPongDelayUIKeys>{
  delayTime: 'Delay Time',
  feedback: 'Feedback',
};

const options = <PingPongDelayUIOptions>{
  delayTime: {
    min: 0,
    max: 4,
    step: 0.01,
    value: 2,
  },
  feedback: {
    min: 0,
    max: 1,
    step: 0.01,
    value: 0.2,
  },
};

const interfaces = <BaseEffectUI<PingPongDelayUI>>{
  toggle: null,
  delayTime: null,
  feedback: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(
    id,
    'Ping Pong Delay'
  );

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.delayTime = NumberDialComponent(
    contentWrapper,
    ids.delayTime,
    labels.delayTime,
    options.delayTime
  );
  interfaces.feedback = NumberDialComponent(
    contentWrapper,
    ids.feedback,
    labels.feedback,
    options.feedback
  );

  return wrapper;
}

async function create() {
  const { PingPongDelay } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.delayTime);
  assertNotNull(interfaces.feedback);

  const effect = new EffectController(
    new PingPongDelay({
      delayTime: interfaces.delayTime.value,
      feedback: interfaces.feedback.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'PingPongDelay'
  // get() === Object {
  // 	wet: 1,
  // 	feedback: 0.2,
  // 	delayTime: 2,
  // 	maxDelay: 1
  // };

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  interfaces.delayTime.on('change', (value) => {
    effect.node.set(<PingPongDelayOptions>{
      delayTime: value,
    });
  });

  interfaces.feedback.on('change', (value) => {
    effect.node.set(<PingPongDelayOptions>{
      feedback: value,
    });
  });
}

export default {
  render,
  create,
};
