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

import CollapsibleComponent, {
  type TCollapsibleComponent,
} from '../../../components/collapsibleComponent.js';
import NumberDialComponent from '../../../components/numberDialComponent.js';
import EnvelopeComponent from '../../../components/envelopeComponent.js';
import WaveformComponent from '../../../components/waveformComponent.js';

import { createPanelSubtitle } from '../panels.js';

import options, { ids, type SynthesizerIds } from './synthesizer.options.js';
import synthesizerUI from './synthesizer.ui.js';

export default function createSynthesizer() {
  const fragment = new DocumentFragment();

  // create dials wrapper (volume, detune, etc.)
  const settings = document.createElement('div');
  settings.id = 'synthesizer-settings';

  // create collapsible sections wrapper
  const sections = {
    envelope: CollapsibleComponent(ids.envelope),
    oscillator: CollapsibleComponent(ids.oscillator),
  } as {
    readonly [K in keyof Pick<
      SynthesizerIds,
      'envelope' | 'oscillator'
    >]: TCollapsibleComponent;
  };

  // set titles
  sections.envelope.appendtToTitle(createPanelSubtitle('Amplitude Envelope'));
  sections.oscillator.appendtToTitle(createPanelSubtitle('Oscillator'));

  // create dials / nexus interfaces
  const dials = {
    volume: NumberDialComponent(settings, ids.volume, 'Volume', options.volume),
    detune: NumberDialComponent(settings, ids.detune, 'Detune', options.detune),
    modulationIndex: NumberDialComponent(
      settings,
      ids.modulationIndex,
      'Mod Index',
      options.modulationIndex
    ),
    harmonicity: NumberDialComponent(
      settings,
      ids.harmonicity,
      'Harmonicity',
      options.harmonicity
    ),
  };

  // create components / interfaces
  const envelope = EnvelopeComponent(
    sections.envelope.body,
    ids.envelope,
    options.envelope
  );
  const oscillator = WaveformComponent(
    sections.oscillator.body,
    ids.oscillator,
    options.oscillator
  );

  // store interfaces in a class
  // to make them accessible to the audio nodes
  synthesizerUI.set('volume', dials.volume);
  synthesizerUI.set('detune', dials.detune);
  synthesizerUI.set('modulationIndex', dials.modulationIndex);
  synthesizerUI.set('harmonicity', dials.harmonicity);

  synthesizerUI.set('envelope', envelope.multislider);
  synthesizerUI.set('attackCurve', envelope.selectAttack);
  synthesizerUI.set('decayCurve', envelope.selectDecay);
  synthesizerUI.set('releaseCurve', envelope.selectRelease);

  synthesizerUI.set('type', oscillator.radios);
  synthesizerUI.set('partialCount', oscillator.slider);
  synthesizerUI.set('partials', oscillator.multislider);

  fragment.append(
    settings,
    sections.envelope.fragment,
    sections.oscillator.fragment
  );

  return fragment;
}
