import { NexusDial, NexusMultislider, NexusRadioButton, NexusSelect, NexusSlider } from 'nexusui2';
import { assertNotNull } from '../../../utils/utils';
import synthesizerOptions from './synthesizer.options';

// @todo avalailable keys in PolySynth.options => FMSynth
// import { FMSynthOptions } from 'tone';

export type SynthesizerUI = {
	volume: NexusDial;
	detune: NexusDial;
	modulationIndex: NexusDial;
	harmonicity: NexusDial;

	envelope: NexusMultislider;
	attackCurve: NexusSelect;
	decayCurve: NexusSelect;
	releaseCurve: NexusSelect;

	type: NexusRadioButton;
	partialCount: NexusSlider;
	partials: NexusMultislider;
};

export type SynthesizerUIKeys = keyof SynthesizerUI;

class Interfaces {
	volume: null | NexusDial;
	detune: null | NexusDial;
	modulationIndex: null | NexusDial;
	harmonicity: null | NexusDial;

	envelope: null | NexusMultislider;
	attackCurve: null | NexusSelect;
	decayCurve: null | NexusSelect;
	releaseCurve: null | NexusSelect;

	type: null | NexusRadioButton;
	partialCount: null | NexusSlider;
	partials: null | NexusMultislider;

	constructor() {
		this.volume = null;
		this.detune = null;
		this.modulationIndex = null;
		this.harmonicity = null;

		this.envelope = null;
		this.attackCurve = null;
		this.decayCurve = null;
		this.releaseCurve = null;

		this.type = null;
		this.partialCount = null;
		this.partials = null;
	}

	set(key: SynthesizerUIKeys, nexusInterface: unknown) {
		type K = typeof key;
		type T = SynthesizerUI[K];
		this[key] = nexusInterface as T extends SynthesizerUI ? T : never;
	}

	getType() {
		assertNotNull(this.type);
		assertNotNull(this.partialCount);

		const index = this.type.active;
		const type = synthesizerOptions.oscillator.types[index];

		const partials = this.partialCount.value;
		if (type === 'pulse' || partials < 1) {
			return type;
		}

		return `${type}${partials}`;
	}
}

export default new Interfaces();
