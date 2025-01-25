/*
 * Key Mapper
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
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

// @todo => class Controller
const minValue = 0;
const maxValue = 84;

const octave = 12;

export const constants = {
  octave,
  minBase: minValue + octave,
  maxBase: maxValue - octave,
};

export function keyMapper(key: string, base: number) {
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
    Semicolon: 16,
    Quote: 17,
  };

  if (!(key in keyMap)) return null;

  const value = base + keyMap[key];

  if (value < minValue || value > maxValue) return null;

  return value;
}
