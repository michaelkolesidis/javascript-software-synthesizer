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

// @todo use css selectors in #menu-content

export const ids = {
  titleBar: 'title-bar',
  buttonsBar: 'buttons-bar',
  toggleTheme: 'toggle-theme',
  toggleMenuPlaceholder: 'toggle-menu-placeholder',
  toggleMenu: 'toggle-menu',
  menuWrapper: 'menu-wrapper',
  menuContent: 'menu-content',
  menuBackdrop: 'menu-backdrop',
  menuTitle: 'menu-title',
};

export default function Header(darkMode: boolean) {
  const img = darkMode ? 'logo_192_dark.png' : 'logo_192.png';

  return /*html*/ `
<header tabindex="0">
  <div id="${ids.titleBar}">
    <img src="./assets/logo/${img}"/>
    <h1 class="screen-only">JSS-01 — JavaScript Software Synthesizer</h1>
  </div>

  <div id="${ids.buttonsBar}">
    <button id="${ids.toggleTheme}">
      <img src="./assets/icons/contrast.svg">
    </button>
    <button id="${ids.toggleMenuPlaceholder}"></button>
  </div>

  <div id="${ids.menuWrapper}">
    <div id="${ids.menuBackdrop}"></div>
    <div id="${ids.menuContent}" tabindex="0">
      <h2>Quick Start</h2>

      <p>The JSS-01 uses <strong>FM Synthesis</strong> (frequency modulation synthesis). In FM Synthesis there is an oscillator that produces the sound signal, the <strong>carrier</strong>, and an oscillator that modulates the carrier's wave frequency, the <strong>modulator</strong>. In JSS-01, the <span style="color:rgb(36,177,254)"><strong>Synth Section</strong></span> of the synthesizer controls the carrier oscillator, while the <span style="color:rgb(3, 214, 146)"><strong>Modulation Section</strong></span> controls the modulator. The <span style="color:rgb(252,188,45)"><strong>Effects Section</strong></span> includes all the effects that can be applied to the sound.</p>
      <p>You can play the JSS-01 by using the on-screen keyboard, your computer keyboard, or a MIDI keyboard.</p>

      <div id="image">
          <img width="300px" src="./assets/keyboard/keyboard.png">
      </div>

      <p>You can find the full Quick Start Guide <a href="https://github.com/michaelkolesidis/javascript-software-synthesizer#quick-start" target="_blank">here</a>.<br />You can find more information about FM synthesis <a href="https://github.com/michaelkolesidis/javascript-software-synthesizer#fm-synthesis" target="_blank">here</a>.</p>
    </div>

    <button id="${ids.toggleMenu}" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </div>
</header>`;
}
