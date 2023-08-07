export const html = `
<!-- Chorus -->
<div id="chorus">
    <p id="chorus-title" class="subtitle">Chorus</p>
    <div id="chorus-content" >
        <div id="chorus-toggle"></div>
        <div class="component">
            <p class="label">Frequency</p>
            <div id="chorus-frequency"></div>
            <div id="chorus-frequency-num"></div>
        </div>
        <div class="component">
            <p class="label">Delay</p>
            <div id="chorus-delay"></div>
            <div id="chorus-delay-num"></div>
        </div>
        <div class="component">
            <p class="label">Depth</p>
            <div id="chorus-depth"></div>
            <div id="chorus-depth-num"></div>
        </div>
    </div>
</div>`;

// // Chorus .connect(chorus)
// const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();

// chorus.set({
// 	frequency: 4, // range: 0-50
// 	delayTime: 2.5, // range:0-200
// 	depth: 0.5, // range: 0-1
// 	wet: 0,
// });

// let chorusToggle = new Nexus.Toggle('#chorus-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// chorusToggle.colorize('accent', Color.yellow);

// chorusToggle.on('change', function (v) {
// 	if (v) {
// 		chorus.set({
// 			wet: 1,
// 		});
// 	} else {
// 		chorus.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Chorus Frequency
// let chorusFrequency = new Nexus.Dial('#chorus-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 50,
// 	step: 0,
// 	value: 4,
// });
// chorusFrequency.colorize('accent', Color.yellow);

// chorusFrequency.on('change', function (v) {
// 	chorus.set({
// 		frequency: v,
// 	});
// });

// // Chorus Frequency Number
// let chorusFrequencyNum = new Nexus.Number('#chorus-frequency-num');
// chorusFrequencyNum.link(chorusFrequency);
// chorusFrequencyNum.colorize('accent', Color.yellow);

// // Chorus Delay Time
// let chorusDelay = new Nexus.Dial('#chorus-delay', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 200,
// 	step: 0,
// 	value: 2.5,
// });
// chorusDelay.colorize('accent', Color.yellow);

// chorusDelay.on('change', function (v) {
// 	chorus.set({
// 		delayTime: v,
// 	});
// });

// // Chorus Delay Time Number
// let chorusDelayNum = new Nexus.Number('#chorus-delay-num');
// chorusDelayNum.link(chorusDelay);
// chorusDelayNum.colorize('accent', Color.yellow);

// // Chorus Depth
// let chorusDepth = new Nexus.Dial('#chorus-depth', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.5,
// });
// chorusDepth.colorize('accent', Color.yellow);

// chorusDepth.on('change', function (v) {
// 	chorus.set({
// 		depth: v,
// 	});
// });

// // Chorus Depth Number
// let chorusDepthNum = new Nexus.Number('#chorus-depth-num');
// chorusDepthNum.link(chorusDepth);
// chorusDepthNum.colorize('accent', Color.yellow);
