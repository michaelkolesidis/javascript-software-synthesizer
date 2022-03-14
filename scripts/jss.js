/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

// ---------------------------------------------------------------------
// Import Elements
// ---------------------------------------------------------------------
import Header from "./elements/header.js";
import Footer from "./elements/footer.js";
import Displays from "./elements/panels/displays.js";

import SynthSectionMain from "./elements/panels/synthSectionMain.js";
import SynthSectionAmplitudeEnvelope from "./elements/panels/synthSectionAmplitudeEnvelope.js";
import SynthSectionOscillator from "./elements/panels/synthSectionOscillator.js";

import ModulationSectionMain from "./elements/panels/modulationSectionMain.js";
import ModulationSectionModulationEnvelope from "./elements/panels/modulationSectionModulationEnvelope.js";

// ---------------------------------------------------------------------
// Import Functions
// ---------------------------------------------------------------------
import consoleIntro from "./functions/consoleIntro.js";
import midiToNoteString from "./functions/midiToNoteString.js";
import keyMapper from "./functions/keyMapper.js";
import showHide from "./functions/showHide.js";

// ---------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------
const BLACK = "rgb(51, 51, 51)";
const GRAY_DARK = "rgb(180, 180, 180)";
const GRAY = "rgb(240,240,243)";
const BLUE = "rgb(1, 0, 76)";
const CYAN = "rgb(35, 178, 254)";
const GREEN = "rgb(3, 214, 146)";
const YELLOW = "rgb(254, 188, 44)";

Nexus.colors.fill = GRAY; // For all NexusUI components

// ---------------------------------------------------------------------
// Dark Mode
// ---------------------------------------------------------------------
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

// ---------------------------------------------------------------------
// Welcome Message in Console
// ---------------------------------------------------------------------
consoleIntro();

// ---------------------------------------------------------------------
// Index.HTML
// ---------------------------------------------------------------------
// import index from "./elements/index.js";
// const body = document.body; or root div
// root.innerHTML = index();

// ---------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------
const header = document.getElementById("header");
header.innerHTML = Header();

// ---------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------
const footer = document.getElementById("footer");
footer.innerHTML = Footer();

// ---------------------------------------------------------------------
// Panel Sections
// ---------------------------------------------------------------------
// Displays
const displays = document.getElementById("displays");
displays.innerHTML = Displays();

// Synth Section: Main
const synthSectionMain = document.getElementById("synth-section-main");
synthSectionMain.innerHTML = SynthSectionMain();

// Synth Section: Amplitude Envelope
const amplitudeEnvelopeSection = document.getElementById("adsr-envelope");
amplitudeEnvelopeSection.innerHTML = SynthSectionAmplitudeEnvelope();

// Synth Section: Oscillator
const synthSectionOscillator = document.getElementById("oscillator");
synthSectionOscillator.innerHTML = SynthSectionOscillator();

// Modulation Section: Main
const modulationSectionMain = document.getElementById(
  "modulation-section-main"
);
modulationSectionMain.innerHTML = ModulationSectionMain();

// Modulation Section: Modulation Envelope
const modulationSectionEnvelope = document.getElementById(
  "modulation-envelope"
);
modulationSectionEnvelope.innerHTML = ModulationSectionModulationEnvelope();

// Effects

// ---------------------------------------------------------------------
// MIDI Display
// ---------------------------------------------------------------------
const midiDisplay = document.getElementById("midi-display");

// ---------------------------------------------------------------------
// Oscilloscope
// ---------------------------------------------------------------------
let oscilloscope = new Nexus.Oscilloscope("#oscilloscope", {
  size: [300, 150],
});
oscilloscope.connect(Tone.getDestination());
oscilloscope.colorize("accent", BLUE);
if (darkMode) {
  oscilloscope.colorize("accent", GRAY);
}

