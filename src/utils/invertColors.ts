/*
 * Invert Colors
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
 *
 * The Invert Colors functions inverts the colors
 * of the whole application, mimicking dark mode
 * toggle functionality.
 */

import { assertInstanceOf } from './utils.js';

import { ids } from '../elements/base/header/header.js';

// @todo onload event

export default function invertColors() {
  const themeToggle = document.getElementById(ids.toggleTheme);
  const themeOverlay = document.getElementById('overlay');
  let inverted = false;

  assertInstanceOf(themeToggle, HTMLButtonElement);
  assertInstanceOf(themeOverlay, HTMLDivElement);

  themeToggle.addEventListener('click', () => {
    inverted
      ? (themeOverlay.style.display = 'none')
      : (themeOverlay.style.display = 'block');
    inverted = !inverted;
  });
}
