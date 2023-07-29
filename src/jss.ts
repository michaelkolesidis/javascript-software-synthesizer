/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

// @ts-nocheck

import * as Tone from "tone";
import * as Nexus from "nexusui2";
import { WebMidi } from "webmidi";
import { Color } from "./utils/enums.js";
import "./sass/style.scss";

// ---------------------------------------------------------------------
// Import Elements
// ---------------------------------------------------------------------
import Index from "./elements/index.js";
import SplashScreen from "./elements/splashScreen.js";
import Header from "./elements/header.js";
import Footer from "./elements/footer.js";
import Displays from "./elements/panels/displays.js";
import SynthSection from "./elements/panels/synthSection.js";
import SynthSectionMain from "./elements/panels/synthSectionMain.js";
import SynthSectionAmplitudeEnvelope from "./elements/panels/synthSectionAmplitudeEnvelope.js";
import SynthSectionOscillator from "./elements/panels/synthSectionOscillator.js";
import ModulationSection from "./elements/panels/modulationSection.js";
import ModulationSectionMain from "./elements/panels/modulationSectionMain.js";
import ModulationSectionModulationEnvelope from "./elements/panels/modulationSectionModulationEnvelope.js";
import EffectsSection from "./elements/panels/effectsSection.js";
import SequencerSection from "./elements/panels/sequencerSection.js";
import Menu from "./elements/menu/menu.js";

// ---------------------------------------------------------------------
// Import Functions
// ---------------------------------------------------------------------
import consoleIntro from "./functions/consoleIntro.js";
import midiToNoteString from "./functions/midiToNoteString.js";
import keyMapper from "./functions/keyMapper.js";
import showHide from "./functions/showHide.js";
import invertColors from "./functions/invertColors.js";

// ---------------------------------------------------------------------
// Page (index.html)
// ---------------------------------------------------------------------
const root = document.getElementById("root");
if (root) {
  root.innerHTML = Index();
}

// ---------------------------------------------------------------------
// Splash Screen
// ---------------------------------------------------------------------
SplashScreen();

// ---------------------------------------------------------------------
// Welcome Message in Console
// ---------------------------------------------------------------------
consoleIntro();

// ---------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------
const header = document.getElementById("header");
if (header) {
  header.innerHTML = Header(false);
}

// ---------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------
const footer = document.getElementById("footer");
if (footer) {
  footer.innerHTML = Footer();
}

// ---------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------
const navContent = document.getElementById("nav-content");
if (navContent) {
  navContent.innerHTML = Menu();
}

// ---------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------
Nexus.colors.fill = Color.gray; // For all NexusUI2 components
let darkMode = false;

// ---------------------------------------------------------------------
// Panel Sections
// ---------------------------------------------------------------------
// Displays
const displays = document.getElementById("displays");
if (displays) {
  displays.innerHTML = Displays();
}

// Synth Section
const synthSection = document.getElementById("synth-section");
if (synthSection) {
  synthSection.innerHTML = SynthSection();
}

// Synth Section: Main
const synthSectionMain = document.getElementById("synth-section-main");
if (synthSectionMain) {
  synthSectionMain.innerHTML = SynthSectionMain();
}

// Synth Section: Amplitude Envelope
const amplitudeEnvelopeSection = document.getElementById("adsr-envelope");
if (amplitudeEnvelopeSection) {
  amplitudeEnvelopeSection.innerHTML = SynthSectionAmplitudeEnvelope();
}

// Synth Section: Oscillator
const synthSectionOscillator = document.getElementById("oscillator");
if (synthSectionOscillator) {
  synthSectionOscillator.innerHTML = SynthSectionOscillator();
}

// Modulation Section
const modulationSection = document.getElementById("modulation-section");
if (modulationSection) {
  modulationSection.innerHTML = ModulationSection();
}

// Modulation Section: Main
const modulationSectionMain = document.getElementById(
  "modulation-section-main"
);
if (modulationSectionMain) {
  modulationSectionMain.innerHTML = ModulationSectionMain();
}

// Modulation Section: Modulation Envelope
const modulationSectionEnvelope = document.getElementById(
  "modulation-envelope"
);
if (modulationSectionEnvelope) {
  modulationSectionEnvelope.innerHTML = ModulationSectionModulationEnvelope();
}

// Effects
const effectsSection = document.getElementById("effects");
if (effectsSection) {
  effectsSection.innerHTML = EffectsSection();
}

// Sequencer
const sequencerSection = document.getElementById("sequencer");
if (sequencerSection) {
  sequencerSection.innerHTML = SequencerSection();
}

