/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
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
