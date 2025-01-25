/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import autoFilter from './elements/autoFilter.js';
import bitCrusher from './elements/bitCrusher.js';
import chebyshev from './elements/chebyshev.js';
import chorus from './elements/chorus.js';
import distortion from './elements/distortion.js';
import feedbackDelay from './elements/feedbackDelay.js';
import frequencyShifter from './elements/frequencyShifter.js';
import phaser from './elements/phaser.js';
// import pingPongDelay from './elements/pingPongDelay.js';
import reverb from './elements/reverb.js';
import tremolo from './elements/tremolo.js';
import vibrato from './elements/vibrato.js';

export default function createEffects() {
  const fragment = new DocumentFragment();

  fragment.append(
    autoFilter.render(),
    feedbackDelay.render(),
    tremolo.render(),
    bitCrusher.render(),

    chorus.render(),
    // pingPongDelay.render(),
    vibrato.render(),
    frequencyShifter.render(),

    phaser.render(),
    reverb.render(),
    distortion.render(),
    chebyshev.render()
  );

  return fragment;
}
