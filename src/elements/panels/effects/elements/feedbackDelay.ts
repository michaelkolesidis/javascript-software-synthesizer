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

// import { type FeedbackEffectOptions } from 'tone/build/esm/effect/FeedbackEffect.js';
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

// @todo
type FeedbackDelayOptions = {
  delayTime: number;
  feedback: number;
};

type FeedbackDelayUIOptions = {
  [K in keyof Pick<
    FeedbackDelayOptions,
    'delayTime' | 'feedback'
  >]: CreateDialOptions;
};

type FeedbackDelayUIKeys = {
  [K in keyof FeedbackDelayUIOptions]: string;
};

type FeedbackDelayUI = EffectUI<FeedbackDelayUIOptions>;

const id = 'feedback-delay';

const ids = <FeedbackDelayUIKeys>{
  delayTime: `${id}-time`,
  feedback: `${id}-feedback`,
};

const labels = <FeedbackDelayUIKeys>{
  delayTime: 'Delay Time',
  feedback: 'Feedback',
};

const options = <FeedbackDelayUIOptions>{
  delayTime: {
    min: 0,
    max: 1,
    step: 0.01,
    value: 0.25,
  },
  feedback: {
    min: 0,
    max: 1,
    step: 0.01,
    value: 0.5,
  },
};

const interfaces = <BaseEffectUI<FeedbackDelayUI>>{
  toggle: null,
  delayTime: null,
  feedback: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(
    id,
    'Feedback Delay'
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
  const { FeedbackDelay } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.delayTime);
  assertNotNull(interfaces.feedback);

  const effect = new EffectController(
    new FeedbackDelay({
      delayTime: interfaces.delayTime.value,
      feedback: interfaces.feedback.value,
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

  interfaces.delayTime.on('change', (value) => {
    // @todo
    effect.node.set(<RecursivePartial<EffectOptions>>{
      delayTime: value,
    });
  });

  interfaces.feedback.on('change', (value) => {
    // @todo
    effect.node.set(<RecursivePartial<EffectOptions>>{
      feedback: value,
    });
  });
}

export default {
  render,
  create,
};
