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

import CollapsibleComponent from '../../../components/collapsibleComponent.js';
import WaveformComponent from '../../../components/waveformComponent.js';
import EnvelopeComponent from '../../../components/envelopeComponent.js';

import { createPanelSubtitle } from '../panels.js';

import modulationUI from './modulation.ui.js';
import options, { ids } from './modulation.options.js';

export default function createModulator() {
  const fragment = new DocumentFragment();

  const modulator = WaveformComponent(
    fragment,
    ids.modulator,
    options.modulator
  );

  const envelopeSection = CollapsibleComponent(
    ids.modulationEnvelope,
    createPanelSubtitle('Modulation Envelope')
  );
  fragment.append(envelopeSection.fragment);

  const envelope = EnvelopeComponent(
    envelopeSection.body,
    ids.modulationEnvelope,
    options.modulationEnvelope
  );

  modulationUI.set('type', modulator.radios);
  modulationUI.set('partialCount', modulator.slider);
  modulationUI.set('partials', modulator.multislider);

  modulationUI.set('modulationEnvelope', envelope.multislider);
  modulationUI.set('attackCurve', envelope.selectAttack);
  modulationUI.set('decayCurve', envelope.selectDecay);
  modulationUI.set('releaseCurve', envelope.selectRelease);

  return fragment;
}
