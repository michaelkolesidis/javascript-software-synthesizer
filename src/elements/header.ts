/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function header(darkMode: boolean) {
  if (darkMode) {
    return /*html*/ `    
<div id="logo-name">
  <img src="./assets/logo/logo_192_dark.png"/>
  <div>JSS-01 — JavaScript Software Synthesizer</div>
</div>

<div id="buttons">
  <button type="button" id="dark">
    <img src="./assets/icons/contrast.svg">
  </button>
  <button id="button-placeholder"></button>

  <div id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
</div>   
`;
  }
  return /*html*/ `
  
<div id="logo-name">
  <img src="./assets/logo/logo_192.png"/>
  <div>JSS-01 — JavaScript Software Synthesizer</div>
</div>

<div id="buttons">

  <button type="button" id="dark-button">
    <img src="./assets/icons/contrast.svg">
  </button>
  <button id="button-placeholder"></button>

  <div id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
  <div id="nav-content" tabindex="0"></div>
</div>
`;
}