// ---------------------------------------------------------------------
// Spectrogram
// ---------------------------------------------------------------------
let spectrogram = new Nexus.Spectrogram("#spectrogram", {
  size: [300, 150],
});
spectrogram.connect(Tone.getDestination());
spectrogram.colorize("accent", BLUE);
if (darkMode) {
  spectrogram.colorize("accent", GRAY);
}

// ---------------------------------------------------------------------
// Meter
// ---------------------------------------------------------------------
let meter = new Nexus.Meter("#meter", {
  size: [45, 150],
});
meter.connect(Tone.getDestination());
meter.colorize("accent", BLUE);
if (darkMode) {
  meter.colorize("accent", GRAY);
}

// ---------------------------------------------------------------------
// Keyboard
// ---------------------------------------------------------------------
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

// Keyboard resizing testing
// let keyboardResizeButton = document.createElement("button");
// keyboardResizeButton.innerHTML = "Resize";
// document.querySelector("#keyboard").appendChild(keyboardResizeButton);
// keyboardResizeButton.addEventListener("click", function() {
//   keyboard.resize(800, 50);
// });

// Makes keyboard playble both with right and left click - prevents right click context menu
let keyboardPlaceholder = document.getElementById("keyboard");
keyboardPlaceholder.addEventListener(
  "contextmenu",
  function (event) {
    event.preventDefault();
  },
  false
);

// ---------------------------------------------------------------------
// Effects
// ---------------------------------------------------------------------
// Fi;ter
// frequency, typr


// AutoFilter .connect(autoFilter)
const autoFilter = new Tone.AutoFilter("4n").toDestination().start();
autoFilter.depth.value = 1; // range:0-1
autoFilter.frequency.value = 10; // range:0-1000 or 2000
autoFilter.octaves = 2.6; // range: -10-10

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

// FrequencyShifter .connect(shift)
const shift = new Tone.FrequencyShifter(42).toDestination(); // The incoming signal is shifted by this frequency value
shift.frequency.value = -600; // range:-600-600

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

// Reverb .connect(reverb)
const reverb = new Tone.Reverb(1).toDestination(); // seconds - Check implementation
// https://tonejs.github.io/docs/14.7.77/Reverb - you have to wait until
reverb.decay = 1; // range:0-10 (choice)

// Tremolo .connect(tremolo)
const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start(); // frequency (rate), depth
tremolo.frequency.value = 9; // range:0-100 (choice)
tremolo.depth.value = 0.75; // range:0-1

// Vibrato .connect(vibrato)
const vibrato = new Tone.Vibrato(9, 0.9).toDestination(); // frequency, depth
vibrato.frequency.value = 9; // range:0-900 (choice)
vibrato.depth.value; // range:0-1
// vibrato.wet.value = 1

// .connect(autoFilter).connect(crusher).connect(cheby).connect(chorus).connect(dist).connect(feedbackDelay).connect(shift).connect(phaser).connect(PingPong).connect(reverb).connect(tremolo).connect(vibrato)
// .toDestination()

// ---------------------------------------------------------------------
// Synthesizer
// ---------------------------------------------------------------------
let synth = new Tone.PolySynth(Tone.FMSynth).toDestination();

synth.set({
  maxPolyphony: 256,
});

// const lfo = new Tone.LFO("4n", 8000, 4000000).start().toDestination();
// const autoFilter = new Tone.AutoFilter("4n").toDestination().start();
// const oscillator = new Tone.Oscillator().toDestination().start();

// ---------------------------------------------------------------------
// Volume
// ---------------------------------------------------------------------
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

volumeControl.on("change", function (v) {
  synth.set({
    volume: v,
  });
});

// Number
let volumeNum = new Nexus.Number("#volume-num");
volumeNum.link(volumeControl);
volumeNum.colorize("accent", CYAN);

// ---------------------------------------------------------------------
// Detune
// ---------------------------------------------------------------------
// In cents - 100 cents = 8hz = 1 note - if detune 100, C4 becomes C4#, if detune 200 C4 becomes D4 and so on
// detune range : -1000-1000 (choice)

// Dial
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

detuneControl.on("change", function (v) {
  synth.set({
    detune: v,
  });
});

