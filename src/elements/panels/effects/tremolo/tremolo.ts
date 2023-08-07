export const html = `<!-- Tremolo -->
<div id="tremolo">
<p id="tremolo-title" class="subtitle">Tremolo</p>
<div id="tremolo-content">
    <div id="tremolo-toggle"></div>
    <div id="tremolo-components">
    <div class="component">
        <p class="label">Frequency</p>
        <div id="tremolo-frequency"></div>
        <br />
        <div id="tremolo-frequency-num"></div>
    </div>
    <div class="component">
        <p class="label">Depth</p>
        <div id="tremolo-depth"></div>
        <br />
        <div id="tremolo-depth-num"></div>
    </div>
    </div>
</div>
</div>`;

// // Tremolo .connect(tremolo)
// const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start(); // frequency (rate), depth

// tremolo.set({
// 	frequency: 9, // range:0-50 (choice)
// 	depth: 0.75, // range:0-1
// 	wet: 0,
// });

// let tremoloToggle = new Nexus.Toggle('#tremolo-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// tremoloToggle.colorize('accent', Color.yellow);

// tremoloToggle.on('change', function (v) {
// 	if (v) {
// 		tremolo.set({
// 			wet: 1,
// 		});
// 	} else {
// 		tremolo.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Tremolo Frequency
// let tremoloFrequency = new Nexus.Dial('#tremolo-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 50,
// 	step: 1,
// 	value: 9,
// });
// tremoloFrequency.colorize('accent', Color.yellow);

// tremoloFrequency.on('change', function (v) {
// 	tremolo.set({
// 		frequency: v,
// 	});
// });

// // Tremolo Frequency Number
// let tremoloFrequencyNum = new Nexus.Number('#tremolo-frequency-num');
// tremoloFrequencyNum.link(tremoloFrequency);
// tremoloFrequencyNum.colorize('accent', Color.yellow);

// // Tremolo Depth
// let tremoloDepth = new Nexus.Dial('#tremolo-depth', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.75,
// });
// tremoloDepth.colorize('accent', Color.yellow);

// tremoloDepth.on('change', function (v) {
// 	tremolo.set({
// 		depth: v,
// 	});
// });

// // Tremolo Depth Number
// let tremoloDepthNum = new Nexus.Number('#tremolo-depth-num');
// tremoloDepthNum.link(tremoloDepth);
// tremoloDepthNum.colorize('accent', Color.yellow);
