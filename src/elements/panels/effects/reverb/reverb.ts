export const html = `
<!-- Reverb -->
<div id="reverb">
<p id="reverb-title" class="subtitle">Reverb</p>
<div id="reverb-content">
    <div id="reverb-toggle"></div>
    <div class="component">
    <p class="label">Decay</p>
    <div id="reverb-decay"></div>
    <br />
    <div id="reverb-decay-num"></div>
    </div>
</div>
</div>`;

// // Reverb .connect(reverb)
// const reverb = new Tone.Reverb(1).toDestination(); // seconds - Check implementation
// // https://tonejs.github.io/docs/14.7.77/Reverb - you have to wait until

// reverb.set({
// 	decay: 1, // range:0-30 (choice)
// 	wet: 0,
// });

// let reverbToggle = new Nexus.Toggle('#reverb-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// reverbToggle.colorize('accent', Color.yellow);

// reverbToggle.on('change', function (v) {
// 	if (v) {
// 		reverb.set({
// 			wet: 1,
// 		});
// 	} else {
// 		reverb.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Reverb Decay
// let reverbDecay = new Nexus.Dial('#reverb-decay', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 30,
// 	step: 0,
// 	value: 1,
// });
// reverbDecay.colorize('accent', Color.yellow);

// reverbDecay.on('change', function (v) {
// 	reverb.set({
// 		decay: v,
// 	});
// });

// // Reverb Decay Num
// let reverbDecayNum = new Nexus.Number('#reverb-decay-num');
// reverbDecayNum.link(reverbDecay);
// reverbDecayNum.colorize('accent', Color.yellow);