// Number
let detuneNum = new Nexus.Number("#detune-num");
detuneNum.link(detuneControl);
detuneNum.colorize("accent", CYAN);

// ---------------------------------------------------------------------
// Modulation Index
// ---------------------------------------------------------------------
// The modulation index is essentially the amound of modulation occuring. It is the ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.
// modulationIndex range: 0-300 (choice)

let modulationIndexControl = new Nexus.Dial("#modulation-index", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 100,
  step: 1,
  value: 10,
});
modulationIndexControl.colorize("accent", CYAN);
// modulationIndexControl.colorize("fill", GRAY);

modulationIndexControl.on("change", function (v) {
  synth.set({
    modulationIndex: v,
  });
});

// Number;
let modulationIndexNum = new Nexus.Number("#modulation-index-num");
modulationIndexNum.link(modulationIndexControl);
modulationIndexNum.colorize("accent", CYAN);
modulationIndexNum.colorize("fill", GRAY);

// ---------------------------------------------------------------------
// Harmonicity
// ---------------------------------------------------------------------
//  Harmonicity is the ratio between the two voices. A harmonicity of 1 is no change. Harmonicity = 2 means a change of an octave.
// range: 0-20 (choice)

let harmonicityControl = new Nexus.Dial("#harmonicity", {
  size: [75, 75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 20,
  step: 0,
  value: 3,
});
harmonicityControl.colorize("accent", CYAN);

harmonicityControl.on("change", function (v) {
  synth.set({
    harmonicity: v,
  });
});

// Number
let harmonicityNum = new Nexus.Number("#harmonicity-num");
harmonicityNum.link(harmonicityControl);
harmonicityNum.colorize("accent", CYAN);

// ---------------------------------------------------------------------
// ADSR Envelope
// ---------------------------------------------------------------------
// https://tonejs.github.io/docs/Envelope.html

//          /\
//         /  \
//        /    \
//       /      \
//      /        \___________
//     /                     \
//    /                       \
//   /                         \
//  /                           \

// Attack
// Range: 0 to 2
// attackCurve
// defaults: 0.01 linear

// Decay
// Range: 0+ to 2
// decayCurve
// defaults: 0.01 linear

// Sustain
// Range: 0 to 1
// The percent of the maximum value that the envelope rests at untilthe release is triggered. ()
// default: 1

// Release
// Range: 0+ to  * seconds
// releaseCurve
// defaults: 0.5 linear
// synth.options.envelope.release = 0.5;

let amplitudeADSR = new Nexus.Multislider("#amplitude-adsr", {
  size: [245, 149],
  numberOfSliders: 4,
  min: 0,
  max: 1,
  step: 0,
  candycane: 3,
  values: [0.005, 0.005, 1, 0.1],
  smoothing: 0,
  mode: "bar",
});
amplitudeADSR.colorize("accent", CYAN);

amplitudeADSR.on("change", function (v) {
  synth.set({
    envelope: {
      attack: Nexus.scale(v[0], 0, 1, 0, 2),
      decay: Nexus.scale(v[1], 0, 1, 0, 2),
      sustain: v[2],
      release: Nexus.scale(v[3], 0, 1, 0, 5),
    },
  });
});

let attackReleaseOptions = [
  "linear",
  "exponential",
  "sine",
  "cosine",
  "bounce",
  "ripple",
  "step",
];
let decayOptions = ["linear", "exponential"];

// Attack Curve
let attackCurveSelector = new Nexus.Select("#attack-curve", {
  size: [130, 30],
  options: attackReleaseOptions,
});

attackCurveSelector.on("change", function (v) {
  synth.set({
    envelope: {
      attackCurve: v.value,
    },
  });
});

// Decay Curve
let decayCurveSelector = new Nexus.Select("#decay-curve", {
  size: [130, 30],
  options: decayOptions,
});

decayCurveSelector.on("change", function (v) {
  synth.set({
    envelope: {
      decayCurve: v.value,
    },
  });
});

// Release Curve
let releaseCurveSelector = new Nexus.Select("#release-curve", {
  size: [130, 30],
  options: attackReleaseOptions,
});

releaseCurveSelector.on("change", function (v) {
  synth.set({
    envelope: {
      releaseCurve: v.value,
    },
  });
});

// ---------------------------------------------------------------------
// Oscillator
// ---------------------------------------------------------------------
// Type
const oscillatorTypes = [
  "sine",
  "square",
  "sawtooth",
  "triangle",
  "pulse",
  "custom",
];

let oscillatorType = oscillatorTypes[0];

let oscillatorTypeSelector = new Nexus.RadioButton("#oscillator-type", {
  size: [420, 25],
  numberOfButtons: 5,
  active: 0,
});
oscillatorTypeSelector.colorize("accent", CYAN);

oscillatorTypeSelector.on("change", function (v) {
  synth.set({
    oscillator: {
      type: oscillatorTypes[v],
    },
  });
  oscillatorType = oscillatorTypes[v];
});

// partialCount
let partialCountSelector = new Nexus.Slider("#partial-count", {
  size: [400, 35],
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 10,
  step: 1,
  value: 0,
});
partialCountSelector.colorize("accent", CYAN);

partialCountSelector.on("change", function (v) {
  if (oscillatorType !== "pulse") {
    if (v >= 1) {
      synth.set({
        oscillator: {
          // partialCount: v,
          type: oscillatorType + `${v}`,
        },
      });
    } else {
      synth.set({
        oscillator: {
          // partialCount: v,
          type: oscillatorType,
        },
      });
    }
  }

  partialsSelector.destroy();
  partialsSelector = new Nexus.Multislider("#partials-selector", {
    size: [400, 80],
    numberOfSliders: v,
    min: 0,
    max: 1,
    step: 0.05,
    candycane: 3,
    values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    smoothing: 0,
    mode: "bar", // 'bar' or 'line'
  });
  partialsSelector.colorize("accent", CYAN);
  partialsSelector.on("change", function (v) {});
});

// partials
let partialsSelector = new Nexus.Multislider("#partials-selector", {
  size: [400, 80],
  numberOfSliders: 0,
  min: 0,
  max: 1,
  step: 0.05,
  candycane: 3,
  values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
  smoothing: 0,
  mode: "bar", // 'bar' or 'line'
});

partialsSelector.on("change", function (v) {
  synth.set({
    oscillator: {
      partials: [v],
    },
  });
});

// ---------------------------------------------------------------------
// Modulation
// ---------------------------------------------------------------------
// Type
const modulationTypes = [
  "sine",
  "square",
  "sawtooth",
  "triangle",
  "pulse",
  "custom",
];

let modulationType = modulationTypes[1];

let modulationTypeSelector = new Nexus.RadioButton("#modulation-type", {
  size: [400, 25],
  numberOfButtons: 5,
  active: 1,
});
modulationTypeSelector.colorize("accent", GREEN);

modulationTypeSelector.on("change", function (v) {
  synth.set({
    modulation: {
      type: modulationTypes[v],
    },
  });
  modulationType = modulationTypes[v];
});

// partialCount
let modulationPartialCountSelector = new Nexus.Slider(
  "#modulation-partial-count",
  {
    size: [400, 35],
    mode: "relative", // "absolute" or "relative"
    min: 0,
    max: 10,
    step: 1,
    value: 0,
  }
);
modulationPartialCountSelector.colorize("accent", GREEN);

modulationPartialCountSelector.on("change", function (v) {
  if (modulationType !== "pulse") {
    if (v >= 1) {
      synth.set({
        modulation: {
          // partialCount: v,
          type: modulationType + `${v}`,
        },
      });
    } else {
      synth.set({
        modulation: {
          // partialCount: v,
          type: modulationType,
        },
      });
    }
  }

  modulationPartialsSelector.destroy();
  modulationPartialsSelector = new Nexus.Multislider(
    "#modulation-partials-selector",
    {
      size: [400, 80],
      numberOfSliders: v,
      min: 0,
      max: 1,
      step: 0.05,
      candycane: 3,
      values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
      smoothing: 0,
      mode: "bar", // 'bar' or 'line'
    }
  );
  modulationPartialsSelector.colorize("accent", GREEN);
  modulationPartialsSelector.on("change", function (v) {});
});

// partials
let modulationPartialsSelector = new Nexus.Multislider(
  "#modulation-partials-selector",
  {
    size: [400, 80],
    numberOfSliders: 0,
    min: 0,
    max: 1,
    step: 0.05,
    candycane: 3,
    values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    smoothing: 0,
    mode: "bar", // 'bar' or 'line'
  }
);

modulationPartialsSelector.on("change", function (v) {
  synth.set({
    modulation: {
      partials: [v],
    },
  });
});

// ---------------------------------------------------------------------
// Modulation Envelope
// ---------------------------------------------------------------------
// attack
// attackCurve
// decay
// decayCurve
// sustain
// release
// releaseCurve

let modulationADSR = new Nexus.Multislider("#modulation-adsr", {
  size: [245, 149],
  numberOfSliders: 4,
  min: 0,
  max: 1,
  step: 0,
  candycane: 3,
  values: [0.005, 0.005, 1, 0.1],
  smoothing: 0,
  mode: "bar",
});
modulationADSR.colorize("accent", GREEN);

modulationADSR.on("change", function (v) {
  synth.set({
    modulationEnvelope: {
      attack: Nexus.scale(v[0], 0, 1, 0, 2),
      decay: Nexus.scale(v[1], 0, 1, 0, 2),
      sustain: v[2],
      release: Nexus.scale(v[3], 0, 1, 0, 5),
    },
  });
});

// Modulation Attack Curve
let modulationAttackCurveSelector = new Nexus.Select(
  "#modulation-attack-curve",
  {
    size: [130, 30],
    options: attackReleaseOptions,
  }
);

modulationAttackCurveSelector.on("change", function (v) {
  synth.set({
    modulationEnvelope: {
      attackCurve: v.value,
    },
  });
});

// Modulation Decay Curve
let modulationDecayCurveSelector = new Nexus.Select("#modulation-decay-curve", {
  size: [130, 30],
  options: decayOptions,
});

modulationDecayCurveSelector.on("change", function (v) {
  synth.set({
    modulationEnvelope: {
      decayCurve: v.value,
    },
  });
});

// Modulation Release Curve
let modulationReleaseCurveSelector = new Nexus.Select(
  "#modulation-release-curve",
  {
    size: [130, 30],
    options: attackReleaseOptions,
  }
);

modulationReleaseCurveSelector.on("change", function (v) {
  synth.set({
    modulationEnvelope: {
      releaseCurve: v.value,
    },
  });
});

// ---------------------------------------------------------------------
// Synthesizer On-Screen Keyboard Playbility Implementation
// ---------------------------------------------------------------------
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

// ---------------------------------------------------------------------
// Computer Keyboard Playbility Implementation
// ---------------------------------------------------------------------
let base = 39; // Middle C / C4

document.addEventListener("keydown", (event) => {
  if (event.target === seqInput) {
    return;
  }
  const keyIndex = keyMapper(event.key, base);
  if (
    keyIndex >= 0 &&
    keyIndex <= 87 &&
    !keyboard.keys[keyIndex]._state.state
  ) {
    keyboard.toggleIndex(keyIndex, true);
  }
});

document.addEventListener("keyup", (event) => {
  const keyIndex = keyMapper(event.key, base);
  if (keyIndex >= 0 && keyIndex <= 87 && keyboard.keys[keyIndex]._state.state) {
    keyboard.toggleIndex(keyIndex, false);
  }
});

document.addEventListener("keydown", octaveSwitch);

function octaveSwitch(e) {
  if (e.code == "KeyZ") {
    base -= 12; // One octave down
  } else if (e.code == "KeyX") {
    base += 12; // One octave up
  }
}

// ---------------------------------------------------------------------
// MIDI Implementation
// ---------------------------------------------------------------------

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

// ---------------------------------------------------------------------
// Sequencer
// ---------------------------------------------------------------------
// Inputs and Buttons
let seqRateInput = document.getElementById("seq-rate");
let noteValueInput = document.getElementById("note-value");
let seqInput = document.getElementById("seq-input");
let setButton = document.getElementById("seq-set");
let playButton = document.getElementById("seq-play");
let stopButton = document.getElementById("seq-stop");

// Sequencer rate (tempo)
seqRateInput.addEventListener("change", () => {
  if (seqRateInput.value > 2) seqRateInput.value = 2;
  if (seqRateInput.value <= 0) seqRateInput.value = 1;
  let rate = seqRateInput.value;

  seq.set({
    playbackRate: parseFloat(rate),
  });
});

// Note value
let noteValue = "16n";

noteValueInput.addEventListener("change", () => {
  if (noteValueInput.value <= 0) noteValueInput.value = "16n";
  noteValue = noteValueInput.value;
});

// Sequence notes input
setButton.addEventListener("click", () => {
  let seqNotesInput;
  if (seqInput.value === "funky town" || seqInput.value === "Funky Town") {
    seqNotesInput = funkyTown;
  } else if (
    seqInput.value === "i feel love" ||
    seqInput.value === "I Feel Love"
  ) {
    seqNotesInput = feelLove;
  } else if (seqInput.value === "default") {
    seqNotesInput = seqNotes;
  } else {
    seqNotesInput = JSON.parse("[" + seqInput.value + "]");
  }

  seq.set({
    events: seqNotesInput,
  });
});

// Sequence demos
let seqNotes = ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]];
let funkyTown = ["C4", "C4", "Bb3", "C4", "G3", "G3", "C4", "F4", "E4", "C4"];
let feelLove = ["C2", "C3", "C2", "C3", "G1", "G2", "Bb1", "Bb2"];
// let feelLoveAlt = ["G3", "G3", "D3", "F3"];