// ---------------------------------------------------------------------
// MIDI Display
// ---------------------------------------------------------------------
const midiDisplay = document.getElementById("midi-display");

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
if (seqRateInput) {
  seqRateInput.addEventListener("change", () => {
    if (seqRateInput) {
      if (seqRateInput.value > 10) seqRateInput.value = 10;
      if (seqRateInput.value <= 0) seqRateInput.value = 1;
      let rate = seqRateInput.value;

      seq.set({
        playbackRate: parseFloat(rate),
      });
    }
  });
}

// Note value
let noteValue = "16n";

if (noteValueInput) {
  noteValueInput.addEventListener("change", () => {
    if (noteValueInput) {
      if (noteValueInput.value <= 0) noteValueInput.value = "16n";
      noteValue = noteValueInput.value;
    }
  });
}

// Sequence notes input
if (setButton) {
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
}

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
if (playButton) {
  playButton.addEventListener("click", () => Tone.Transport.start());
}
if (stopButton) {
  stopButton.addEventListener("click", () => Tone.Transport.stop());
}

// ---------------------------------------------------------------------
// Oscilloscope
// ---------------------------------------------------------------------
let oscilloscope = new Nexus.Oscilloscope("#oscilloscope", {
  size: [300, 150],
});
oscilloscope.connect(Tone.getDestination());
oscilloscope.colorize("accent", Color.blue);
if (darkMode) {
  oscilloscope.colorize("accent", Color.gray);
}

// ---------------------------------------------------------------------
// Spectrogram
// ---------------------------------------------------------------------
let spectrogram = new Nexus.Spectrogram("#spectrogram", {
  size: [300, 150],
});
spectrogram.connect(Tone.getDestination());
spectrogram.colorize("accent", Color.blue);
if (darkMode) {
  spectrogram.colorize("accent", Color.gray);
}

// ---------------------------------------------------------------------
// Meter
// ---------------------------------------------------------------------
let meter = new Nexus.Meter("#meter", {
  size: [45, 150],
});
meter.connect(Tone.getDestination());
meter.colorize("accent", Color.blue);
if (darkMode) {
  meter.colorize("accent", Color.gray);
}

// ---------------------------------------------------------------------
// Keyboard
// ---------------------------------------------------------------------
if (darkMode) {
  Nexus.colors.accent = Color.gray; // dark mode
  Nexus.colors.dark = Color.gray_dark; // darl mode
  Nexus.colors.light = Color.black; // dark mode
}

let keyboard = new Nexus.Piano("#keyboard", {
  size: [1080, 90],
  mode: "button", // 'button', 'toggle', or 'impulse'
  lowNote: 21,
  highNote: 108,
});
keyboard.colorize("accent", Color.gray_dark); // light mode

// Makes keyboard playble both with right and left click - prevents right click context menu
let keyboardPlaceholder = document.getElementById("keyboard");
if (keyboardPlaceholder) {
  keyboardPlaceholder.addEventListener(
    "contextmenu",
    function (event) {
      event.preventDefault();
    },
    false
  );
}

// ---------------------------------------------------------------------
// Effects
// ---------------------------------------------------------------------
// High-Pass Filter [DEACTIVATED]
// const highPassFilter = new Tone.Filter(20000, "highpass").toDestination();

// Low-Pass Filter [DEACTIVATED]
// const lowPassFilter = new Tone.Filter(3000, "lowpass").toDestination();

// highPassFilter.set({
//   frequency: 20000,
// });

// lowPassFilter.set({
//   frequency: 0,
// });

// let highLowPassFrequency = new Nexus.Position("#high-low-pass-frequency", {
//   size: [180, 180],
//   mode: "absolute", // "absolute" or "relative"
//   x: 0, // initial x value
//   minX: 0,
//   maxX: 20000,
//   stepX: 0,
//   y: 20000, // initial y value
//   minY: 0,
//   maxY: 20000,
//   stepY: 0,
// });
// highLowPassFrequency.colorize("accent", Color.yellow);

// highLowPassFrequency.on("change", function (v) {
//   lowPassFilter.set({
//     frequency: parseInt(v.x),
//   });
//   highPassFilter.set({
//     frequency: parseInt(v.y),
//   });
// });

// AutoFilter .connect(autoFilter)
const autoFilter = new Tone.AutoFilter("4n").toDestination().start();

autoFilter.set({
  depth: 1, // range:0-1
  frequency: 10, // range:0-1000 or 2000
  octaves: 2.6, // range: -10-10
  wet: 0,
});

let autoFilterToggle = new Nexus.Toggle("#auto-filter-toggle", {
  size: [36, 18],
  state: false,
});
autoFilterToggle.colorize("accent", Color.yellow);

autoFilterToggle.on("change", function (v) {
  if (v) {
    autoFilter.set({
      wet: 1,
    });
  } else {
    autoFilter.set({
      wet: 0,
    });
  }
});

