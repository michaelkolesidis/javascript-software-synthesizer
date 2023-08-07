export const html = `
<!-- Bit Crusher -->
<div id="bit-crusher">
<p id="bit-crusher-title" class="subtitle">Bit Crusher</p>
<div id="bit-crusher-content">
    <div id="bit-crusher-toggle"></div>

    <div class="component">
    <p class="label">Bits</p>
    <div id="bit-crusher-bits"></div>
    <br />
    <div id="bit-crusher-bits-num"></div>
    </div>
</div>
</div>`;


// // BitCrusher .connect(crusher)
// const crusher = new Tone.BitCrusher(7).toDestination(); //
// crusher.bits.value;

// crusher.set({
// 	bits: 7, // range:1-16, step:1
// 	wet: 0,
// });

// let crusherToggle = new Nexus.Toggle('#bit-crusher-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// crusherToggle.colorize('accent', Color.yellow);

// crusherToggle.on('change', function (v) {
// 	if (v) {
// 		crusher.set({
// 			wet: 1,
// 		});
// 	} else {
// 		crusher.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Bit Crusher Bits
// let bitCrusherBits = new Nexus.Dial('#bit-crusher-bits', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 6,
// 	max: 10,
// 	step: 0.01,
// 	value: 7,
// });
// bitCrusherBits.colorize('accent', Color.yellow);

// bitCrusherBits.on('change', function (v) {
// 	crusher.set({
// 		bits: v,
// 	});
// });

// // Bit Crusher Bits Number
// let bitCrusherBitsNum = new Nexus.Number('#bit-crusher-bits-num');
// bitCrusherBitsNum.link(bitCrusherBits);
// bitCrusherBitsNum.colorize('accent', Color.yellow);
