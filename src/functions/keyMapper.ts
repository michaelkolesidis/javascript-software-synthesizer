/*
 * Key Mapper
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
 *
 * The Key Mapper function takes computer key letters as input
 * and maps them to the on-screen keyboard keys by returning
 * the index number of the respective on-screen keyboard. It
 * works well with the octave switch function as it is build
 * around a "base" variable to refer to the keys, which can
 * then be modified accordingly.
 *
 */

export default function keyMapper(key: string, base: number) {
  switch (key) {
    case "KeyA":
      return base;
    case "KeyW":
      return base + 1;
    case "KeyS":
      return base + 2;
    case "KeyE":
      return base + 3;
    case "KeyD":
      return base + 4;
    case "KeyF":
      return base + 5;
    case "KeyT":
      return base + 6;
    case "KeyG":
      return base + 7;
    case "KeyY":
      return base + 8;
    case "KeyH":
      return base + 9;
    case "KeyU":
      return base + 10;
    case "KeyJ":
      return base + 11;
    case "KeyK":
      return base + 12;
    case "KeyO":
      return base + 13;
    case "KeyL":
      return base + 14;
    case "KeyP":
      return base + 15;
  }
}
