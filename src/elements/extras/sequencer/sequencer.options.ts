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

export type SequencerUI = {
  rate: HTMLInputElement;
  subdivision: HTMLInputElement;
  sequence: HTMLInputElement;
  set: HTMLButtonElement;
  play: HTMLButtonElement;
  stop: HTMLButtonElement;
};

export type SequencerUIKeys = {
  [K in keyof SequencerUI]: string;
};

export const ids = <SequencerUIKeys>{
  rate: 'seq-rate',
  subdivision: 'seq-subdivision',
  sequence: 'seq-notes',
  set: 'seq-set',
  play: 'seq-play',
  stop: 'seq-stop',
};
