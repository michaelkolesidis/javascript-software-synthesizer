/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

// Nexus.colors.accent = "rgb(180, 180, 180)";
import Header from "./header.js"
import midiToNoteString from "./midiToNoteString.js"

console.log(Header)

// KEYBOARD
let keyboard = new Nexus.Piano("#keyboard", {
  size: [1200, 100],
  mode: "button", // 'button', 'toggle', or 'impulse'
  lowNote: 21,
  highNote: 108,
});
keyboard.colorize("accent", "rgb(180, 180, 180)");

let intViewportWidth = window.innerWidth;

// SYNTH

// const Tone = require('Tone');
// const gain = new Tone.Gain(0.5).toMaster();
// let synth = new Tone.Synth().connect(gain);
// export default synth;

const synth = new Tone.Synth().toDestination();
// synth.triggerAttack('C4');

// const triggerKeyPress = note => {
//   synth.triggerAttackRelease(note, '8n')
// }





keyboard.on('change', (note) => {
  if (note.state) {
    synth.triggerAttack(midiToNoteString(note.note));
    console.log(midiToNoteString(note.note))
  } else {
    synth.triggerRelease();
  }


  // let note = event.note, on = event.state
  // if(on && note === 72) triggerKeyPress('C5')  


})

// ENVELOPES
var envelope1 = new Nexus.Envelope('#envelope1',{
  'size': [300,150],
  'noNewPoints': false,
  'points': [
    {
      x: 0.1,
      y: 0.4
    },
    {
      x: 0.35,
      y: 0.6
    },
    {
      x: 0.65,
      y: 0.2
    },
    {
      x: 0.9,
      y: 0.4
    },
  ]
})
envelope1.colorize("accent", "rgb(35,178,254)");
envelope1.colorize("fill", "rgb(230, 230, 230)");

var envelope2 = new Nexus.Envelope('#envelope2',{
  'size': [300,150],
  'noNewPoints': false,
  'points': [
    {
      x: 0.1,
      y: 0.4
    },
    {
      x: 0.35,
      y: 0.6
    },
    {
      x: 0.65,
      y: 0.2
    },
    {
      x: 0.9,
      y: 0.4
    },
  ]
})
envelope2.colorize("accent", "rgb(3,214,146)");
envelope2.colorize("fill", "rgb(230, 230, 230)");

var envelope3 = new Nexus.Envelope('#envelope3',{
  'size': [300,150],
  'noNewPoints': false,
  'points': [
    {
      x: 0.1,
      y: 0.4
    },
    {
      x: 0.35,
      y: 0.6
    },
    {
      x: 0.65,
      y: 0.2
    },
    {
      x: 0.9,
      y: 0.4
    },
  ]
})
envelope3.colorize("accent", "rgb(254,188,44)");
envelope3.colorize("fill", "rgb(230, 230, 230)");

//TOGGLES
var toggle1 = new Nexus.Toggle("#toggle1", {
  size: [40, 20],
  state: false,
});
toggle1.colorize("accent", "rgb(35,178,254)");
toggle1.colorize("fill", "rgb(230, 230, 230)");

var toggle2 = new Nexus.Toggle("#toggle2", {
  size: [40, 20],
  state: false,
});
toggle2.colorize("accent", "rgb(3,214,146)");
toggle2.colorize("fill", "rgb(230, 230, 230)");

var toggle3 = new Nexus.Toggle("#toggle3", {
  size: [40, 20],
  state: false,
});
toggle3.colorize("accent", "rgb(254,188,44)");
toggle3.colorize("fill", "rgb(230, 230, 230)");

