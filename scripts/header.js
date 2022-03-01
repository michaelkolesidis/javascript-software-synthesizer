/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

export default function header(darkMode) {
  if (darkMode) {
    return `<img src="./assets/logo/logo192_dark.png"/>
    <div>JSS-01 — JavaScript Software Synthesizer</div>`;
  }
  return `<img src="./assets/logo/logo192.png"/>
    <div>JSS-01 — JavaScript Software Synthesizer</div>`;
}