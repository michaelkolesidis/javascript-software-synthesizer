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
      console.log(`Played: ${e.code}`);
      synth.triggerAttack(computerKeyToNoteString(e.code));
      notes.push(computerKeyToNoteString(e.code));
      console.log(notes)
    }
  }

  function stopNote(e) {
    fired = false;
    console.log(`Stopped: ${e.code}`);
    synth.triggerRelease(notes);
    notes = notes.filter((e) => e !== computerKeyToNoteString(e.code));
    console.log(notes)
  }
}
