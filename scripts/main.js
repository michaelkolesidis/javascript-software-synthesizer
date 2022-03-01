/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

import ConsoleIntro from "./consoleIntro.js";
import Header from "./header.js";
import Footer from "./footer.js";

import midiToNoteString from "./midiToNoteString.js";

// Send Tone audio to Nexus
// Nexus.context = Tone.context;
console.log("NEXUS CONTEXT:");
console.log(Nexus.context);
console.log("TONE CONTEXT:");
console.log(Tone.context);

// ------------------------
// Colors
// ------------------------
const BLACK = "rgb(51, 51, 51)";
const GRAY_DARK = "rgb(180, 180, 180)";
const GRAY = "rgb(240,240,243)";
const BLUE = "rgb(1, 0, 76)";
const CYAN = "rgb(35, 178, 254)";
const GREEN = "rgb(3, 214, 146)";
const YELLOW = "rgb(254, 188, 44)";

Nexus.colors.fill = GRAY;

// ------------------------
// Welcome Message in Console
// ------------------------
ConsoleIntro();

// ------------------------
// Header
// ------------------------
const header = document.getElementById("header");
header.innerHTML = Header();

// ------------------------
// Footer
// ------------------------
const footer = document.getElementById("footer");
footer.innerHTML = Footer();

// ------------------------
// MIDI Display
// ------------------------
const midiDisplay = document.getElementById("midi-display");

// ------------------------
// Keyboard
// ------------------------
// Nexus.colors.accent = GRAY; // dark mode
// Nexus.colors.dark = GRAY_DARK; // darl mode
// Nexus.colors.light = BLACK; // dark mode

let keyboard = new Nexus.Piano("#keyboard", {
  size: [1200, 100],
  mode: "button", // 'button', 'toggle', or 'impulse'
  lowNote: 21,
  highNote: 108,
});
keyboard.colorize("accent", GRAY_DARK); // light mode


let keyboardResizeButton = document.createElement("button");
keyboardResizeButton.innerHTML = "Resize";
document.querySelector("#keyboard").appendChild(keyboardResizeButton);
keyboardResizeButton.addEventListener("click", function() {
  keyboard.resize(800, 50);
});



// ------------------------
// Dark Mode
// ------------------------
let darkMode = false;

// function toggleDark() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
//   header.style.color = "white";
//   footer.style.color = "white";
//   midiDisplay.style.color = "white";
//   midiDisplay.style.background = "rgb(100,100,100";
//   Nexus.colors.fill = "rgb(100,100,100";
//   darkMode = true;
//   header.innerHTML = Header(darkMode);
//   let toggleDarkButton = document.createElement("button"); // recreates button in dark header
//   toggleDarkButton.innerHTML = "Dark Mode"; // recreates button in dark header
//   document.querySelector("#header").appendChild(toggleDarkButton); // recreates button in dark header
// }

// let toggleDarkButton = document.createElement("button");
// toggleDarkButton.innerHTML = "Dark Mode";
// document.querySelector("#header").appendChild(toggleDarkButton);
// // toggleDark()

// toggleDarkButton.addEventListener("click", toggleDark());

// ------------------------
// Effects
// ------------------------
// AutoFilter .connect(autoFilter)
const autoFilter = new Tone.AutoFilter("4n").toDestination().start();
autoFilter.depth.value = 1; // range:0-1
autoFilter.frequency.value = 10; // range:0-1000 or 2000
autoFilter.octaves = 2.6; // range: -10-10

// AutoPanner

// AutoWah

// BitCrusher .connect(crusher)
const crusher = new Tone.BitCrusher(4).toDestination(); // range:1-16, step:1
crusher.bits.value;

// Chebyshev .connect(cheby)
const cheby = new Tone.Chebyshev(50).toDestination(); // range:1-100

// Chorus .connect(chorus)
const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start(); // frequency delayTime depth
chorus.frequency.value = 4; // range: 0-50
chorus.delayTime = 2.5; // range:0-200
chorus.depth = 0.5; // range: 0-1

