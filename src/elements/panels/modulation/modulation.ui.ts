import { NexusMultislider, NexusRadioButton, NexusSelect, NexusSlider } from 'nexusui2';
import { assertNotNull } from '../../../utils/utils';
import modulationOptions from './modulation.options';

// @todo avalailable keys in PolySynth.options => FMSynth
// import { FMSynthOptions } from 'tone';

export type ModulationUI = {
	type: NexusRadioButton;
	partialCount: NexusSlider;
	partials: NexusMultislider;
	modulationEnvelope: NexusMultislider;
	attackCurve: NexusSelect;
	decayCurve: NexusSelect;
	releaseCurve: NexusSelect;
};

export type ModulationUIKeys = keyof ModulationUI;

class Interfaces {
	type: null | NexusRadioButton;
	partialCount: null | NexusSlider;
	partials: null | NexusMultislider;
	modulationEnvelope: null | NexusMultislider;
	attackCurve: null | NexusSelect;
	decayCurve: null | NexusSelect;
	releaseCurve: null | NexusSelect;

	constructor() {
		this.type = null;
		this.partialCount = null;
		this.partials = null;
		this.modulationEnvelope = null;
		this.attackCurve = null;
		this.decayCurve = null;
		this.releaseCurve = null;
	}

	set(key: ModulationUIKeys, nexusInterface: unknown) {
		type K = typeof key;
		type T = ModulationUI[K];
		this[key] = nexusInterface as T extends ModulationUI ? T : never;
	}

getType() {
		assertNotNull(this.type);
		assertNotNull(this.partialCount);

		const index = this.type.active;
		const type = modulationOptions.modulator.types[index];

		const partials = this.partialCount.value;
		if (type === 'pulse' || partials < 1) {
			return type;
		}

		return `${type}${partials}`;
	}
}

export default new Interfaces();
