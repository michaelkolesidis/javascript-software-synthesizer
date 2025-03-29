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

import audio from './audio';

import { interfaces } from '../elements/extras/sequencer/sequencer.js';

const presets = {
  default: ['C4', ['E4', 'D4', 'E4'], 'G4', ['A4', 'G4']],
  funkyTown: ['C4', 'C4', 'Bb3', 'C4', 'G3', 'G3', 'C4', 'F4', 'E4', 'C4'],
  iFeelLove: ['C2', 'C3', 'C2', 'C3', 'G1', 'G2', 'Bb1', 'Bb2'],
};

// @todo Tone.Time().toNotation()
const subdivisions = [
  '1m',
  '1n',
  '1n.',
  '2n',
  '2n.',
  '2t',
  '4n',
  '4n.',
  '4t',
  '8n',
  '8n.',
  '8t',
  '16n',
  '16n.',
  '16t',
  '32n',
  '32n.',
  '32t',
];

export default async function createSequencerHandlers() {
  const { start, Sequence, Transport } = await import('./tone.js');
  const synth = audio.getSynth();

  // console.log('Time(2)', Time(2).toNotation());

  let duration = interfaces.subdivision.value;

  // @todo set presets.default as placeholder
  const sequence = new Sequence((time, note) => {
    synth.triggerAttackRelease(note, duration, time);
  }, presets.default).start(0);

  // @todo use bpm range slider
  interfaces.rate.addEventListener('change', () => {
    const rate = Math.max(0, Math.min(parseFloat(interfaces.rate.value)));
    interfaces.rate.value = `${rate}`;

    console.log('triggered set');
    sequence.set({ playbackRate: rate });
  });

  interfaces.subdivision.addEventListener('change', () => {
    const { value } = interfaces.subdivision;
    if (!subdivisions.includes(value)) {
      interfaces.subdivision.value = subdivisions[6];
    }
  });

  // @todo interface.sequence
  // use regex pattern !

  interfaces.set.addEventListener('click', () => {
    const { value } = interfaces.set;
    let notes: string[];

    // @todo use regex
    switch (value) {
      case 'funky town':
      case 'Funky Town':
        notes = presets.funkyTown;
        break;

      case 'i feel love':
      case 'I Feel Love':
        notes = presets.iFeelLove;
        break;

      default:
        // @todo parse user input!
        notes = JSON.parse(`[${value}]`);
        break;
    }

    sequence.events = notes;
  });

  interfaces.play.addEventListener('click', async () => {
    await start();
    Transport.start();
    // console.log('started');
  });

  interfaces.stop.addEventListener('click', () => {
    Transport.stop();
    // @todo necessary?
    // Transport.position = 0;
  });
}
