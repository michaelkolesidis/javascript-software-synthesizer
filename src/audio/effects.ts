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

import autoFilter from '../elements/panels/effects/elements/autoFilter.js';
import bitCrusher from '../elements/panels/effects/elements/bitCrusher.js';
import chebyshev from '../elements/panels/effects/elements/chebyshev.js';
import chorus from '../elements/panels/effects/elements/chorus.js';
import distortion from '../elements/panels/effects/elements/distortion.js';
import feedbackDelay from '../elements/panels/effects/elements/feedbackDelay.js';
import frequencyShifter from '../elements/panels/effects/elements/frequencyShifter.js';
import phaser from '../elements/panels/effects/elements/phaser.js';
// import pingPongDelay from '../elements/panels/effects/elements/pingPongDelay.js';
import reverb from '../elements/panels/effects/elements/reverb.js';
import tremolo from '../elements/panels/effects/elements/tremolo.js';
import vibrato from '../elements/panels/effects/elements/vibrato.js';

export default async function createEffects() {
  autoFilter.create();
  bitCrusher.create();
  chebyshev.create();
  chorus.create();
  distortion.create();
  feedbackDelay.create();
  frequencyShifter.create();
  phaser.create();
  // pingPongDelay.create();
  reverb.create();
  tremolo.create();
  vibrato.create();
}