// Distortion .connect(dist)
const dist = new Tone.Distortion(0.9).toDestination(); // range:0-1
dist.distortion = 0.9;

// FeedbackDelay .connect(feedbackDelay)
const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
feedbackDelay.delayTime.value = 0.25; // range:0-1
feedbackDelay.feedback.value = 0.5; // range:0-1

// Freeverb .connect(freeverb) {X}
// const freeverb = new Tone.Freeverb().toDestination();
// freeverb.dampening = 1000;

// FrequencyShifter .connect(shift)
const shift = new Tone.FrequencyShifter(42).toDestination(); // The incoming signal is shifted by this frequency value
shift.frequency.value = -600; // range:-600-600

// JCReverb .chain(delay, reverb) {X}
// const reverb = new Tone.JCReverb(0.4).toDestination();
// const delay = new Tone.FeedbackDelay(0.5);

// MidSideEffect
// https://tonejs.github.io/docs/14.7.77/MidSideEffect

// Phaser .connect(phaser)
const phaser = new Tone.Phaser({
  frequency: 15, // The speed of the phasing
  octaves: 5, // The octaves of the effect
  baseFrequency: 1000, // The base frequency of the filters
}).toDestination();

phaser.frequency.value; // range:0-70 (choice)
phaser.octaves = 5; // range:0-20 (choice)
phaser.baseFrequency = 1000; // range:0-1000 (choice)

// PingPongDelay .connect(PingPong)
const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
pingPong.delayTime.value = 2; // range:0-2 (choice)
pingPong.feedback.value = 0.2; // range:0-1

// PitchShift
// https://tonejs.github.io/docs/14.7.77/PitchShift

// Reverb .connect(reverb)
const reverb = new Tone.Reverb(1).toDestination(); // seconds - Check implementation
// https://tonejs.github.io/docs/14.7.77/Reverb - you have to wait until
reverb.decay = 1; // range:0-10 (choice)

// StereoWidener
// https://tonejs.github.io/docs/14.7.77/StereoWidener

// Tremolo .connect(tremolo)
const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start(); // frequency (rate), depth
tremolo.frequency.value = 9; // range:0-100 (choice)
tremolo.depth.value = 0.75; // range:0-1

// Vibrato .connect(vibrato)
const vibrato = new Tone.Vibrato(9, 0.9).toDestination(); // frequency, depth
vibrato.frequency.value = 9; // range:0-900 (choice)
vibrato.depth.value; // range:0-1

// .connect(autoFilter).connect(crusher).connect(cheby).connect(chorus).connect(dist).connect(feedbackDelay).connect(shift).connect(phaser).connect(PingPong).connect(reverb).connect(tremolo).connect(vibrato)
// .toDestination()

// vibrato.wet.value = 1

// ------------------------
// Synthesizer
// ------------------------
const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
synth.maxPolyphony = 128;

const oscillator_types = ["sine", "square", "sawtooth", "triangle", "pulse"];

// ------------------------
// Detune
// ------------------------
synth.options.detune = 0; // in cents - 100 cents = 8hz = 1 note - if detune 100, C4 becomes C4#, if detune 200 C4 becomes D4 and so on

// synth.options.detune = 200

let detuneControl = new Nexus.Dial("#detune", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -1000,
  max: 1000,
  step: 1,
  value: 0,
});
detuneControl.colorize("accent", CYAN);
// detuneControl.colorize("fill", GRAY);

detuneControl.on("change", function (v) {
  synth.options.detune = parseFloat(v);
  // console.log(v);
  // console.log(parseFloat(v));
  // console.log(synth.options);
});

// Number
let detuneNum = new Nexus.Number("#detune-num");
detuneNum.link(detuneControl);
detuneNum.colorize("accent", CYAN);
// detuneNum.colorize("fill", GRAY);

