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

import { ids } from './sequencer.options';

const createInput = (id: string, placeholder: string, value?: string) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = id;
  input.placeholder = placeholder;

  if (value) input.value = value;

  return input;
};

const createButton = (id: string) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.id = id;
  return button;
};

export const interfaces = {
  rate: createInput(ids.rate, 'Rate', '1'),
  subdivision: createInput(ids.subdivision, 'Value', '16n'),
  sequence: createInput(ids.sequence, 'Enter sequence'),
  set: createButton(ids.set),
  play: createButton(ids.play),
  stop: createButton(ids.stop),
};

interfaces.set.innerHTML = '<img src="./assets/icons/add.svg" alt="" />';
interfaces.play.innerHTML = '<img src="./assets/icons/play.svg" alt="" />';
interfaces.stop.innerHTML = '<img src="./assets/icons/stop.svg" alt="" />';

export default function createSequencer() {
  const fragment = new DocumentFragment();

  fragment.append(...Object.values(interfaces));

  return fragment;
}