// DIALS
var dial1 = new Nexus.Dial("#dial1", {
    'size': [75,75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: -40,
  max: 40,
  step: 0,
  value: -6,
});
dial1.colorize("accent", "rgb(35,178,254)");
dial1.colorize("fill", "rgb(230, 230, 230)");


dial1.on('change',function(v) {
  synth.volume.value = v;
});


var number1 = new Nexus.Number("#number1");
number1.link(dial1);
number1.colorize("accent", "rgb(35,178,254)");
number1.colorize("fill", "rgb(230, 230, 230)");

var dial2 = new Nexus.Dial("#dial2", {
    'size': [75,75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
dial2.colorize("accent", "rgb(3,214,146)");
dial2.colorize("fill", "rgb(230, 230, 230)");

var number2 = new Nexus.Number("#number2");
number2.link(dial2);
number2.colorize("accent", "rgb(3,214,146)");
number2.colorize("fill", "rgb(230, 230, 230)");

var dial3 = new Nexus.Dial("#dial3", {
    'size': [75,75],
  interaction: "vertical", // "radial", "vertical", or "horizontal"
  mode: "relative", // "absolute" or "relative"
  min: 0,
  max: 1,
  step: 0,
  value: 0.75,
});
dial3.colorize("accent", "rgb(254,188,44)");
dial3.colorize("fill", "rgb(230, 230, 230)");

var number3 = new Nexus.Number("#number3");
number3.link(dial3);
number3.colorize("accent", "rgb(254,188,44)");
number3.colorize("fill", "rgb(230, 230, 230)");

// SLIDERS
let slider1 = Nexus.Add.Slider("#slider1", {
    'size': [20,120],   min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider1.colorize("accent", "rgb(35,178,254)");
slider1.colorize("fill", "rgb(230, 230, 230)");

let slider2 = Nexus.Add.Slider("#slider2", {
    'size': [20,120],   min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider2.colorize("accent", "rgb(35,178,254)");
slider2.colorize("fill", "rgb(230, 230, 230)");

let slider3 = Nexus.Add.Slider("#slider3", {
    'size': [20,120],   min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider3.colorize("accent", "rgb(3,214,146)");
slider3.colorize("fill", "rgb(230, 230, 230)");

let slider4 = Nexus.Add.Slider("#slider4", {
    'size': [20,120],   min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider4.colorize("accent", "rgb(3,214,146)");
slider4.colorize("fill", "rgb(230, 230, 230)");

let slider5 = Nexus.Add.Slider("#slider5", {
    'size': [20,120],  min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider5.colorize("accent", "rgb(254,188,44)");
slider5.colorize("fill", "rgb(230, 230, 230)");

let slider6 = Nexus.Add.Slider("#slider6", {
    'size': [20,120],   min: 0,
  max: 1,
  step: 0,
  value: 0.5,
});
slider6.colorize("accent", "rgb(254,188,44)");
slider6.colorize("fill", "rgb(230, 230, 230)");

// POSITIONS
var position1 = new Nexus.Position('#position1',{
    'size': [200,200],
    'mode': 'absolute',  // "absolute" or "relative"
    'x': 0.5,  // initial x value
    'minX': 0,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,  // initial y value
    'minY': 0,
    'maxY': 1,
    'stepY': 0
  })
  position1.colorize("accent", "rgb(35,178,254)");
position1.colorize("fill", "rgb(230, 230, 230)");

  var position2 = new Nexus.Position('#position2',{
    'size': [200,200],
    'mode': 'absolute',  // "absolute" or "relative"
    'x': 0.5,  // initial x value
    'minX': 0,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,  // initial y value
    'minY': 0,
    'maxY': 1,
    'stepY': 0
  })
  position2.colorize("accent", "rgb(3,214,146)");
  position2.colorize("fill", "rgb(230, 230, 230)");

  var position3 = new Nexus.Position('#position3',{
    'size': [200,200],
    'mode': 'absolute',  // "absolute" or "relative"
    'x': 0.5,  // initial x value
    'minX': 0,
    'maxX': 1,
    'stepX': 0,
    'y': 0.5,  // initial y value
    'minY': 0,
    'maxY': 1,
    'stepY': 0
  })
  position3.colorize("accent", "rgb(254,188,44)");
  position3.colorize("fill", "rgb(230, 230, 230)");


// RESIZE KEYBOARD

// window.addEventListener("resize", function () {
//   console.log("RESIZED");
//   intViewportWidth = window.innerWidth;
//   resize();
// });

// let resized = false;

// function resize() {
//   if (intViewportWidth < 1254 && !resized) {
//     keyboard.destroy();
//     let keyboard_small = new Nexus.Piano("#keyboard", {
//       size: [800, 100],
//       mode: "button", // 'button', 'toggle', or 'impulse'
//       lowNote: 36,
//       highNote: 96,
//     });
//     keyboard_small.colorize("accent", "rgb(180, 180, 180)");
//     resized = true;
//   }
// }
// resize();

// const createPiano = (lowNote, highNote) => {
//   const newPiano = new Nexus.Piano("#keyboard", {
//     size: [1200, 100],
//     mode: "impulse",
//     lowNote,
//     highNote,
//   });
//   return newPiano;
// };

// let lowNote = 21;
// let highNote = 108;
// let piano = createPiano(lowNote, highNote);

// then, to remove them tlater
//   dial.destroy();
//  slider.destroy();