// ------------------------
// ADSR Envelope
// ------------------------
// Attack
// Range: 0 to 2
// attackCurve
// The shape of the attack. Can be any of these strings:
// "linear"
// "exponential"
// "sine"
// "cosine"
// "bounce"
// "ripple"
// "step"
synth.options.envelope.attack = 0.01;
synth.options.envelope.attackCurve = "linear";

// Decay
// Range: 0+ to 2
// The shape of the decay either "linear" or "exponential"
synth.options.envelope.decay = 0.01;
synth.options.envelope.decayCurve = "linear";

// Sustain
// Range: 0 to 1
// The percent of the maximum value that the envelope rests at untilthe release is triggered. ()
synth.options.envelope.sustain = 1;

// Release
// releaseCurce
// The shape of the release. Can be any of these strings:
// "linear"
// "exponential"
// "sine"
// "cosine"
// "bounce"
// "ripple"
// "step"
// Range: 0+ to  * seconds
synth.options.envelope.release = 0.5;
synth.options.envelope.releaseCurve = "exponential";

// ------------------------
// Harmonicity
// ------------------------
//  Harmonicity is the ratio between the two voices. A harmonicity of 1 is no change. Harmonicity = 2 means a change of an octave.
// range: 0-30 (choice)
synth.options.harmonicity = 3;

let harmonicityControl = new Nexus.Dial("#harmonicity", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 30,
  step: 0,
  value: 3,
});
harmonicityControl.colorize("accent", CYAN);
// harmonicityControl.colorize("fill", GRAY);

harmonicityControl.on("change", function (v) {
  synth.options.harmonicity = v;
  console.log(synth.options);
});

// Number
let harmonicityNum = new Nexus.Number("#harmonicity-num");
harmonicityNum.link(harmonicityControl);
harmonicityNum.colorize("accent", CYAN);
// harmonicityNum.colorize("fill", GRAY);

// ------------------------
// Modulation
// ------------------------
// partialCount
// partials []
// phase
// type*
synth.options.modulation.type; // sine, square (default), sawtooth,triangle, pulse

// ------------------------
// Modulation Envelope
// ------------------------
// attack
// attackCurve
// decay
// decayCurve
// sustain
// release
// releaseCurve

// ------------------------
// Modulation Index
// ------------------------
// The modulation index is essentially the amound of modulation occuring. It is the ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.
// modulationIndex* (0-300)
synth.options.modulationIndex = 10;

let modulationIndexControl = new Nexus.Dial("#modulation-index", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 300,
  step: 0,
  value: 10,
});
modulationIndexControl.colorize("accent", CYAN);
// modulationIndexControl.colorize("fill", GRAY);

modulationIndexControl.on("change", function (v) {
  // console.log(v);
  synth.options.modulationIndex = v;
});

// Number
let modulationIndexNum = new Nexus.Number("#modulation-index-num");
modulationIndexNum.link(modulationIndexControl);
modulationIndexNum.colorize("accent", CYAN);
// modulationIndexNum.colorize("fill", GRAY);

// ------------------------
// Oscillator
// ------------------------
// partialCount
// partials
// phase
// type*

synth.options.oscillator.type = "sine"; // sine, square, sawtooth,triangle, pulse

// ------------------------
// Portamento
// ------------------------
// synth.options.portamento =10

// ------------------------
// Volume
// ------------------------
// Dial
let volumeControl = new Nexus.Dial("#volume", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -40,
  max: 40,
  step: 0,
  value: -6,
});
volumeControl.colorize("accent", CYAN);
// volumeControl.colorize("fill", GRAY);

volumeControl.on("change", function (v) {
  // console.log(v);
  synth.volume.value = v;
});

// Number
let volumeNum = new Nexus.Number("#volume-num");
volumeNum.link(volumeControl);
volumeNum.colorize("accent", CYAN);
// volumeNum.colorize("fill", GRAY);

