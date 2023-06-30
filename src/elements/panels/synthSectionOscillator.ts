/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function synthSectionOscillator() {
  return /*html*/ `
<!--------------------------------------------------------------------->
<!-- Oscillator Type -->
<!--------------------------------------------------------------------->
<div id="type-selection" class="component">
    <p class="label">Type</p>
    <div id="oscillator-type"></div>
    <br />
    <div class="selection">
    <div>sine</div>
    <div>square</div>
    <div>sawtooth</div>
    <div>triangle</div>
    <div>pulse</div>
    </div>
</div>
<!--------------------------------------------------------------------->
<!-- Oscillator Partial Count -->
<!--------------------------------------------------------------------->
<div id="partial-count-section" class="component">
    <p class="label">Partial Count</p>
    <div id="partial-count"></div>
</div>
<!--------------------------------------------------------------------->
<!-- Oscillator Partials -->
<!--------------------------------------------------------------------->
<div id="partials-section" class="component">
    <p class="label">Partials</p>
    <div id="partials-selector"></div>
</div>
`;
}
