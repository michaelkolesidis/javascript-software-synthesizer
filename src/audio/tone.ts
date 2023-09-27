// tree shake and export required classes
// they are dynamically imported after user interaction
// to prevent warnings in console
export {
	start,
	getDestination,
	Sequence,
	Transport,
	Midi,
	PolySynth,
	FMSynth,
	AutoFilter,
	BitCrusher,
	Chebyshev,
	Chorus,
	Distortion,
	FeedbackDelay,
	FrequencyShifter,
	Phaser,
	PingPongDelay,
	Reverb,
	Tremolo,
	Vibrato,
} from 'tone';
