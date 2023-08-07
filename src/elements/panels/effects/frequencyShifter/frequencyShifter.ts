export const html = `
<!-- Frequency Shifter -->
<div id="frequency-shifter">
<p id="freq-shifter-title" class="subtitle">
    Freq Shifter
</p>
<div id="freq-shifter-content">
    <div id="freq-shifter-toggle"></div>

    <div class="component">
    <p class="label">Frequency</p>
    <div id="freq-shifter-frequency"></div>
    <br />
    <div id="freq-shifter-frequency-num"></div>
    </div>
</div>
</div>`;


// // FrequencyShifter .connect(shift)
// const shift = new Tone.FrequencyShifter(42).toDestination(); // The incoming signal is shifted by this frequency value

// shift.set({
// 	frequency: 42, // range:-600-600
// 	wet: 0,
// });

// let shiftToggle = new Nexus.Toggle('#freq-shifter-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// shiftToggle.colorize('accent', Color.yellow);

// shiftToggle.on('change', function (v) {
// 	if (v) {
// 		shift.set({
// 			wet: 1,
// 		});
// 	} else {
// 		shift.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Frequency Shifter Frequency
// let frequencyShifterFrequency = new Nexus.Dial('#freq-shifter-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: -600,
// 	max: 600,
// 	step: 0,
// 	value: 42,
// });
// frequencyShifterFrequency.colorize('accent', Color.yellow);

// frequencyShifterFrequency.on('change', function (v) {
// 	shift.set({
// 		frequency: v,
// 	});
// });

// // Frequency Shifter Frequency Number
// let frequencyShifterFrequencyNum = new Nexus.Number('#freq-shifter-frequency-num');
// frequencyShifterFrequencyNum.link(frequencyShifterFrequency);
// frequencyShifterFrequencyNum.colorize('accent', Color.yellow);
