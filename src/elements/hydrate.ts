// panels
import hydrateDisplays from './displays/hydrate.displays.js';
import hydrateSynthesizer from './panels/synthesizer/hydrate.synthesizer.js';
import hydrateModulation from './panels/modulation/hydrate.modulation.js';

// effects
// @todo

// extras
// @todo

// keyboard
import hydrateKeyboard from './keyboard/hydrate.keyboard.js';

export default (fragment: DocumentFragment) => {
	hydrateDisplays(fragment);
	hydrateSynthesizer(fragment);
	hydrateModulation(fragment);

	hydrateKeyboard(fragment);
};