// ------------------------
// Synthesizer On-Screen Keyboard Playbility Implementation
// ------------------------
let notes = []; // For polyphonic synths
keyboard.on("change", (note) => {
  if (note.state) {
    synth.triggerAttack(midiToNoteString(note.note));
    notes.push(midiToNoteString(note.note));
  } else {
    synth.triggerRelease(notes); // Polymphinic synths need a note or an array of notes
    notes = notes.filter((e) => e !== midiToNoteString(note.note));
  }
});

/*
// ------------------------
// ENVELOPES
// ------------------------
let envelope1 = new Nexus.Envelope("#envelope1", {
  size: [300, 150],
  noNewPoints: true,
  points: [
    {
      x: 0.1,
      y: 0.4,
    },
    {
      x: 0.35,
      y: 0.6,
    },
    {
      x: 0.65,
      y: 0.2,
    },
    {
      x: 0.9,
      y: 0.4,
    },
  ],
});
envelope1.colorize("accent", CYAN);
envelope1.colorize("fill", GRAY);

let envelope2 = new Nexus.Envelope("#envelope2", {
  size: [300, 150],
  noNewPoints: false,
  points: [
    {
      x: 0.1,
      y: 0.4,
    },
    {
      x: 0.35,
      y: 0.6,
    },
    {
      x: 0.65,
      y: 0.2,
    },
    {
      x: 0.9,
      y: 0.4,
    },
  ],
});
envelope2.colorize("accent", "rgb(3,214,146)");
envelope2.colorize("fill", GRAY);

let envelope3 = new Nexus.Envelope("#envelope3", {
  size: [300, 150],
  noNewPoints: false,
  points: [
    {
      x: 0.1,
      y: 0.4,
    },
    {
      x: 0.35,
      y: 0.6,
    },
    {
      x: 0.65,
      y: 0.2,
    },
    {
      x: 0.9,
      y: 0.4,
    },
  ],
});
envelope3.colorize("accent", "rgb(254,188,44)");
envelope3.colorize("fill", GRAY);

// ------------------------
//TOGGLES
// ------------------------
let toggle1 = new Nexus.Toggle("#toggle1", {
  size: [40, 20],
  state: false,
});
toggle1.colorize("accent", CYAN);
toggle1.colorize("fill", GRAY);

let toggle2 = new Nexus.Toggle("#toggle2", {
  size: [40, 20],
  state: false,
});
toggle2.colorize("accent", "rgb(3,214,146)");
toggle2.colorize("fill", GRAY);

let toggle3 = new Nexus.Toggle("#toggle3", {
  size: [40, 20],
  state: false,
});
toggle3.colorize("accent", "rgb(254,188,44)");
toggle3.colorize("fill", GRAY);

// ------------------------
// DIALS
// ------------------------
let dial1 = new Nexus.Dial("#dial1", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -40,
  max: 40,
  step: 0,
  value: -6,
});
dial1.colorize("accent", CYAN);
dial1.colorize("fill", GRAY);

dial1.on("change", function (v) {
  synth.volume.value = v;
});

let number1 = new Nexus.Number("#number1");
number1.link(dial1);
number1.colorize("accent", CYAN);
number1.colorize("fill", GRAY);

let dial2 = new Nexus.Dial("#dial2", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
dial2.colorize("accent", "rgb(3,214,146)");
dial2.colorize("fill", GRAY);

let number2 = new Nexus.Number("#number2");
number2.link(dial2);
number2.colorize("accent", "rgb(3,214,146)");
number2.colorize("fill", GRAY);

let dial3 = new Nexus.Dial("#dial3", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.75,
});
dial3.colorize("accent", "rgb(254,188,44)");
dial3.colorize("fill", GRAY);

let number3 = new Nexus.Number("#number3");
number3.link(dial3);
number3.colorize("accent", "rgb(254,188,44)");
number3.colorize("fill", GRAY);

// ------------------------
// SLIDERS
// ------------------------
let slider1 = Nexus.Add.Slider("#slider1", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider1.colorize("accent", "rgb(35,178,254)");
slider1.colorize("fill", GRAY);

let slider2 = Nexus.Add.Slider("#slider2", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider2.colorize("accent", "rgb(35,178,254)");
slider2.colorize("fill", GRAY);

let slider3 = Nexus.Add.Slider("#slider3", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider3.colorize("accent", "rgb(3,214,146)");
slider3.colorize("fill", GRAY);

let slider4 = Nexus.Add.Slider("#slider4", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider4.colorize("accent", "rgb(3,214,146)");
slider4.colorize("fill", GRAY);

let slider5 = Nexus.Add.Slider("#slider5", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider5.colorize("accent", "rgb(254,188,44)");
slider5.colorize("fill", GRAY);

let slider6 = Nexus.Add.Slider("#slider6", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider6.colorize("accent", "rgb(254,188,44)");
slider6.colorize("fill", GRAY);

// ------------------------
// POSITIONS
// ------------------------
let position1 = new Nexus.Position("#position1", {
  size: [200, 200],
  mode: "absolute", // "absolute" or "relative"
  x: 0.5, // initial x value
  minX: 0,
  maxX: 1,
  stepX: 0,
  y: 0.5, // initial y value
  minY: 0,
  maxY: 1,
  stepY: 0,
});
position1.colorize("accent", "rgb(35,178,254)");
position1.colorize("fill", GRAY);

let position2 = new Nexus.Position("#position2", {
  size: [200, 200],
  mode: "absolute", // "absolute" or "relative"
  x: 0.5, // initial x value
  minX: 0,
  maxX: 1,
  stepX: 0,
  y: 0.5, // initial y value
  minY: 0,
  maxY: 1,
  stepY: 0,
});
position2.colorize("accent", "rgb(3,214,146)");
position2.colorize("fill", GRAY);

let position3 = new Nexus.Position("#position3", {
  size: [200, 200],
  mode: "absolute", // "absolute" or "relative"
  x: 0.5, // initial x value
  minX: 0,
  maxX: 1,
  stepX: 0,
  y: 0.5, // initial y value
  minY: 0,
  maxY: 1,
  stepY: 0,
});
position3.colorize("accent", "rgb(254,188,44)");
position3.colorize("fill", GRAY);
*/

