/*
 * Key Mapper
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2022 Michael Kolesidis
 * GNU General Public License v3.0
 *
 * The Key Mapper function takes computer key letters as input
 * and maps them to the on-screen keyboard keys by returning
 * the index number of the respective on-screen keyboard. It
 * works well with the octave switch function as it is build
 * around a "base" variable to refer to the keys, which can
 * then be modified accordingly.
 *
 */

export default function keyMapper(key, base) {
  switch (key) {
    // Lowercase
    case "a":
      return base;
      break;
    case "w":
      return base + 1;
      break;
    case "s":
      return base + 2;
      break;
    case "e":
      return base + 3;
      break;
    case "d":
      return base + 4;
      break;
    case "f":
      return base + 5;
      break;
    case "t":
      return base + 6;
      break;
    case "g":
      return base + 7;
      break;
    case "y":
      return base + 8;
      break;
    case "h":
      return base + 9;
      break;
    case "u":
      return base + 10;
      break;
    case "j":
      return base + 11;
      break;
    case "k":
      return base + 12;
      break;
    case "o":
      return base + 13;
      break;
    case "l":
      return base + 14;
      break;
    case "p":
      return base + 15;
      break;

    // Uppercase
    case "A":
      return base;
      break;
    case "W":
      return base + 1;
      break;
    case "S":
      return base + 2;
      break;
    case "E":
      return base + 3;
      break;
    case "D":
      return base + 4;
      break;
    case "F":
      return base + 5;
      break;
    case "T":
      return base + 6;
      break;
    case "G":
      return base + 7;
      break;
    case "Y":
      return base + 8;
      break;
    case "H":
      return base + 9;
      break;
    case "U":
      return base + 10;
      break;
    case "J":
      return base + 11;
      break;
    case "K":
      return base + 12;
      break;
    case "O":
      return base + 13;
      break;
    case "L":
      return base + 14;
      break;
    case "P":
      return base + 15;
      break;
  }
}