// Auto Filter Depth
let autoFilterDepth = new Nexus.Dial("#auto-filter-depth", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 1,
});
autoFilterDepth.colorize("accent", Color.yellow);

autoFilterDepth.on("change", function (v) {
  autoFilter.set({
    depth: v,
  });
});

// Auto Filter Depth Number
let autoFilterDepthNum = new Nexus.Number("#auto-filter-depth-num");
autoFilterDepthNum.link(autoFilterDepth);
autoFilterDepthNum.colorize("accent", Color.yellow);

// Auto Filter Frequency
let autoFilterFrequency = new Nexus.Dial("#auto-filter-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1000,
  step: 0,
  value: 10,
});
autoFilterFrequency.colorize("accent", Color.yellow);

autoFilterFrequency.on("change", function (v) {
  autoFilter.set({
    frequency: v,
  });
});

// Auto Filter Frequency Number
let autoFilterFrequencyNum = new Nexus.Number("#auto-filter-frequency-num");
autoFilterFrequencyNum.link(autoFilterFrequency);
autoFilterFrequencyNum.colorize("accent", Color.yellow);

// Auto Filter Octaves
let autoFilterOctaves = new Nexus.Dial("#auto-filter-octaves", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -10,
  max: 10,
  step: 0,
  value: 2.6,
});
autoFilterOctaves.colorize("accent", Color.yellow);

autoFilterOctaves.on("change", function (v) {
  autoFilter.set({
    octaves: v,
  });
});

// Auto Filter Octaves Number
let autoFilterOctavesNum = new Nexus.Number("#auto-filter-octaves-num");
autoFilterOctavesNum.link(autoFilterOctaves);
autoFilterOctavesNum.colorize("accent", Color.yellow);

// FeedbackDelay .connect(feedbackDelay)
const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();

feedbackDelay.set({
  delayTime: 0.25, // range:0-1
  feedback: 0.5, // range:0-1
  wet: 0,
});

let feedbackDelayToggle = new Nexus.Toggle("#feedback-delay-toggle", {
  size: [36, 18],
  state: false,
});
feedbackDelayToggle.colorize("accent", Color.yellow);

feedbackDelayToggle.on("change", function (v) {
  if (v) {
    feedbackDelay.set({
      wet: 1,
    });
  } else {
    feedbackDelay.set({
      wet: 0,
    });
  }
});

// Feedback Delay Time
let feedbackDelayTime = new Nexus.Dial("#feedback-delay-time", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.25,
});
feedbackDelayTime.colorize("accent", Color.yellow);

feedbackDelayTime.on("change", function (v) {
  feedbackDelay.set({
    delayTime: v,
  });
});

// Feedback Delay Time Number
let feedbackDelayTimeNum = new Nexus.Number("#feedback-delay-time-num");
feedbackDelayTimeNum.link(feedbackDelayTime);
feedbackDelayTimeNum.colorize("accent", Color.yellow);

// Feedback Delay Feedback
let feedbackDelayFeedback = new Nexus.Dial("#feedback-delay-feedback", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
feedbackDelayFeedback.colorize("accent", Color.yellow);

feedbackDelayFeedback.on("change", function (v) {
  feedbackDelay.set({
    feedback: v,
  });
});

// Feedback Delay Time Number
let feedbackDelayFeedbackNum = new Nexus.Number("#feedback-delay-feedback-num");
feedbackDelayFeedbackNum.link(feedbackDelayFeedback);
feedbackDelayFeedbackNum.colorize("accent", Color.yellow);

// PingPongDelay .connect(PingPong)
const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();

pingPong.set({
  delayTime: 2, // range:0-4 (choice)
  feedback: 0.2, // range:0-1
  wet: 0,
});

let pingPongToggle = new Nexus.Toggle("#ping-pong-delay-toggle", {
  size: [36, 18],
  state: false,
});
pingPongToggle.colorize("accent", Color.yellow);

pingPongToggle.on("change", function (v) {
  if (v) {
    pingPong.set({
      wet: 1,
    });
  } else {
    pingPong.set({
      wet: 0,
    });
  }
});

// Ping Pong Delay Time
let pingPongDelayTime = new Nexus.Dial("#ping-pong-delay-time", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 4,
  step: 0,
  value: 1,
});
pingPongDelayTime.colorize("accent", Color.yellow);

pingPongDelayTime.on("change", function (v) {
  pingPong.set({
    delayTime: v,
  });
});

// Ping Pong Delay Time Number
let pingPongDelayTimeNum = new Nexus.Number("#ping-pong-delay-time-num");
pingPongDelayTimeNum.link(pingPongDelayTime);
pingPongDelayTimeNum.colorize("accent", Color.yellow);

