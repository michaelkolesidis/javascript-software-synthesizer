import computerKeyToNoteString from "./computerKeyToNoteString.js";

let notes = [];
console.log(notes)

export default function computerKeyboard(synth) {
  let fired = false;

  document.addEventListener("keypress", playNote);
  document.addEventListener("keyup", stopNote);

  function playNote(e) {
    if (!fired) {
      fired = true;
      synth.triggerAttack(computerKeyToNoteString(e.code));
      notes.push(computerKeyToNoteString(e.code));
    }
  }

  function stopNote(e) {
    fired = false;
    synth.triggerRelease(notes);
    notes = notes.filter((e) => e !== computerKeyToNoteString(e.code));
  }
}
