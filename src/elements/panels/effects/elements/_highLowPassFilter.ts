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
