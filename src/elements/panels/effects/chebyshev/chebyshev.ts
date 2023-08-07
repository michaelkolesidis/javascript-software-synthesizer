export const html = `
<!-- Chebyshev -->
<div id="chebyshev">
<p id="chebyshev-title" class="subtitle">Chebyshev</p>
<div id="chebyshev-content">
    <div id="chebyshev-toggle"></div>

    <div class="component">
    <p class="label">Order</p>
    <div id="chebyshev-order"></div>
    <br />
    <div id="chebyshev-order-num"></div>
    </div>
</div>
</div>`;


// // Chebyshev .connect(cheby)
// const cheby = new Tone.Chebyshev(50).toDestination();

// cheby.set({
// 	order: 51, // range:1-100
// 	wet: 0,
// });

// let chebyToggle = new Nexus.Toggle('#chebyshev-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// chebyToggle.colorize('accent', Color.yellow);

// chebyToggle.on('change', function (v) {
// 	if (v) {
// 		cheby.set({
// 			wet: 1,
// 		});
// 	} else {
// 		cheby.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Chebyshev Order
// let chebyshevOrder = new Nexus.Dial('#chebyshev-order', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 1,
// 	max: 100,
// 	step: 1,
// 	value: 51,
// });
// chebyshevOrder.colorize('accent', Color.yellow);

// chebyshevOrder.on('change', function (v) {
// 	cheby.set({
// 		order: v,
// 	});
// });

// // Chebyshev Order Number
// let chebyshevOrderNum = new Nexus.Number('#chebyshev-order-num');
// chebyshevOrderNum.link(chebyshevOrder);
// chebyshevOrderNum.colorize('accent', Color.yellow);
