/*
 * Show/Hide
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2022 Michael Kolesidis
 * MIT License
 *
 * The Show/Hide function allows the user to hide and show a
 * section by clicking on its title.
 */

export default function showHide(title, section, display) {
  // (title, section)
  title.addEventListener("click", function () {
    if (section.style.display === display) {
      section.style.display = "none";
    } else {
      section.style.display = display;
    }
  });
}