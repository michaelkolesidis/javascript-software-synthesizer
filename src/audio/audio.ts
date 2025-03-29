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

import { type Destination } from 'tone/build/esm/core/context/Destination.js';
import { type PolySynth, type FMSynth } from 'tone';

import { assertNotNull } from '../utils/utils.js';

// Nexus Interfaces
import displaysUI from '../elements/displays/displays.ui.js';

// @todo
import {
  getInterface as getKeyboardUI,
  handlers as keyboardHandlers,
} from '../elements/keyboard/keyboard.js';

import createSynth from './synth.js';
import createSynthHandlers from './synth.handlers.js';

import createEffects from './effects.js';
import createSequencerHandlers from './sequencer.handlers.js';

let synth: PolySynth<FMSynth>;
let destination: Destination;

async function createContext() {
  const { start, getDestination, Midi } = await import('./tone.js');

  await start();
  // console.log('started tone context');

  destination = getDestination();

  assertNotNull(displaysUI.oscilloscope);
  assertNotNull(displaysUI.spectrogram);
  assertNotNull(displaysUI.meter);

  displaysUI.oscilloscope.connect(destination as unknown as AudioNode);
  displaysUI.spectrogram.connect(destination as unknown as AudioNode);
  displaysUI.meter.connect(destination as unknown as AudioNode, 1);

  // apply ui settings to audio node
  synth = await createSynth();
  synth.toDestination();

  // add ui handlers
  createSynthHandlers();
  createSequencerHandlers();

  createEffects();

  // ---------------------------------------------------------------------
  // Synthesizer On-Screen Keyboard Playbility Implementation
  // ---------------------------------------------------------------------
  // Polyphonic synths need a note or an array of notes

  const keyboard = getKeyboardUI();

  let notes: string[] = [];

  keyboard.on('change', async (note) => {
    const noteString = Midi(note.note).toNote();
    // console.log(noteString);

    if (note.state) {
      synth.triggerAttack(noteString);
      notes.push(noteString);
    } else {
      synth.triggerRelease(note.note);
      notes = notes.filter((e) => e !== noteString);
    }
  });

  // keydown and keyup event
  // => alternate octave / change keyboard interface state
  for (const [event, handler] of Object.entries(keyboardHandlers)) {
    document.addEventListener(event, handler);
  }
}

export default {
  create: createContext,
  get() {
    return {
      synth,
      destination,
    };
  },
  getSynth() {
    return synth;
  },
  getDestination() {
    return destination;
  },
};
