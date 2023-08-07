export const html = `
<!-- Ping Pong Delay -->
<div id="ping-pong">
    <p id="ping-pong-delay-title" class="subtitle">
        Ping Pong Delay
    </p>
    <div id="ping-pong-delay-content">
        <div id="ping-pong-delay-toggle"></div>
        <div id="ping-pong-delay-components">
            <div class="component">
                <p class="label">Delay Time</p>
                <div id="ping-pong-delay-time"></div>
                <br />
                <div id="ping-pong-delay-time-num"></div>
            </div>

            <div class="component">
                <p class="label">Feedback</p>
                <div id="ping-pong-delay-feedback"></div>
                <br />
                <div id="ping-pong-delay-feedback-num"></div>
            </div>
        </div>
    </div>
</div>`;

// // PingPongDelay .connect(PingPong)
// const pingPong = new Tone.PingPongDelay('4n', 0.2).toDestination();

// pingPong.set({
// 	delayTime: 2, // range:0-4 (choice)
// 	feedback: 0.2, // range:0-1
// 	wet: 0,
// });

// let pingPongToggle = new Nexus.Toggle('#ping-pong-delay-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// pingPongToggle.colorize('accent', Color.yellow);

// pingPongToggle.on('change', function (v) {
// 	if (v) {
// 		pingPong.set({
// 			wet: 1,
// 		});
// 	} else {
// 		pingPong.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Ping Pong Delay Time
// let pingPongDelayTime = new Nexus.Dial('#ping-pong-delay-time', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 4,
// 	step: 0,
// 	value: 1,
// });
// pingPongDelayTime.colorize('accent', Color.yellow);

// pingPongDelayTime.on('change', function (v) {
// 	pingPong.set({
// 		delayTime: v,
// 	});
// });

// // Ping Pong Delay Time Number
// let pingPongDelayTimeNum = new Nexus.Number('#ping-pong-delay-time-num');
// pingPongDelayTimeNum.link(pingPongDelayTime);
// pingPongDelayTimeNum.colorize('accent', Color.yellow);

// // Ping Pong Delay Feedback
// let pingPongDelayFeedback = new Nexus.Dial('#ping-pong-delay-feedback', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.2,
// });
// pingPongDelayFeedback.colorize('accent', Color.yellow);

// pingPongDelayFeedback.on('change', function (v) {
// 	pingPong.set({
// 		feedback: v,
// 	});
// });

// // Ping Pong Delay Time Number
// let pingPongDelayFeedbackNum = new Nexus.Number('#ping-pong-delay-feedback-num');
// pingPongDelayFeedbackNum.link(pingPongDelayFeedback);
// pingPongDelayFeedbackNum.colorize('accent', Color.yellow);