// Sequence
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, noteValue, time);
  // subdivisions are given as subarrays
}, seqNotes).start(0);

// Sequence play / stop
playButton.addEventListener("click", () => Tone.Transport.start());
stopButton.addEventListener("click", () => Tone.Transport.stop());

// ---------------------------------------------------------------------
// Show/Hide Section Toggle
// ---------------------------------------------------------------------
let synthSectionTitle = document.getElementById("synth-title");
let synthSectionContent = document.getElementById("synth-section-content");

let amplitudeEnvelopeTitle = document.getElementById("adsr-envelope-title");
let amplitudeEnvelope = document.getElementById("adsr-envelope");

let oscillatorTitle = document.getElementById("oscillator-title");
let oscillatorSection = document.getElementById("oscillator");

let modulationTitle = document.getElementById("modulation-title");
let modulationContent = document.getElementById("modulation-content");

let modulationEnvelopeTitle = document.getElementById("modulation-envelope-title");
let modulationEnvelope = document.getElementById("modulation-envelope");

let effectsTitle = document.getElementById("effects-title");
let effectsContent = document.getElementById("effects-content");

let filtersTitle = document.getElementById("filters-title");
let filtersContent = document.getElementById("filters-content");

let filter1Title = document.getElementById("filter-1-title");
let filter1Content = document.getElementById("filter-1-content");


