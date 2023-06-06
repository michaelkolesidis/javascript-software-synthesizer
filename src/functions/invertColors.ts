/*
 * Invert Colors
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
 *
 * The Invert Colors functions inverts the colors
 * of the whole application, mimicking dark mode
 * toggle functionality.
 */

export default function invertColors() {
  const darkButton = document.getElementById("dark-button");
  const overlay = document.getElementById("overlay");
  let inverted = false;

  darkButton!.addEventListener("click", () => {
    inverted
      ? (overlay!.style.display = "none")
      : (overlay!.style.display = "block");
    inverted = !inverted;
  });
}
