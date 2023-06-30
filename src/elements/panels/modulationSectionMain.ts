/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function modulationSectionMain() {
  return /*html*/ `
<!--------------------------------------------------------------------->
<!-- Modulation Type -->
<!--------------------------------------------------------------------->
<div class="component">
<p class="label">Type</p>
<div id="modulation-type"></div>
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
<!-- MOdulation Partial Count  -->
<!--------------------------------------------------------------------->
<div id="modulation-partial-count-section" class="component">
<p class="label">Partial Count</p>
<div id="modulation-partial-count"></div>
</div>
<!--------------------------------------------------------------------->
<!-- MOdulation Partials -->
<!--------------------------------------------------------------------->
<div id="modulation-partials-section" class="component">
<p class="label">Partials</p>
<div id="modulation-partials-selector"></div>
</div>
`;
}
