export const html = `
<!-- Vibrato -->
<div id="vibrato">
<p id="vibrato-title" class="subtitle">Vibrato</p>
<div id="vibrato-content">
    <div id="vibrato-toggle"></div>
    <div id="vibrato-components">
    <div class="component">
        <p class="label">Frequency</p>
        <div id="vibrato-frequency"></div>
        <br />
        <div id="vibrato-frequency-num"></div>
    </div>
    <div class="component">
        <p class="label">Depth</p>
        <div id="vibrato-depth"></div>
        <br />
        <div id="vibrato-depth-num"></div>
    </div>
    </div>
</div>
</div>`;


// // Vibrato .connect(vibrato)
// const vibrato = new Tone.Vibrato(9, 0.9).toDestination(); // frequency, depth

// vibrato.set({
// 	frequency: 9, // range:0-900 (choice)
// 	depth: 0.75, // range:0-1
// 	wet: 0,
// });

// let vibratoToggle = new Nexus.Toggle('#vibrato-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// vibratoToggle.colorize('accent', Color.yellow);

// vibratoToggle.on('change', function (v) {
// 	if (v) {
// 		vibrato.set({
// 			wet: 1,
// 		});
// 	} else {
// 		vibrato.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Vibrato Frequency
// let vibratoFrequency = new Nexus.Dial('#vibrato-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 2000,
// 	step: 1,
// 	value: 9,
// });
// vibratoFrequency.colorize('accent', Color.yellow);

// vibratoFrequency.on('change', function (v) {
// 	vibrato.set({
// 		frequency: v,
// 	});
// });

// // Vibrato Frequency Number
// let vibratoFrequencyNum = new Nexus.Number('#vibrato-frequency-num');
// vibratoFrequencyNum.link(vibratoFrequency);
// vibratoFrequencyNum.colorize('accent', Color.yellow);

// // Vibrato Depth
// let vibratoDepth = new Nexus.Dial('#vibrato-depth', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.75,
// });
// vibratoDepth.colorize('accent', Color.yellow);

// vibratoDepth.on('change', function (v) {
// 	vibrato.set({
// 		depth: v,
// 	});
// });

// // Vibrato Depth Number
// let vibratoDepthNum = new Nexus.Number('#vibrato-depth-num');
// vibratoDepthNum.link(vibratoDepth);
// vibratoDepthNum.colorize('accent', Color.yellow);
