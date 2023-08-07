export const html = `
<!-- Auto Filter -->
<div id="auto-filter">
    <p id="auto-filter-title" class="subtitle">Auto Filter</p>
    <div id="auto-filter-content">
        <div id="auto-filter-toggle"></div>
        <div class="component">
            <p class="label">Depth</p>
            <div id="auto-filter-depth"></div>
            <div id="auto-filter-depth-num"></div>
        </div>
        <div class="component">
            <p class="label">Frequency</p>
            <div id="auto-filter-frequency"></div>
            <div id="auto-filter-frequency-num"></div>
        </div>
        <div class="component">
            <p class="label">Octaves</p>
            <div id="auto-filter-octaves"></div>
        <div id="auto-filter-octaves-num"></div>
    </div>
</div>`;


// // AutoFilter .connect(autoFilter)
// const autoFilter = new Tone.AutoFilter('4n').toDestination().start();

// autoFilter.set({
// 	depth: 1, // range:0-1
// 	frequency: 10, // range:0-1000 or 2000
// 	octaves: 2.6, // range: -10-10
// 	wet: 0,
// });

// let autoFilterToggle = new Nexus.Toggle('#auto-filter-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// autoFilterToggle.colorize('accent', Color.yellow);

// autoFilterToggle.on('change', function (v) {
// 	if (v) {
// 		autoFilter.set({
// 			wet: 1,
// 		});
// 	} else {
// 		autoFilter.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Auto Filter Depth
// let autoFilterDepth = new Nexus.Dial('#auto-filter-depth', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 1,
// });
// autoFilterDepth.colorize('accent', Color.yellow);

// autoFilterDepth.on('change', function (v) {
// 	autoFilter.set({
// 		depth: v,
// 	});
// });

// // Auto Filter Depth Number
// let autoFilterDepthNum = new Nexus.Number('#auto-filter-depth-num');
// autoFilterDepthNum.link(autoFilterDepth);
// autoFilterDepthNum.colorize('accent', Color.yellow);

// // Auto Filter Frequency
// let autoFilterFrequency = new Nexus.Dial('#auto-filter-frequency', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1000,
// 	step: 0,
// 	value: 10,
// });
// autoFilterFrequency.colorize('accent', Color.yellow);

// autoFilterFrequency.on('change', function (v) {
// 	autoFilter.set({
// 		frequency: v,
// 	});
// });

// // Auto Filter Frequency Number
// let autoFilterFrequencyNum = new Nexus.Number('#auto-filter-frequency-num');
// autoFilterFrequencyNum.link(autoFilterFrequency);
// autoFilterFrequencyNum.colorize('accent', Color.yellow);

// // Auto Filter Octaves
// let autoFilterOctaves = new Nexus.Dial('#auto-filter-octaves', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: -10,
// 	max: 10,
// 	step: 0,
// 	value: 2.6,
// });
// autoFilterOctaves.colorize('accent', Color.yellow);

// autoFilterOctaves.on('change', function (v) {
// 	autoFilter.set({
// 		octaves: v,
// 	});
// });

// // Auto Filter Octaves Number
// let autoFilterOctavesNum = new Nexus.Number('#auto-filter-octaves-num');
// autoFilterOctavesNum.link(autoFilterOctaves);
// autoFilterOctavesNum.colorize('accent', Color.yellow);