// ------------------------
// MIDI Implementation
// ------------------------

// Enable WebMidi.js and trigger the onEnabled() function when ready.
WebMidi.enable()
  .then(onEnabled)
  .catch((err) => console.log(err));

function onEnabled() {
  if (WebMidi.inputs.length < 1) {
    midiDisplay.innerHTML += "No device detected.";
  } else {
    WebMidi.inputs.forEach((device, index) => {
      midiDisplay.innerHTML += `${index}: ${device.name} <br>`;
    });
  }

  const mySynth = WebMidi.inputs[1];
  // It uses input 1 by default - make it selectable by user
  // In Linux input 0 is occupied bt Midi Through Port-0
  // const mySynth = WebMidi.getInputByName("TYPE NAME HERE!")

  mySynth.channels[1].addListener("noteon", (e) => {
    synth.triggerAttack(midiToNoteString(e.data[1]));
    // notes.push(midiToNoteString(e.data[1]));
    midiDisplay.innerHTML = `<p style="font-size: 0.9rem; font-weight: 400;">MIDI note played: ${
      e.data[1]
    }<br>
    Note name: ${midiToNoteString(e.data[1])}</p>`;
  });

  mySynth.channels[1].addListener("noteoff", (e) => {
    synth.triggerRelease(midiToNoteString(e.data[1]));
  });
}

// ------------------------
// Oscilloscope
// ------------------------
let oscilloscope = new Nexus.Oscilloscope("#oscilloscope", {
  size: [300, 150],
});
oscilloscope.connect(Tone.getDestination());
oscilloscope.colorize("accent", "rgb(1, 0, 76)");
if (darkMode) {
  oscilloscope.colorize("accent", GRAY);
}
// oscilloscope.colorize("fill", GRAY);

