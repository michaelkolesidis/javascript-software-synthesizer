import Synthesizer from './synthesizer/render.synthesizer.js';
import Modulation from './modulation/render.modulation.js';
import Effects from './effects/render.effects.js';

const id = 'panels';

export default function Panels() {
	return /*html*/ `
<section id="${id}">
	<!-- Synth Section -->
	<div class="panel-wrapper">
		${Synthesizer()}
	</div>

	<!-- Modulation  Section -->
	<div class="panel-wrapper">
		${Modulation()}
	</div>

	<!-- Effects  Section -->
	<div class="panel-wrapper">
		${Effects()}
	</div>

</section>`;
}