// Ping Pong Delay Feedback
let pingPongDelayFeedback = new Nexus.Dial("#ping-pong-delay-feedback", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.2,
});
pingPongDelayFeedback.colorize("accent", Color.yellow);

pingPongDelayFeedback.on("change", function (v) {
  pingPong.set({
    feedback: v,
  });
});

// Ping Pong Delay Time Number
let pingPongDelayFeedbackNum = new Nexus.Number(
  "#ping-pong-delay-feedback-num"
);
pingPongDelayFeedbackNum.link(pingPongDelayFeedback);
pingPongDelayFeedbackNum.colorize("accent", Color.yellow);

// Reverb .connect(reverb)
const reverb = new Tone.Reverb(1).toDestination(); // seconds - Check implementation
// https://tonejs.github.io/docs/14.7.77/Reverb - you have to wait until

reverb.set({
  decay: 1, // range:0-30 (choice)
  wet: 0,
});

let reverbToggle = new Nexus.Toggle("#reverb-toggle", {
  size: [36, 18],
  state: false,
});
reverbToggle.colorize("accent", Color.yellow);

reverbToggle.on("change", function (v) {
  if (v) {
    reverb.set({
      wet: 1,
    });
  } else {
    reverb.set({
      wet: 0,
    });
  }
});

// Reverb Decay
let reverbDecay = new Nexus.Dial("#reverb-decay", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 30,
  step: 0,
  value: 1,
});
reverbDecay.colorize("accent", Color.yellow);

reverbDecay.on("change", function (v) {
  reverb.set({
    decay: v,
  });
});

// Reverb Decay Num
let reverbDecayNum = new Nexus.Number("#reverb-decay-num");
reverbDecayNum.link(reverbDecay);
reverbDecayNum.colorize("accent", Color.yellow);

// Chorus .connect(chorus)
const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();

chorus.set({
  frequency: 4, // range: 0-50
  delayTime: 2.5, // range:0-200
  depth: 0.5, // range: 0-1
  wet: 0,
});

let chorusToggle = new Nexus.Toggle("#chorus-toggle", {
  size: [36, 18],
  state: false,
});
chorusToggle.colorize("accent", Color.yellow);

chorusToggle.on("change", function (v) {
  if (v) {
    chorus.set({
      wet: 1,
    });
  } else {
    chorus.set({
      wet: 0,
    });
  }
});

// Chorus Frequency
let chorusFrequency = new Nexus.Dial("#chorus-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 50,
  step: 0,
  value: 4,
});
chorusFrequency.colorize("accent", Color.yellow);

chorusFrequency.on("change", function (v) {
  chorus.set({
    frequency: v,
  });
});

// Chorus Frequency Number
let chorusFrequencyNum = new Nexus.Number("#chorus-frequency-num");
chorusFrequencyNum.link(chorusFrequency);
chorusFrequencyNum.colorize("accent", Color.yellow);

// Chorus Delay Time
let chorusDelay = new Nexus.Dial("#chorus-delay", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 200,
  step: 0,
  value: 2.5,
});
chorusDelay.colorize("accent", Color.yellow);

chorusDelay.on("change", function (v) {
  chorus.set({
    delayTime: v,
  });
});

// Chorus Delay Time Number
let chorusDelayNum = new Nexus.Number("#chorus-delay-num");
chorusDelayNum.link(chorusDelay);
chorusDelayNum.colorize("accent", Color.yellow);

// Chorus Depth
let chorusDepth = new Nexus.Dial("#chorus-depth", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
chorusDepth.colorize("accent", Color.yellow);

chorusDepth.on("change", function (v) {
  chorus.set({
    depth: v,
  });
});

// Chorus Depth Number
let chorusDepthNum = new Nexus.Number("#chorus-depth-num");
chorusDepthNum.link(chorusDepth);
chorusDepthNum.colorize("accent", Color.yellow);

// Tremolo .connect(tremolo)
const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start(); // frequency (rate), depth

tremolo.set({
  frequency: 9, // range:0-50 (choice)
  depth: 0.75, // range:0-1
  wet: 0,
});

let tremoloToggle = new Nexus.Toggle("#tremolo-toggle", {
  size: [36, 18],
  state: false,
});
tremoloToggle.colorize("accent", Color.yellow);

tremoloToggle.on("change", function (v) {
  if (v) {
    tremolo.set({
      wet: 1,
    });
  } else {
    tremolo.set({
      wet: 0,
    });
  }
});

// Tremolo Frequency
let tremoloFrequency = new Nexus.Dial("#tremolo-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 50,
  step: 1,
  value: 9,
});
tremoloFrequency.colorize("accent", Color.yellow);

tremoloFrequency.on("change", function (v) {
  tremolo.set({
    frequency: v,
  });
});

