/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function synthSectionMain() {
  return /*html*/ `
<!--------------------------------------------------------------------->
<!-- Volume -->
<!--------------------------------------------------------------------->
<div class="component">
  <p class="label">Volume</p>
  <div id="volume"></div>
  <br />
  <div id="volume-num"></div>
</div>

<!--------------------------------------------------------------------->
<!-- Detune -->
<!--------------------------------------------------------------------->
<div class="component">
  <p class="label">Detune</p>
  <div id="detune"></div>
  <br />
  <div id="detune-num"></div>
</div>

<!--------------------------------------------------------------------->
<!-- Modulation Index -->
<!--------------------------------------------------------------------->
<div class="component">
  <p class="label">Mod Index</p>
  <div id="modulation-index"></div>
  <br />
  <div id="modulation-index-num"></div>
</div>

<!--------------------------------------------------------------------->
<!-- Harmonicity -->
<!--------------------------------------------------------------------->
<div class="component">
  <p class="label">Harmonicity</p>
  <div id="harmonicity"></div>
  <br />
  <div id="harmonicity-num"></div>
</div>
`;
}
