import * as Tone from 'tone';

const options = {
	maxPolyphony: 256,
} as Tone.PolySynthOptions<Tone.FMSynth>;

const synth = new Tone.PolySynth(Tone.FMSynth);

synth.set(options);
synth.toDestination();

// Effects connected in series
// synth.chain(
// 	autoFilter,
// 	phaser,
// 	crusher,
// 	cheby,
// 	feedbackDelay,
// 	pingPong,
// 	reverb,
// 	chorus,
// 	tremolo,
// 	vibrato,
// 	dist,
// 	shift,
// 	Tone.Destination
// );

export default synth;

let started = false;

export const handleUserInput = async () => {
	if (started) return;

	await Tone.start();

	started = true;

	console.log('started tone context');
};
