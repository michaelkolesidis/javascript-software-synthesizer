export const html = `
<!-- Distortion -->
<div id="distortion">
<p id="distortion-title" class="subtitle">Distortion</p>
<div id="distortion-content">
    <div id="distortion-toggle"></div>

    <div class="component">
    <p class="label">Amount</p>
    <div id="distortion-amount"></div>
    <br />
    <div id="distortion-amount-num"></div>
    </div>
</div>
</div>`;


// // Distortion .connect(dist)
// const dist = new Tone.Distortion(0.9).toDestination();

// dist.set({
// 	distortion: 0.9, // range:0-1
// 	wet: 0,
// });

// let distortionToggle = new Nexus.Toggle('#distortion-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// distortionToggle.colorize('accent', Color.yellow);

// distortionToggle.on('change', function (v) {
// 	if (v) {
// 		dist.set({
// 			wet: 1,
// 		});
// 	} else {
// 		dist.set({
// 			wet: 0,
// 		});
// 	}
// });

// let distortionDistortion = new Nexus.Dial('#distortion-amount', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.9,
// });
// distortionDistortion.colorize('accent', Color.yellow);

// distortionDistortion.on('change', function (v) {
// 	dist.set({
// 		distortion: v,
// 	});
// });

// // Distortion Number
// let distortionDistortionNum = new Nexus.Number('#distortion-amount-num');
// distortionDistortionNum.link(distortionDistortion);
// distortionDistortionNum.colorize('accent', Color.yellow);
