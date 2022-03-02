/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

export default function header(darkMode) {
  if (darkMode) {
    return `<div id="logo-name"><img src="./assets/logo/logo192_dark.png"/>
    <div>JSS-01 — JavaScript Software Synthesizer</div></div><div id="buttons"><button type="button" id="dark">🌓︎</button><button type="button" id="help">?</button><button id="menu" type="button">☰</button></div>`;
  }
  return `<div id="logo-name"><img src="./assets/logo/logo192.png"/>
    <div>JSS-01 — JavaScript Software Synthesizer</div></div><div id="buttons"><button type="button" id="dark"><img src="./assets/icons/contrast.svg"></button><button type="button" id="help">?</button><button id="menu" type="button">☰</button></div>`;
}
