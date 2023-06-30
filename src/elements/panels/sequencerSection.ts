/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function sequencerSection() {
  return /*html*/ `
<input id="seq-rate" placeholder="Rate" value="1" />
<input id="note-value" placeholder="Value" value="16n" />
<input type="text" id="seq-input" placeholder="Enter sequence" />
<button type="button" id="seq-set">
    <img src="./assets/icons/add.svg" alt="" />
</button>
<button type="button" id="seq-play">
    <img src="./assets/icons/play.svg" alt=""">
</button>
<button type="button" id="seq-stop">
    <img src="./assets/icons/stop.svg" alt="" />
</button>
`;
}
