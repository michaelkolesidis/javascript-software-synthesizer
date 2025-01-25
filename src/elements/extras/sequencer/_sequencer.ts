// @ts-nocheck

import * as Tone from 'tone';

// Inputs and Buttons
let seqRateInput = document.getElementById('seq-rate');
let noteValueInput = document.getElementById('note-value');
let seqInput = document.getElementById('seq-input');
let setButton = document.getElementById('seq-set');
let playButton = document.getElementById('seq-play');
let stopButton = document.getElementById('seq-stop');

// Sequencer rate (tempo)
if (seqRateInput) {
  seqRateInput.addEventListener('change', () => {
    if (seqRateInput) {
      if (seqRateInput.value > 10) seqRateInput.value = 10;
      if (seqRateInput.value <= 0) seqRateInput.value = 1;
      let rate = seqRateInput.value;

      seq.set({
        playbackRate: parseFloat(rate),
      });
    }
  });
}

// Note value
let noteValue = '16n';

if (noteValueInput) {
  noteValueInput.addEventListener('change', () => {
    if (noteValueInput) {
      if (noteValueInput.value <= 0) noteValueInput.value = '16n';
      noteValue = noteValueInput.value;
    }
  });
}

// Sequence notes input
if (setButton) {
  setButton.addEventListener('click', () => {
    let seqNotesInput;
    if (seqInput.value === 'funky town' || seqInput.value === 'Funky Town') {
      seqNotesInput = funkyTown;
    } else if (
      seqInput.value === 'i feel love' ||
      seqInput.value === 'I Feel Love'
    ) {
      seqNotesInput = feelLove;
    } else if (seqInput.value === 'default') {
      seqNotesInput = seqNotes;
    } else {
      seqNotesInput = JSON.parse('[' + seqInput.value + ']');
    }

    seq.set({
      events: seqNotesInput,
    });
  });
}

// Sequence demos
let seqNotes = ['C4', ['E4', 'D4', 'E4'], 'G4', ['A4', 'G4']];
let funkyTown = ['C4', 'C4', 'Bb3', 'C4', 'G3', 'G3', 'C4', 'F4', 'E4', 'C4'];
let feelLove = ['C2', 'C3', 'C2', 'C3', 'G1', 'G2', 'Bb1', 'Bb2'];
// let feelLoveAlt = ["G3", "G3", "D3", "F3"];

// Sequence
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, noteValue, time);
  // subdivisions are given as subarrays
}, seqNotes).start(0);

// Sequence play / stop
if (playButton) {
  playButton.addEventListener('click', () => Tone.Transport.start());
}
if (stopButton) {
  stopButton.addEventListener('click', () => Tone.Transport.stop());
}