let filter2Title = document.getElementById("filter-2-title");
let filter2Content = document.getElementById("filter-2-content");


let autoFilterTitle = document.getElementById("auto-filter-title");
let autoFilterContent = document.getElementById("auto-filter-content");


let delayTitle = document.getElementById("delay-title");
let delayContent = document.getElementById("delay-content");


let feedbackDelayTitle = document.getElementById("feedback-delay-title");
let feedbackDelayContent = document.getElementById("feedback-delay-content");


let pingPongDelayTitle = document.getElementById("ping-pong-delay-title");
let pingPongDelayContent = document.getElementById("ping-pong-delay-content");


let chorusTitle = document.getElementById("chorus-title");
let chorusContent = document.getElementById("chorus-content");


let reverbTitle = document.getElementById("reverb-title");
let reverbContent = document.getElementById("reverb-content");


let tremoloTitle = document.getElementById("tremolo-title");
let tremoloContent = document.getElementById("tremolo-content");


let vibratoTitle = document.getElementById("vibrato-title");
let vibratoContent = document.getElementById("vibrato-content");


let distortionTitle = document.getElementById("distortion-title");
let distortionContent = document.getElementById("distortion-content");


let freqShifterTitle = document.getElementById("freq-shifter-title");
let freqShifterContent = document.getElementById("freq-shifter-content");


