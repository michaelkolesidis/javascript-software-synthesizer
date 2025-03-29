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

import {
  type NexusMultislider,
  type NexusRadioButton,
  type NexusSelect,
  type NexusSlider,
} from 'nexusui2';
import { assertNotNull } from '../../../utils/utils';
import modulationOptions from './modulation.options';

// @todo avalailable keys in PolySynth.options => FMSynth
// import { FMSynthOptions } from 'tone';

export type ModulationUI = {
  type: NexusRadioButton;
  partialCount: NexusSlider;
  partials: NexusMultislider;
  modulationEnvelope: NexusMultislider;
  attackCurve: NexusSelect;
  decayCurve: NexusSelect;
  releaseCurve: NexusSelect;
};

export type ModulationUIKeys = keyof ModulationUI;

class Interfaces {
  type: null | NexusRadioButton;
  partialCount: null | NexusSlider;
  partials: null | NexusMultislider;
  modulationEnvelope: null | NexusMultislider;
  attackCurve: null | NexusSelect;
  decayCurve: null | NexusSelect;
  releaseCurve: null | NexusSelect;

  constructor() {
    this.type = null;
    this.partialCount = null;
    this.partials = null;
    this.modulationEnvelope = null;
    this.attackCurve = null;
    this.decayCurve = null;
    this.releaseCurve = null;
  }

  set(key: ModulationUIKeys, nexusInterface: unknown) {
    type K = typeof key;
    type T = ModulationUI[K];
    this[key] = nexusInterface as T extends ModulationUI ? T : never;
  }

  getType() {
    assertNotNull(this.type);
    assertNotNull(this.partialCount);

    const index = this.type.active;
    const type = modulationOptions.modulator.types[index];

    const partials = this.partialCount.value;
    if (type === 'pulse' || partials < 1) {
      return type;
    }

    return `${type}${partials}`;
  }
}

export default new Interfaces();