// Tremolo Frequency Number
let tremoloFrequencyNum = new Nexus.Number("#tremolo-frequency-num");
tremoloFrequencyNum.link(tremoloFrequency);
tremoloFrequencyNum.colorize("accent", Color.yellow);

// Tremolo Depth
let tremoloDepth = new Nexus.Dial("#tremolo-depth", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.75,
});
tremoloDepth.colorize("accent", Color.yellow);

tremoloDepth.on("change", function (v) {
  tremolo.set({
    depth: v,
  });
});

// Tremolo Depth Number
let tremoloDepthNum = new Nexus.Number("#tremolo-depth-num");
tremoloDepthNum.link(tremoloDepth);
tremoloDepthNum.colorize("accent", Color.yellow);

// Vibrato .connect(vibrato)
const vibrato = new Tone.Vibrato(9, 0.9).toDestination(); // frequency, depth

vibrato.set({
  frequency: 9, // range:0-900 (choice)
  depth: 0.75, // range:0-1
  wet: 0,
});

let vibratoToggle = new Nexus.Toggle("#vibrato-toggle", {
  size: [36, 18],
  state: false,
});
vibratoToggle.colorize("accent", Color.yellow);

vibratoToggle.on("change", function (v) {
  if (v) {
    vibrato.set({
      wet: 1,
    });
  } else {
    vibrato.set({
      wet: 0,
    });
  }
});

// Vibrato Frequency
let vibratoFrequency = new Nexus.Dial("#vibrato-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 2000,
  step: 1,
  value: 9,
});
vibratoFrequency.colorize("accent", Color.yellow);

vibratoFrequency.on("change", function (v) {
  vibrato.set({
    frequency: v,
  });
});

// Vibrato Frequency Number
let vibratoFrequencyNum = new Nexus.Number("#vibrato-frequency-num");
vibratoFrequencyNum.link(vibratoFrequency);
vibratoFrequencyNum.colorize("accent", Color.yellow);

// Vibrato Depth
let vibratoDepth = new Nexus.Dial("#vibrato-depth", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.75,
});
vibratoDepth.colorize("accent", Color.yellow);

vibratoDepth.on("change", function (v) {
  vibrato.set({
    depth: v,
  });
});

// Vibrato Depth Number
let vibratoDepthNum = new Nexus.Number("#vibrato-depth-num");
vibratoDepthNum.link(vibratoDepth);
vibratoDepthNum.colorize("accent", Color.yellow);

// Phaser .connect(phaser)
const phaser = new Tone.Phaser({
  frequency: 15, // The speed of the phasing
  octaves: 5, // The octaves of the effect
  baseFrequency: 1000, // The base frequency of the filters
}).toDestination();

phaser.set({
  frequency: 15, // range:0-70 (choice)
  octaves: 5, // range:0-20 (choice)
  baseFrequency: 1000, // range:0-1000 (choice)
  wet: 0,
});

let phaserToggle = new Nexus.Toggle("#phaser-toggle", {
  size: [36, 18],
  state: false,
});
phaserToggle.colorize("accent", Color.yellow);

phaserToggle.on("change", function (v) {
  if (v) {
    phaser.set({
      wet: 1,
    });
  } else {
    phaser.set({
      wet: 0,
    });
  }
});

// Phaser Frequency
let phaserFrequency = new Nexus.Dial("#phaser-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 70,
  step: 0,
  value: 15,
});
phaserFrequency.colorize("accent", Color.yellow);

phaserFrequency.on("change", function (v) {
  phaser.set({
    frequency: v,
  });
});

// Phaser Frequency Num
let phaserFrequencyNum = new Nexus.Number("#phaser-frequency-num");
phaserFrequencyNum.link(phaserFrequency);
phaserFrequencyNum.colorize("accent", Color.yellow);

// Phaser Octaves
let phaserOctaves = new Nexus.Dial("#phaser-octaves", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 20,
  step: 0,
  value: 5,
});
phaserOctaves.colorize("accent", Color.yellow);

phaserOctaves.on("change", function (v) {
  phaser.set({
    octaves: v,
  });
});

// Phaser Octaves Num
let phaserOctavesNum = new Nexus.Number("#phaser-octaves-num");
phaserOctavesNum.link(phaserOctaves);
phaserOctavesNum.colorize("accent", Color.yellow);

// Phaser Base Frequency
let phaserBaseFrequency = new Nexus.Dial("#phaser-base-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 2000,
  step: 0,
  value: 1000,
});
phaserBaseFrequency.colorize("accent", Color.yellow);

phaserBaseFrequency.on("change", function (v) {
  phaser.set({
    baseFrequency: v,
  });
});

