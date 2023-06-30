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
  const keyMap: { [key: string]: number } = {
    KeyA: 0,
    KeyW: 1,
    KeyS: 2,
    KeyE: 3,
    KeyD: 4,
    KeyF: 5,
    KeyT: 6,
    KeyG: 7,
    KeyY: 8,
    KeyH: 9,
    KeyU: 10,
    KeyJ: 11,
    KeyK: 12,
    KeyO: 13,
    KeyL: 14,
    KeyP: 15,
  };

  if (key in keyMap) {
    return base + keyMap[key];
  }
}
