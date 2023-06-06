/*
 * Show/Hide
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
 *
 * The Show/Hide function allows the user to hide and show a
 * section by clicking on its title. The two arguments displayInput
 *  and displayOutput are the display property we are targeting and
 * the one we are switching to, respectively. On most occasions, displayInput
 * will be set to the display property of the section we want to hide
 * (ex. flex, grid, block) and displayOutput will be set to "none".
 * If a section  is hidden initially, we set displayInput to "none"
 * and diplay output the desired display property we want to set.
 *
 */

export default function showHide(
  title: HTMLElement,
  section: HTMLElement,
  displayInput: string,
  displayOutput: string
) {
  // (title, section)
  title.addEventListener("click", function () {
    if (section.style.display === displayInput || !section.style.display) {
      section.style.display = displayOutput;
    } else {
      section.style.display = displayInput;
    }
  });
}
