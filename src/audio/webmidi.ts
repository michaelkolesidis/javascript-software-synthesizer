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

import { WebMidi, Input } from 'webmidi';

import { assertInstanceOf, getElementById } from '../utils/utils.js';
import { Color } from '../utils/enums.js';

import { midiDisplayId } from '../elements/midi/midi.js';

import audio from './audio.js';
import { Midi } from './tone.js';

let element: HTMLElement;

function renderInputElements(inputs: Input[]) {
  if (inputs.length < 1) {
    element.innerHTML = 'No device detected';
  } else {
    element.innerHTML = 'Select MIDI Controller';

    inputs.forEach((device: Input, index: number) => {
      // console.log(index, device);
      element.innerHTML += `<p id="${index}" class="midi-selector">${index} : ${device.name}</p>`;
    });
  }
}

let selected = false;

function addInputElementListener(inputs: Input[]) {
  document.querySelectorAll('.midi-selector').forEach((item) => {
    assertInstanceOf(item, HTMLElement);

    // @todo removeEventListener
    item.addEventListener('click', () => {
      if (selected) return;

      selected = true;
      item.style.fontWeight = '500';

      setTimeout(function () {
        item.style.color = Color.blue;
        element.innerHTML += `<br>MIDI input selected`;
      }, 250);

      // @todo
      const index = parseInt(item.id);
      const input = inputs[index];
      const synth = audio.getSynth();

      input.channels[1].addListener('noteon', (e) => {
        // @ts-ignore
        const noteString = Midi(e.data[1]).toNote();
        // notes.push(midiToNoteString(e.data[1]));
        synth.triggerAttack(noteString);
        // synth.triggerAttack(midiToNoteString(e.data[1]));

        // @ts-ignore
        element.innerHTML = `<p style="font-size: 0.9rem; font-weight: 400;">MIDI note played: ${e.data[1]}<br>
				Note name: ${noteString}</p>`;
      });

      input.channels[1].addListener('noteoff', (e) => {
        // @todo dry
        // @ts-ignore
        const noteString = Midi(e.data[1]).toNote();
        synth.triggerRelease(noteString);
        // synth.triggerRelease(midiToNoteString(e.data[1]));
      });
    });
  });
}

function onEnabled() {
  // @test
  // const inputs: Input[] = [
  // 	{
  // 		name: 'test',
  // 	} as unknown as Input,
  // ];

  // MIDI Implementation
  const { inputs } = WebMidi;

  renderInputElements(inputs);
  addInputElementListener(inputs);
}

export default function enableWebMidi() {
  element = getElementById(midiDisplayId, HTMLElement);
  element.innerHTML = 'Loading ...';

  // ---------------------------------------------------------------------
  // @test
  // ---------------------------------------------------------------------
  // new Promise((resolve) => {
  // 	setTimeout(() => resolve('testing ...'), 500);
  // }).then(onEnabled);

  // ---------------------------------------------------------------------
  // MIDI Implementation
  // ---------------------------------------------------------------------
  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => {
      console.log(err);
      element.innerHTML = 'No device detected.';
    });
}
