export const html = `
<!-- Feedback Delay -->
<div id="feedback-delay">
    <p id="feedback-delay-title" class="subtitle">Feedback Delay</p>
    <div id="feedback-delay-content">
        <div id="feedback-delay-toggle"></div>
        <div id="feedback-delay-components">
            <div class="component">
                <p class="label">Delay Time</p>
                <div id="feedback-delay-time"></div>
                <br />
                <div id="feedback-delay-time-num"></div>
            </div>
            <div class="component">
                <p class="label">Feedback</p>
                <div id="feedback-delay-feedback"></div>
                <br />
                <div id="feedback-delay-feedback-num"></div>
            </div>
        </div>
    </div>
</div>`;

// // FeedbackDelay .connect(feedbackDelay)
// const feedbackDelay = new Tone.FeedbackDelay('8n', 0.5).toDestination();

// feedbackDelay.set({
// 	delayTime: 0.25, // range:0-1
// 	feedback: 0.5, // range:0-1
// 	wet: 0,
// });

// let feedbackDelayToggle = new Nexus.Toggle('#feedback-delay-toggle', {
// 	size: [36, 18],
// 	state: false,
// });
// feedbackDelayToggle.colorize('accent', Color.yellow);

// feedbackDelayToggle.on('change', function (v) {
// 	if (v) {
// 		feedbackDelay.set({
// 			wet: 1,
// 		});
// 	} else {
// 		feedbackDelay.set({
// 			wet: 0,
// 		});
// 	}
// });

// // Feedback Delay Time
// let feedbackDelayTime = new Nexus.Dial('#feedback-delay-time', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.25,
// });
// feedbackDelayTime.colorize('accent', Color.yellow);

// feedbackDelayTime.on('change', function (v) {
// 	feedbackDelay.set({
// 		delayTime: v,
// 	});
// });

// // Feedback Delay Time Number
// let feedbackDelayTimeNum = new Nexus.Number('#feedback-delay-time-num');
// feedbackDelayTimeNum.link(feedbackDelayTime);
// feedbackDelayTimeNum.colorize('accent', Color.yellow);

// // Feedback Delay Feedback
// let feedbackDelayFeedback = new Nexus.Dial('#feedback-delay-feedback', {
// 	size: [67, 67],
// 	interaction: 'vertical', // "radial", "vertical", or "horizontal"
// 	mode: 'relative', // "absolute" or "relative"
// 	min: 0,
// 	max: 1,
// 	step: 0,
// 	value: 0.5,
// });
// feedbackDelayFeedback.colorize('accent', Color.yellow);

// feedbackDelayFeedback.on('change', function (v) {
// 	feedbackDelay.set({
// 		feedback: v,
// 	});
// });

// // Feedback Delay Time Number
// let feedbackDelayFeedbackNum = new Nexus.Number('#feedback-delay-feedback-num');
// feedbackDelayFeedbackNum.link(feedbackDelayFeedback);
// feedbackDelayFeedbackNum.colorize('accent', Color.yellow);
