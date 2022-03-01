/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

export default function header(darkMode) {
  if (darkMode) {
    return `<div id="logo-name"><img src="./assets/logo/logo192_dark.png"/>
    <div>JSS-01 — JavaScript Software Synthesizer</div></div><div id="buttons"><button type="button">Test Button 1</button><button type="button">Test Button 2</button></div>`;
  }
  return `<div id="logo-name"><img src="./assets/logo/logo192.png"/>
    <div>JSS-01 — JavaScript Software Synthesizer</div></div><div id="buttons"><button type="button">Test Button 1</button><button type="button">Test Button 2</button></div>`;
}