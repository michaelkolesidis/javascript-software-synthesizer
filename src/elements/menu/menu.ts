/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function menu() {
  return /*html*/ `
<p id="menu-title">Quick Start</p>
<br>
<p>The JSS-01 uses <strong>FM Synthesis</strong> (frequency modulation synthesis). In FM Synthesis there is an oscillator that produces the sound signal, the <strong>carrier</strong>, and an oscillator that modulates the carrier's wave frequency, the <strong>modulator</strong>. In JSS-01, the <span style="color:rgb(36,177,254)"><strong>Synth Section</strong></span> of the synthesizer controls the carrier oscillator, while the <span style="color:rgb(3, 214, 146)"><strong>Modulation Section</strong></span> controls the modulator. The <span style="color:rgb(252,188,45)"><strong>Effects Section</strong></span> includes all the effects that can be applied to the sound.</p>

<br><br>
<p>You can play the JSS-01 by using the on-screen keyboard, your computer keyboard, or a MIDI keyboard.</p>

<br>

<div id="image">
    <img width="300px" src="./assets/keyboard/keyboard.png">
</div>

<br>

<p>You can find the full Quick Start Guide <a href="https://github.com/michaelkolesidis/javascript-software-synthesizer#quick-start" target="_blank">here</a>.</p>
<p>You can find more information about FM synthesis <a href="https://github.com/michaelkolesidis/javascript-software-synthesizer#fm-synthesis" target="_blank">here</a>.</p>
`;
}