// Phaser Base Frequency Num
let phaserBaseFrequencyNum = new Nexus.Number("#phaser-base-frequency-num");
phaserBaseFrequencyNum.link(phaserBaseFrequency);
phaserBaseFrequencyNum.colorize("accent", Color.yellow);

// Distortion .connect(dist)
const dist = new Tone.Distortion(0.9).toDestination();

dist.set({
  distortion: 0.9, // range:0-1
  wet: 0,
});

let distortionToggle = new Nexus.Toggle("#distortion-toggle", {
  size: [36, 18],
  state: false,
});
distortionToggle.colorize("accent", Color.yellow);

distortionToggle.on("change", function (v) {
  if (v) {
    dist.set({
      wet: 1,
    });
  } else {
    dist.set({
      wet: 0,
    });
  }
});

let distortionDistortion = new Nexus.Dial("#distortion-amount", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.9,
});
distortionDistortion.colorize("accent", Color.yellow);

distortionDistortion.on("change", function (v) {
  dist.set({
    distortion: v,
  });
});

// Distortion Number
let distortionDistortionNum = new Nexus.Number("#distortion-amount-num");
distortionDistortionNum.link(distortionDistortion);
distortionDistortionNum.colorize("accent", Color.yellow);

// FrequencyShifter .connect(shift)
const shift = new Tone.FrequencyShifter(42).toDestination(); // The incoming signal is shifted by this frequency value

shift.set({
  frequency: 42, // range:-600-600
  wet: 0,
});

let shiftToggle = new Nexus.Toggle("#freq-shifter-toggle", {
  size: [36, 18],
  state: false,
});
shiftToggle.colorize("accent", Color.yellow);

shiftToggle.on("change", function (v) {
  if (v) {
    shift.set({
      wet: 1,
    });
  } else {
    shift.set({
      wet: 0,
    });
  }
});

// Frequency Shifter Frequency
let frequencyShifterFrequency = new Nexus.Dial("#freq-shifter-frequency", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -600,
  max: 600,
  step: 0,
  value: 42,
});
frequencyShifterFrequency.colorize("accent", Color.yellow);

frequencyShifterFrequency.on("change", function (v) {
  shift.set({
    frequency: v,
  });
});

// Frequency Shifter Frequency Number
let frequencyShifterFrequencyNum = new Nexus.Number(
  "#freq-shifter-frequency-num"
);
frequencyShifterFrequencyNum.link(frequencyShifterFrequency);
frequencyShifterFrequencyNum.colorize("accent", Color.yellow);

// BitCrusher .connect(crusher)
const crusher = new Tone.BitCrusher(7).toDestination(); //
crusher.bits.value;

crusher.set({
  bits: 7, // range:1-16, step:1
  wet: 0,
});

let crusherToggle = new Nexus.Toggle("#bit-crusher-toggle", {
  size: [36, 18],
  state: false,
});
crusherToggle.colorize("accent", Color.yellow);

crusherToggle.on("change", function (v) {
  if (v) {
    crusher.set({
      wet: 1,
    });
  } else {
    crusher.set({
      wet: 0,
    });
  }
});

// Bit Crusher Bits
let bitCrusherBits = new Nexus.Dial("#bit-crusher-bits", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 6,
  max: 10,
  step: 0.01,
  value: 7,
});
bitCrusherBits.colorize("accent", Color.yellow);

bitCrusherBits.on("change", function (v) {
  crusher.set({
    bits: v,
  });
});

// Bit Crusher Bits Number
let bitCrusherBitsNum = new Nexus.Number("#bit-crusher-bits-num");
bitCrusherBitsNum.link(bitCrusherBits);
bitCrusherBitsNum.colorize("accent", Color.yellow);

// Chebyshev .connect(cheby)
const cheby = new Tone.Chebyshev(50).toDestination();

cheby.set({
  order: 51, // range:1-100
  wet: 0,
});

let chebyToggle = new Nexus.Toggle("#chebyshev-toggle", {
  size: [36, 18],
  state: false,
});
chebyToggle.colorize("accent", Color.yellow);

chebyToggle.on("change", function (v) {
  if (v) {
    cheby.set({
      wet: 1,
    });
  } else {
    cheby.set({
      wet: 0,
    });
  }
});

// Chebyshev Order
let chebyshevOrder = new Nexus.Dial("#chebyshev-order", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 1,
  max: 100,
  step: 1,
  value: 51,
});
chebyshevOrder.colorize("accent", Color.yellow);

chebyshevOrder.on("change", function (v) {
  cheby.set({
    order: v,
  });
});

// Chebyshev Order Number
let chebyshevOrderNum = new Nexus.Number("#chebyshev-order-num");
chebyshevOrderNum.link(chebyshevOrder);
chebyshevOrderNum.colorize("accent", Color.yellow);

