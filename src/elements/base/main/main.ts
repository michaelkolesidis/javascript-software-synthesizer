/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import Displays from "../../displays/render.displays.js";
import Panels from "../../panels/panels.js";
import Extras from "../../extras/extras.js";
import Keyboard from "../../keyboard/render.keyboard.js";

export default function Main() {
	return /*html*/ `
<main id="content-wrap">
	<!-- Displays -->
	${Displays()}

	<!-- Panels (Synthesizer, Modulation, Effects) -->
	${Panels()}

	<!-- Extras (Presets, Sequencer etc.) -->
	${Extras()}

	<!-- Keyboard -->
	${Keyboard()}

</main>`;
}
