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
  type FMSynth,
  type PolySynthOptions,
  type OmniOscillatorOptions,
  type EnvelopeOptions,
} from 'tone';
import { type OmniOscillatorSynthOptions } from 'tone/build/esm/source/oscillator/OscillatorInterface.js';
import { type RecursivePartial } from 'tone/build/esm/core/util/Interface.js';

import { assertNotNull } from '../utils/utils.js';

import synthesizerUI from '../elements/panels/synthesizer/synthesizer.ui.js';
import synthesizerOptions from '../elements/panels/synthesizer/synthesizer.options.js';

import modulationUI from '../elements/panels/modulation/modulation.ui.js';
import modulationOptions from '../elements/panels/modulation/modulation.options.js';

export default async function createSynth() {
  const { PolySynth, FMSynth } = await import('./tone.js');
  const node = new PolySynth(FMSynth);

  // console.log(PolySynth.getDefaults());

  // @todo refactor => utils.js
  assertNotNull(synthesizerUI.volume);
  assertNotNull(synthesizerUI.detune);
  assertNotNull(synthesizerUI.modulationIndex);
  assertNotNull(synthesizerUI.harmonicity);

  assertNotNull(synthesizerUI.type);
  assertNotNull(synthesizerUI.partialCount);
  assertNotNull(synthesizerUI.partials);

  assertNotNull(synthesizerUI.envelope);
  assertNotNull(synthesizerUI.attackCurve);
  assertNotNull(synthesizerUI.decayCurve);
  assertNotNull(synthesizerUI.releaseCurve);

  // @todo check type
  const oscillator = <RecursivePartial<OmniOscillatorOptions>>{
    type: synthesizerOptions.oscillator.types[
      synthesizerOptions.oscillator.radiobutton.active || 0
    ],
    // type: synthesizerUI.getType(),
    partialCount: 0,
    partials: [],
  };

  const [amplitudeAttack, amplitudeDecay, amplitudeSustain, amplitudeRelease] =
    synthesizerUI.envelope.values;

  const envelope = <RecursivePartial<Omit<EnvelopeOptions, 'context'>>>{
    attack: amplitudeAttack,
    decay: amplitudeDecay,
    sustain: amplitudeSustain,
    release: amplitudeRelease,
    attackCurve: synthesizerUI.attackCurve.value,
    decayCurve: synthesizerUI.decayCurve.value,
    releaseCurve: synthesizerUI.releaseCurve.value,
  };

  // @todo refactor
  assertNotNull(modulationUI.type);
  assertNotNull(modulationUI.partialCount);
  assertNotNull(modulationUI.partials);

  assertNotNull(modulationUI.modulationEnvelope);
  assertNotNull(modulationUI.attackCurve);
  assertNotNull(modulationUI.decayCurve);
  assertNotNull(modulationUI.releaseCurve);

  const modulation = <RecursivePartial<OmniOscillatorSynthOptions>>{
    type: modulationOptions.modulator.types[
      modulationOptions.modulator.radiobutton.active || 0
    ],
    partialCount: 0,
    partials: [],
  };

  const [
    modulationAttack,
    modulationDecay,
    modulationSustain,
    modulationRelease,
  ] = modulationUI.modulationEnvelope.values;

  const modulationEnvelope = <
    RecursivePartial<Omit<EnvelopeOptions, 'context'>>
  >{
    attack: modulationAttack,
    decay: modulationDecay,
    sustain: modulationSustain,
    release: modulationRelease,
    attackCurve: modulationUI.attackCurve.value,
    decayCurve: modulationUI.decayCurve.value,
    releaseCurve: modulationUI.releaseCurve.value,
  };

  node.set(<PolySynthOptions<FMSynth>>{
    maxPolyphony: 64,
    volume: synthesizerUI.volume.value,
    options: {
      detune: synthesizerUI.detune.value,
      harmonicity: synthesizerUI.harmonicity.value,
      oscillator,
      envelope,
      modulationIndex: synthesizerUI.modulationIndex.value,
      modulation,
      modulationEnvelope,
    },
  });

  return node;
}
