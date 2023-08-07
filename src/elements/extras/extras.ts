import { keysToIdsDict } from '../../utils/dom.js';

import Sequencer, {id as sequencerId} from './sequencer/render.sequencer.js';

const keys = [sequencerId] as const;

const id = 'extras';

export const ids = keysToIdsDict<ExtraIds>(keys);
export type ExtraIds = (typeof keys)[number];

export default function Extras() {
	return /* html */ `
<section id="${id}">
	<!--------------------------------------------------------------------->
	<!-- @todo Presets -->
	<!--------------------------------------------------------------------->
	<!--
	<div id="presets"></div>
	-->
	<!--------------------------------------------------------------------->
	<!-- Sequencer -->
	<!--------------------------------------------------------------------->
	${Sequencer()}
	<!--------------------------------------------------------------------->
	<!-- @todo Recorder -->
	<!--------------------------------------------------------------------->
	<!--
	<div id="recorder">
		<button type="button" id="rec">●</button>
		<button type="button" id="rec-stop">■</button>
	</div>
	-->
</section>`;
}