/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
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
`
}