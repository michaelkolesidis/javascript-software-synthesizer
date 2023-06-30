// ---------------------------------------------------------------------
// Recorder
// ---------------------------------------------------------------------
// https://tonejs.github.io/docs/14.7.77/Recorder

// let recButton = document.getElementById("rec");
// let stopRecButton = document.getElementById("rec-stop");

// const recorder = new Tone.Recorder();

// recButton.addEventListener("click", function () {
// // start recording
// recorder.start();
// setTimeout(async () => {
// // the recorded audio is returned as a blob
// const recording = await recorder.stop();
// // download the recording by creating an anchor element and blob url
// const url = URL.createObjectURL(recording);
// const anchor = document.createElement("a");
// anchor.download = "recording.webm";
// anchor.href = url;
// anchor.click();
// }, 4000);
// });

// stopRecButton.addEventListener("click", function () {
// const recording = recorder.stop();
// // download the recording by creating an anchor element and blob url
// const url = URL.createObjectURL(recording);
// const anchor = document.createElement("a");
// anchor.download = "recording.webm";
// anchor.href = url;
// anchor.click();
// });

// wait for the notes to end and stop the recording

// wait for the notes to end and stop the recording
// setTimeout(async () => {
// // the recorded audio is returned as a blob
// const recording = await recorder.stop();
// // download the recording by creating an anchor element and blob url
// const url = URL.createObjectURL(recording);
// const anchor = document.createElement("a");
// anchor.download = "recording.webm";
// anchor.href = url;
// anchor.click();
// }, 4000);

// ---------------------------------------------------------------------
// Presets
// ---------------------------------------------------------------------
// Presets functionality will be implemented here

// ---------------------------------------------------------------------
// Effects connectivity alternatives
// ---------------------------------------------------------------------
// synth.chain(highPassFilter, lowPassFilter, Tone.Destination);

// synth.disconnect(highPassFilter);
// synth.disconnect(lowPassFilter);

// autoFilter first of high/low pass?
// the last ones in the chain don't work (crusher, cheby)

// Parallel
// synth.chain(lowPassFilter, Tone.Destination);
// synth.chain(highPassFilter, Tone.Destination);

// synth.chain(autoFilter, Tone.Destination);
// synth.chain(feedbackDelay, Tone.Destination);
// synth.chain(pingPong, Tone.Destination);
// synth.chain(reverb, Tone.Destination);
// synth.chain(chorus, Tone.Destination);
// synth.chain(tremolo, Tone.Destination);
// synth.chain(vibrato, Tone.Destination);
// synth.chain(phaser, Tone.Destination);
// synth.chain(dist, Tone.Destination);
// synth.chain(shift, Tone.Destination);
// synth.chain(crusher, Tone.Destination);
// synth.chain(cheby, Tone.Destination);

// synth.connect(lowPassFilter, Tone.Destination);
// synth.connect(highPassFilter, Tone.Destination);

// synth.connect(autoFilter, Tone.Destination);
// synth.connect(feedbackDelay, Tone.Destination);
// synth.connect(pingPong, Tone.Destination);
// synth.connect(reverb, Tone.Destination);
// synth.connect(chorus, Tone.Destination);
// synth.connect(tremolo, Tone.Destination);
// synth.connect(vibrato, Tone.Destination);
// synth.connect(phaser, Tone.Destination);
// synth.connect(dist, Tone.Destination);
// synth.connect(shift, Tone.Destination);
// synth.connect(crusher, Tone.Destination);
// synth.connect(cheby, Tone.Destination);

// const comp = new Tone.Compressor(-30, 3).toDestination();
// synth.chain(comp, Tone.Destination);