// ---------------------------------------------------------------------
// Synthesizer
// ---------------------------------------------------------------------
let synth = new Tone.PolySynth(Tone.FMSynth);

synth.set({
  maxPolyphony: 256,
});

synth.toDestination();

// Effects connected in series
synth.chain(
  autoFilter,
  phaser,
  crusher,
  cheby,
  feedbackDelay,
  pingPong,
  reverb,
  chorus,
  tremolo,
  vibrato,
  dist,
  shift,
  Tone.Destination
);

// ---------------------------------------------------------------------
// Volume
// ---------------------------------------------------------------------
// Dial
let volumeControl = new Nexus.Dial("#volume", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -60,
  max: 20,
  step: 0,
  value: -28,
});
volumeControl.colorize("accent", Color.cyan);

volumeControl.on("change", function (v) {
  synth.set({
    volume: v,
  });
});

// Number
let volumeNum = new Nexus.Number("#volume-num", {
  size: [60, 30],
});
volumeNum.link(volumeControl);
volumeNum.colorize("accent", Color.cyan);

// ---------------------------------------------------------------------
// Detune
// ---------------------------------------------------------------------
// In cents - 100 cents = 8hz = 1 note - if detune 100, C4 becomes C4#, if detune 200 C4 becomes D4 and so on
// detune range : -1000-1000 (choice)

// Dial
let detuneControl = new Nexus.Dial("#detune", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -1000,
  max: 1000,
  step: 1,
  value: 0,
});
detuneControl.colorize("accent", Color.cyan);

detuneControl.on("change", function (v) {
  synth.set({
    detune: v,
  });
});

// Number
let detuneNum = new Nexus.Number("#detune-num", {
  size: [60, 30],
});
detuneNum.link(detuneControl);
detuneNum.colorize("accent", Color.cyan);

// ---------------------------------------------------------------------
// Modulation Index
// ---------------------------------------------------------------------
// The modulation index is essentially the amound of modulation occuring. It is the ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.
// modulationIndex range: 0-300 (choice)

let modulationIndexControl = new Nexus.Dial("#modulation-index", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 100,
  step: 1,
  value: 10,
});
modulationIndexControl.colorize("accent", Color.cyan);

modulationIndexControl.on("change", function (v) {
  synth.set({
    modulationIndex: v,
  });
});

// Number;
let modulationIndexNum = new Nexus.Number("#modulation-index-num", {
  size: [60, 30],
});
modulationIndexNum.link(modulationIndexControl);
modulationIndexNum.colorize("accent", Color.cyan);

// ---------------------------------------------------------------------
// Harmonicity
// ---------------------------------------------------------------------
//  Harmonicity is the ratio between the two voices. A harmonicity of 1 is no change. Harmonicity = 2 means a change of an octave.
// range: 0-20 (choice)

let harmonicityControl = new Nexus.Dial("#harmonicity", {
  size: [67, 67],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 20,
  step: 0,
  value: 3,
});
harmonicityControl.colorize("accent", Color.cyan);

harmonicityControl.on("change", function (v) {
  synth.set({
    harmonicity: v,
  });
});

// Number
let harmonicityNum = new Nexus.Number("#harmonicity-num", {
  size: [60, 30],
});
harmonicityNum.link(harmonicityControl);
harmonicityNum.colorize("accent", Color.cyan);

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
  size: [220, 134],
  numberOfSliders: 4,
  min: 0,
  max: 1,
  step: 0,
  candycane: 3,
  values: [0.005, 0.005, 1, 0.1],
  smoothing: 0,
  mode: "bar",
});
amplitudeADSR.colorize("accent", Color.cyan);

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
  size: [117, 27],
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
  size: [117, 27],
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
  size: [117, 27],
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
  size: [378, 22],
  numberOfButtons: 5,
  active: 0,
});
oscillatorTypeSelector.colorize("accent", Color.cyan);

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
  size: [360, 31],
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 10,
  step: 1,
  value: 0,
});
partialCountSelector.colorize("accent", Color.cyan);

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
    size: [360, 72],
    numberOfSliders: v,
    min: 0,
    max: 1,
    step: 0.05,
    candycane: 3,
    values: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    smoothing: 0,
    mode: "bar", // 'bar' or 'line'
  });
  partialsSelector.colorize("accent", Color.cyan);
  partialsSelector.on("change", function (v) {});
});

// partials
let partialsSelector = new Nexus.Multislider("#partials-selector", {
  size: [360, 72],
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
  size: [378, 22],
  numberOfButtons: 5,
  active: 1,
});
modulationTypeSelector.colorize("accent", Color.green);

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
    size: [369, 31],
    mode: "relative", // "absolute" or "relative"
    min: 0,
    max: 10,
    step: 1,
    value: 0,
  }
);
modulationPartialCountSelector.colorize("accent", Color.green);

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
      size: [360, 72],
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
  modulationPartialsSelector.colorize("accent", Color.green);
  modulationPartialsSelector.on("change", function (v) {});
});

