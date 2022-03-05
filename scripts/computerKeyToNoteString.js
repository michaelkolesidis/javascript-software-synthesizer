export default function computerKeyToNoteString(key) {
  switch (key) {
    // Octave 4
    case "KeyA":
      return "C4";
      break;
    case "KeyW":
      return "Db4";
      break;
    case "KeyS":
      return "D4";
      break;
    case "KeyE":
      return "Eb4";
      break;
    case "KeyD":
      return "E4";
      break;
    case "KeyF":
      return "F4";
      break;
    case "KeyT":
      return "Gb4";
      break;
    case "KeyG":
      return "G4";
      break;
    case "KeyY":
      return "Ab4";
      break;
    case "KeyH":
      return "A4";
      break;
    case "KeyU":
      return "Bb4";
      break;
    case "KeyJ":
      return "B4";
      break;

    // Octave 5
    case "KeyK":
      return "C5";
      break;
    case "KeyO":
      return "Db5";
      break;
    case "KeyL":
      return "D5";
      break;
    case "KeyP":
      return "Eb5";
      break;
    case "Semicolon":
      return "E5";
      break;
    case "Quote":
      return "F5";
      break;
    case "BracketRight":
      return "Gb5";
      break;
    case "Backslash":
      return "G5";
      break;
  }
}
