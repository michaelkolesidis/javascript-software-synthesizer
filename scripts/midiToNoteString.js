/*
 * midiToNoteString
 * Part of the JSS-01 |JavaScript Software Synthesizer project
 * Copyright (c) 2022 Michael Kolesidis
 * MIT License
 *
 * The midiToNoteString function takes MIDI note numbers and
 * returns the name of the note as a string. It can be
 * useful with Tone.js that needs note names in strings
 * as its input
 *
 */

function midiToNoteString(note) {
  // Octave 0
  switch (note) {
    case 21:
      return "A0";
      break;
    case 22:
      return "Bb0";
      break;
    case 23:
      return "B0";
      break;

    // Octave 1
    case 24:
      return "C1";
      break;
    case 25:
      return "Db1";
      break;
    case 26:
      return "D1";
      break;
    case 27:
      return "Eb1";
      break;
    case 28:
      return "E1";
      break;
    case 29:
      return "F1";
      break;
    case 30:
      return "Gb1";
      break;
    case 31:
      return "G1";
      break;
    case 32:
      return "Ab1";
      break;
    case 33:
      return "A1";
      break;
    case 34:
      return "Bb1";
      break;
    case 35:
      return "B1";
      break;

    // Octave 2
    case 36:
      return "C2";
      break;
    case 37:
      return "Db2";
      break;
    case 38:
      return "D2";
      break;
    case 39:
      return "Eb2";
      break;
    case 40:
      return "E2";
      break;
    case 41:
      return "F2";
      break;
    case 42:
      return "Gb2";
      break;
    case 43:
      return "G2";
      break;
    case 44:
      return "Ab2";
      break;
    case 45:
      return "A2";
      break;
    case 46:
      return "Bb2";
      break;
    case 47:
      return "B2";
      break;

    // Octave 3
    case 48:
      return "C3";
      break;
    case 49:
      return "Db3";
      break;
    case 50:
      return "D3";
      break;
    case 51:
      return "Eb3";
      break;
    case 52:
      return "E3";
      break;
    case 53:
      return "F3";
      break;
    case 54:
      return "Gb3";
      break;
    case 55:
      return "G3";
      break;
    case 56:
      return "Ab3";
      break;
    case 57:
      return "A3";
      break;
    case 58:
      return "Bb3";
      break;
    case 59:
      return "B3";
      break;

    // Octave 4
    case 60:
      return "C4";
      break;
    case 61:
      return "Db4";
      break;
    case 62:
      return "D4";
      break;
    case 63:
      return "Eb4";
      break;
    case 64:
      return "E4";
      break;
    case 65:
      return "F4";
      break;
    case 66:
      return "Gb4";
      break;
    case 67:
      return "G4";
      break;
    case 68:
      return "Ab4";
      break;
    case 69:
      return "A4";
      break;
    case 70:
      return "Bb4";
      break;
    case 71:
      return "B4";
      break;

    // Octave 5
    case 72:
      return "C5";
      break;
    case 73:
      return "Db5";
      break;
    case 74:
      return "D5";
      break;
    case 75:
      return "Eb5";
      break;
    case 76:
      return "E5";
      break;
    case 77:
      return "F5";
      break;
    case 78:
      return "Gb5";
      break;
    case 79:
      return "G5";
      break;
    case 80:
      return "Ab5";
      break;
    case 81:
      return "A5";
      break;
    case 82:
      return "Bb5";
      break;
    case 83:
      return "B5";
      break;

    // Octave 6
    case 84:
      return "C6";
      break;
    case 85:
      return "Db6";
      break;
    case 86:
      return "D6";
      break;
    case 87:
      return "Eb6";
      break;
    case 88:
      return "E6";
      break;
    case 89:
      return "F6";
      break;
    case 90:
      return "Gb6";
      break;
    case 91:
      return "G6";
      break;
    case 92:
      return "Ab6";
      break;
    case 93:
      return "A6";
      break;
    case 94:
      return "Bb6";
      break;
    case 95:
      return "B6";
      break;

    // Octave 7
    case 96:
      return "C7";
      break;
    case 97:
      return "Db7";
      break;
    case 98:
      return "D7";
      break;
    case 99:
      return "Eb7";
      break;
    case 100:
      return "E7";
      break;
    case 101:
      return "F7";
      break;
    case 102:
      return "Gb7";
      break;
    case 103:
      return "G7";
      break;
    case 104:
      return "Ab7";
      break;
    case 105:
      return "A7";
      break;
    case 106:
      return "Bb7";
      break;
    case 107:
      return "B7";
      break;

    // Octave 8
    case 108:
      return "C8";
      break;
  }
}
