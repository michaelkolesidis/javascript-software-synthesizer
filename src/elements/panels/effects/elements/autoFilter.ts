/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { type AutoFilterOptions } from 'tone';
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

type AutoFilterUIOptions = {
  [K in keyof Pick<
    AutoFilterOptions,
    'depth' | 'frequency' | 'octaves'
  >]: CreateDialOptions;
};

type AutoFilterUIKeys = {
  [K in keyof AutoFilterUIOptions]: string;
};

type AutoFilterUI = EffectUI<AutoFilterUIOptions>;

const id = 'auto-filter';

const ids = <AutoFilterUIKeys>{
  depth: `${id}-depth`,
  frequency: `${id}-frequency`,
  octaves: `${id}-octaves`,
};

const labels = <AutoFilterUIKeys>{
  depth: 'Depth',
  frequency: 'Frequency',
  octaves: 'Octaves',
};

const options = <AutoFilterUIOptions>{
  depth: {
    min: 0,
    max: 1,
    step: 0,
    value: 1,
  },
  frequency: {
    min: 0,
    max: 1000,
    step: 0,
    value: 10,
  },
  octaves: {
    min: -10,
    max: 10,
    step: 0,
    value: 2.6,
  },
};

const interfaces = <BaseEffectUI<AutoFilterUI>>{
  toggle: null,
  depth: null,
  frequency: null,
  octaves: null,
};

function render() {
  const [wrapper, toggleWrapper, contentWrapper] = createEffectElements(
    id,
    'Auto Filter'
  );

  interfaces.toggle = new Nexus.Toggle(toggleWrapper, defaultToggleOptions);

  interfaces.depth = NumberDialComponent(
    contentWrapper,
    ids.depth,
    labels.depth,
    options.depth
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
  const { AutoFilter } = await import('../../../../audio/tone.js');

  assertNotNull(interfaces.toggle);
  assertNotNull(interfaces.depth);
  assertNotNull(interfaces.frequency);
  assertNotNull(interfaces.octaves);

  const effect = new EffectController(
    new AutoFilter({
      depth: interfaces.depth.value,
      frequency: interfaces.frequency.value,
      octaves: interfaces.octaves.value,
    })
  );

  // @todo
  // console.log(effect.node.name, effect.node.get());
  // name === 'Chorus'
  // get() === Object {
  // 	baseFrequency: 200,
  // 	depth: 1,
  // 	filter: { Q: 1, rolloff: -12, type: 'lowpass' },
  // 	frequency: 10,
  // 	octaves: 2.6,
  // 	type: 'sine',
  // 	wet: 1,
  // };

  interfaces.toggle.on('change', (state) => {
    effect.active = state;
    effect.update();
  });

  Object.entries(<AutoFilterUI>interfaces).forEach(([key, item]) => {
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