// ------------------------
// Spectrogram
// ------------------------
let spectrogram = new Nexus.Spectrogram("#spectrogram", {
  size: [300, 150],
});
spectrogram.connect(Tone.getDestination());
spectrogram.colorize("accent", "rgb(1, 0, 76)");
if (darkMode) {
  spectrogram.colorize("accent", GRAY);
}
// spectrogram.colorize("fill", GRAY);

// ------------------------
// Meter
// ------------------------
let meter = new Nexus.Meter("#meter", {
  size: [40, 150],
});
meter.connect(Tone.getDestination());
meter.colorize("accent", "rgb(1, 0, 76)");
if (darkMode) {
  meter.colorize("accent", GRAY);
}
// meter.colorize("fill", GRAY);

// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------
// Other
// ------------------------
// Tone.setContext(Nexus.context)
// Nexus.context = Tone.context;
// Simplify letiables

let synthesizerTitle = document.getElementById("synthesizer-title");
let main = document.getElementById("main");

synthesizerTitle.addEventListener("click", showHide);

function showHide() {
  if (main.style.display === "flex") {
    main.style.display = "none";
  } else {
    main.style.display = "flex";
  }
}

let envelope1 = new Nexus.Envelope("#envelope1", {
  size: [300, 150],
  noNewPoints: true,
  points: [
    {
      x: 0.1,
      y: 0.4,
    },
    {
      x: 0.35,
      y: 0.6,
    },
    {
      x: 0.65,
      y: 0.2,
    },
    {
      x: 0.9,
      y: 0.4,
    },
  ],
});
envelope1.colorize("accent", CYAN);
// envelope1.colorize("fill", GRAY);

let position1 = new Nexus.Position("#position1", {
  size: [200, 200],
  mode: "absolute", // "absolute" or "relative"
  x: 0.5, // initial x value
  minX: 0,
  maxX: 1,
  stepX: 0,
  y: 0.5, // initial y value
  minY: 0,
  maxY: 1,
  stepY: 0,
});
position1.colorize("accent", GREEN);
// position1.colorize("fill", GRAY);

let slider1 = Nexus.Add.Slider("#slider1", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider1.colorize("accent", GREEN);
// slider1.colorize("fill", GRAY);

let slider2 = Nexus.Add.Slider("#slider2", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider2.colorize("accent", GREEN);
// slider2.colorize("fill", GRAY);

let slider3 = Nexus.Add.Slider("#slider3", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider3.colorize("accent", GREEN);
// slider3.colorize("fill", GRAY);

let slider4 = Nexus.Add.Slider("#slider4", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider4.colorize("accent", GREEN);
// slider4.colorize("fill", GRAY);

let slider5 = Nexus.Add.Slider("#slider5", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider5.colorize("accent", GREEN);
// slider5.colorize("fill", GRAY);

let slider6 = Nexus.Add.Slider("#slider6", {
  size: [20, 120],
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider6.colorize("accent", GREEN);
// slider6.colorize("fill", GRAY);

let toggle1 = new Nexus.Toggle("#tremolo", {
  size: [40, 20],
  state: false,
});
toggle1.colorize("accent", YELLOW);
// toggle1.colorize("fill", GRAY);

let toggle2 = new Nexus.Toggle("#toggle1", {
  size: [40, 20],
  state: false,
});
toggle2.colorize("accent", YELLOW);
// toggle2.colorize("fill", YELLOW);

var multislider = new Nexus.Multislider("#target", {
  size: [250, 250],
  numberOfSliders: 10,
  min: 0,
  max: 1,
  step: 0,
  candycane: 3,
  values: [0.1, 0.2, 0.4, 0.6, 0.9, 0.4, 0.3, 0.2, 0.7, 0.1],
  smoothing: 0,
  mode: "bar", // 'bar' or 'line'
});

multislider.colorize("accent", YELLOW);
// multislider.colorize("fill", GREEN);