let bitCrusherTitle = document.getElementById("bit-crusher-title");
let bitCrusherContent = document.getElementById("bit-crusher-content");


let chebyshevTitle = document.getElementById("chebyshev-title");
let chebyshevContent = document.getElementById("chebyshev-content");

// Synth Section
showHide(synthSectionTitle, synthSectionContent, "flex");
showHide(amplitudeEnvelopeTitle, amplitudeEnvelope, "flex");
showHide(oscillatorTitle, oscillatorSection, "flex");

// Modulation Section
showHide(modulationTitle, modulationContent, "block");
showHide(modulationEnvelopeTitle, modulationEnvelope, "flex");

// Effects Section
showHide(effectsTitle, effectsContent, "block");
showHide(filtersTitle, filtersContent, );
showHide(filter1Title, filter1Content, );
showHide(filter2Title, filter2Content, );
showHide(autoFilterTitle, autoFilterContent, );
showHide(delayTitle, delayContent, );
showHide(feedbackDelayTitle, feedbackDelayContent, );
showHide(pingPongDelayTitle, pingPongDelayContent, );
showHide(chorusTitle, chorusContent, );
showHide(reverbTitle, reverbContent, );
showHide(tremoloTitle, tremoloContent, );
showHide(vibratoTitle, vibratoContent, );
showHide(distortionTitle, distortionContent, );
showHide(freqShifterTitle, freqShifterContent, );
showHide(bitCrusherTitle, bitCrusherContent, );
showHide(chebyshevTitle, chebyshevContent, );

