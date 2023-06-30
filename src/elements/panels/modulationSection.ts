/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function modulationSectionMain() {
  return /*html*/ `
<div class="title" id="modulation-title"><p>Modulation</p></div>
<div id="modulation-content">
    <!--------------------------------------------------------------------->
    <!-- Modulation Main -->
    <!--------------------------------------------------------------------->
    <div id="modulation-section-main"></div>
    <!--------------------------------------------------------------------->
    <!-- MOdulation Envelope  -->
    <!--------------------------------------------------------------------->
    <p id="modulation-envelope-title" class="subtitle">
    Modulation Envelope
    </p>
    <div id="modulation-envelope"></div>
</div>
`;
}
