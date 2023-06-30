/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function synthSectionMain() {
  return /*html*/ `
<div class="title" id="synth-title"><p>Synth</p></div>
<div id="synth-section-content">
    <!--------------------------------------------------------------------->
    <!-- Main -->
    <!--------------------------------------------------------------------->
    <div id="synth-section-main"></div>
    <!--------------------------------------------------------------------->
    <!-- Amplitude Envelope -->
    <!--------------------------------------------------------------------->
    <p id="adsr-envelope-title" class="subtitle">
    Amplitude Envelope
    </p>
    <div id="adsr-envelope"></div>
    <!--------------------------------------------------------------------->
    <!-- Oscillator -->
    <!--------------------------------------------------------------------->
    <p id="oscillator-title" class="subtitle">Oscillator</p>
    <div id="oscillator"></div>
</div>
`;
}