// partials
let modulationPartialsSelector = new Nexus.Multislider(
  "#modulation-partials-selector",
  {
    size: [360, 72],
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
  size: [220, 134],
  numberOfSliders: 4,
  min: 0,
  max: 1,
  step: 0,
  candycane: 3,
  values: [0.005, 0.005, 1, 0.1],
  smoothing: 0,
  mode: "bar",
});
modulationADSR.colorize("accent", Color.green);

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
    size: [117, 27],
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
  size: [117, 27],
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
    size: [117, 27],
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
    synth.triggerRelease(note.note); // Polymphonic synths need a note or an array of notes
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
  const keyIndex = keyMapper(event.code, base);
  if (
    keyIndex &&
    keyIndex >= 0 &&
    keyIndex <= 87 &&
    !keyboard.keys[keyIndex]._state.state
  ) {
    keyboard.toggleIndex(keyIndex, true);
  }
});

document.addEventListener("keyup", (event) => {
  const keyIndex = keyMapper(event.code, base);
  if (
    keyIndex &&
    keyIndex >= 0 &&
    keyIndex <= 87 &&
    keyboard.keys[keyIndex]._state.state
  ) {
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
  if (midiDisplay && WebMidi.inputs.length < 1) {
    midiDisplay.innerHTML += "No device detected.";
  } else {
    if (midiDisplay) {
      midiDisplay.innerHTML += `Select MIDI controller:`;
    }
    WebMidi.inputs.forEach((device, index) => {
      if (midiDisplay) {
        midiDisplay.innerHTML += `<p id="${index}" class="midi-selector">${index} : ${device.name}</p>`;
      }
    });
  }

  let midiSelected = false;

  document.querySelectorAll(".midi-selector").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (!midiSelected) {
        setTimeout(function () {
          item.style.color = Color.blue;
          midiDisplay.innerHTML += `<br>MIDI input selected`;
        }, 250);

        let mySynth = WebMidi.inputs[item.id];

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

        item.style.fontWeight = 500;
        midiSelected = true;
      }
    });
  });
}

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

let modulationEnvelopeTitle = document.getElementById(
  "modulation-envelope-title"
);
let modulationEnvelope = document.getElementById("modulation-envelope");

let effectsTitle = document.getElementById("effects-title");
let effectsContent = document.getElementById("effects-content");

let autoFilterTitle = document.getElementById("auto-filter-title");
let autoFilterContent = document.getElementById("auto-filter-content");

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

let phaserTitle = document.getElementById("phaser-title");
let phaserContent = document.getElementById("phaser-content");

let distortionTitle = document.getElementById("distortion-title");
let distortionContent = document.getElementById("distortion-content");

let freqShifterTitle = document.getElementById("freq-shifter-title");
let freqShifterContent = document.getElementById("freq-shifter-content");

let bitCrusherTitle = document.getElementById("bit-crusher-title");
let bitCrusherContent = document.getElementById("bit-crusher-content");

let chebyshevTitle = document.getElementById("chebyshev-title");
let chebyshevContent = document.getElementById("chebyshev-content");

// Synth Section
showHide(synthSectionTitle, synthSectionContent, "flex", "none");
showHide(amplitudeEnvelopeTitle, amplitudeEnvelope, "flex", "none");
showHide(oscillatorTitle, oscillatorSection, "flex", "none");

// Modulation Section
showHide(modulationTitle, modulationContent, "block", "none");
showHide(modulationEnvelopeTitle, modulationEnvelope, "flex", "none");

// Effects Section
showHide(effectsTitle, effectsContent, "grid", "none");
showHide(autoFilterTitle, autoFilterContent, "grid", "none");
showHide(feedbackDelayTitle, feedbackDelayContent, "none", "flex");
showHide(pingPongDelayTitle, pingPongDelayContent, "none", "flex");
showHide(reverbTitle, reverbContent, "none", "flex");
showHide(chorusTitle, chorusContent, "none", "grid");
showHide(tremoloTitle, tremoloContent, "none", "flex");
showHide(vibratoTitle, vibratoContent, "none", "flex");
showHide(phaserTitle, phaserContent, "none", "grid");
showHide(distortionTitle, distortionContent, "none", "flex");
showHide(freqShifterTitle, freqShifterContent, "none", "flex");
showHide(bitCrusherTitle, bitCrusherContent, "none", "flex");
showHide(chebyshevTitle, chebyshevContent, "none", "flex");

// ---------------------------------------------------------------------
// Inverted Colors Mode
// ---------------------------------------------------------------------
invertColors();
