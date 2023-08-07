export const html = `
<!-- Phaser -->
<div id="phaser">
    <p id="phaser-title" class="subtitle">Phaser</p>
    <div id="phaser-content">
        <div id="phaser-toggle"></div>
        <div class="component">
            <p class="label">Frequency</p>
            <div id="phaser-frequency"></div>
            <div id="phaser-frequency-num"></div>
        </div>
        <div class="component">
            <p class="label">Octaves</p>
            <div id="phaser-octaves"></div>
            <div id="phaser-octaves-num"></div>
        </div>
        <div class="component">
            <p class="label">Base Freq</p>
            <div id="phaser-base-frequency"></div>
            <div id="phaser-base-frequency-num"></div>
        </div>
    </div>
</div>`;

// // Phaser .connect(phaser)
// const phaser = new Tone.Phaser({
// 	frequency: 15, // The speed of the phasing
// 	octaves: 5, // The octaves of the effect
// 	baseFrequency: 1000, // The base frequency of the filters
// }).toDestination();

// phaser.set({
// 	frequency: 15, // range:0-70 (choice)
// 	octaves: 5, // range:0-20 (choice)
// 	baseFrequency: 1000, // range:0-1000 (choice)
// 	wet: 0,
// });

// let phaserToggle = new Nexus.Toggle('#phaser-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// phaserToggle.colorize('accent', Color.yellow);

// phaserToggle.on('change', function (v) {
// 	if (v) {
// 		phaser.set({
// 			wet: 1,
// 		});
// 	} else {
// 		phaser.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Phaser Frequency
// let phaserFrequency = new Nexus.Dial('#phaser-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 70,
// 	step: 0,
// 	value: 15,
// });
// phaserFrequency.colorize('accent', Color.yellow);

// phaserFrequency.on('change', function (v) {
// 	phaser.set({
// 		frequency: v,
// 	});
// });

// // Phaser Frequency Num
// let phaserFrequencyNum = new Nexus.Number('#phaser-frequency-num');
// phaserFrequencyNum.link(phaserFrequency);
// phaserFrequencyNum.colorize('accent', Color.yellow);

// // Phaser Octaves
// let phaserOctaves = new Nexus.Dial('#phaser-octaves', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 20,
// 	step: 0,
// 	value: 5,
// });
// phaserOctaves.colorize('accent', Color.yellow);

// phaserOctaves.on('change', function (v) {
// 	phaser.set({
// 		octaves: v,
// 	});
// });

// // Phaser Octaves Num
// let phaserOctavesNum = new Nexus.Number('#phaser-octaves-num');
// phaserOctavesNum.link(phaserOctaves);
// phaserOctavesNum.colorize('accent', Color.yellow);

// // Phaser Base Frequency
// let phaserBaseFrequency = new Nexus.Dial('#phaser-base-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 2000,
// 	step: 0,
// 	value: 1000,
// });
// phaserBaseFrequency.colorize('accent', Color.yellow);

// phaserBaseFrequency.on('change', function (v) {
// 	phaser.set({
// 		baseFrequency: v,
// 	});
// });

// // Phaser Base Frequency Num
// let phaserBaseFrequencyNum = new Nexus.Number('#phaser-base-frequency-num');
// phaserBaseFrequencyNum.link(phaserBaseFrequency);
// phaserBaseFrequencyNum.colorize('accent', Color.yellow);
