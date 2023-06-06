/*
 * Console Intro
 * Part of the JSS-01 | JavaScript Software Synthesizer project
 * Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
 *
 * The Console Intro function provides the welcome message printed
 * in the console upon the start of the app.
 */

const styles = [
  "background: rgb(1, 0, 76)",
  "color: rgb(230, 230, 230)",
  "font-weight: 600; font-size: 13px",
].join(";");

export default function consoleIntro() {
  console.log("%c * JSS-01 | JavaScript Software Synthesizer *", styles);
  console.log(
    "Since you are here you might want to check our project at GitHub, have a look at the source code, find bugs, submit issues, create pull requests and become part of our community!\nhttps://github.com/michaelkolesidis/javascript-software-synthesizer"
  );
}
