/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function synthSectionAmplitudeEnvelope() {
  return /*html*/ `
<div class="component">
  <p class="label">Attack &nbsp;&nbsp; Decay &nbsp;&nbsp; Sustain &nbsp;&nbsp; Release</p>
  <div id="amplitude-adsr"></div>
</div>
<div class="component">
  <p class="label">Attack Curve</p>
  <div id="attack-curve"></div>
  <p class="label list">Decay Curve</p>
  <div id="decay-curve"></div>
  <p class="label list">Release Curve</p>
  <div id="release-curve"></div>
</div>
`;
}