// ---------------------------------------------------------------------
// Recorder
// ---------------------------------------------------------------------
// https://tonejs.github.io/docs/14.7.77/Recorder

// let recButton = document.getElementById("rec");
// let stopRecButton = document.getElementById("rec-stop");

// const recorder = new Tone.Recorder();

// recButton.addEventListener("click", function () {
//   // start recording
//   recorder.start();
//   setTimeout(async () => {
//     // the recorded audio is returned as a blob
//     const recording = await recorder.stop();
//     // download the recording by creating an anchor element and blob url
//     const url = URL.createObjectURL(recording);
//     const anchor = document.createElement("a");
//     anchor.download = "recording.webm";
//     anchor.href = url;
//     anchor.click();
//   }, 4000);
// });

// stopRecButton.addEventListener("click", function () {
//   const recording = recorder.stop();
//   // download the recording by creating an anchor element and blob url
//   const url = URL.createObjectURL(recording);
//   const anchor = document.createElement("a");
//   anchor.download = "recording.webm";
//   anchor.href = url;
//   anchor.click();
// });

// wait for the notes to end and stop the recording

// wait for the notes to end and stop the recording
// setTimeout(async () => {
//   // the recorded audio is returned as a blob
//   const recording = await recorder.stop();
//   // download the recording by creating an anchor element and blob url
//   const url = URL.createObjectURL(recording);
//   const anchor = document.createElement("a");
//   anchor.download = "recording.webm";
//   anchor.href = url;
//   anchor.click();
// }, 4000);

// ---------------------------------------------------------------------
// Presets
// --------------------------------------------------------------------
// Presets functionality will be implemented here
