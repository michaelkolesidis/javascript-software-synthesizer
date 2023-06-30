/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export default function effectsSection() {
  return /*html*/ `
<div class="title" id="effects-title"><p>Effects</p></div>
<div id="effects-content">
    <!--------------------------------------------------------------------->
    <!-- Filters -->
    <!--------------------------------------------------------------------->
    <!-- <div id="filters"> -->
    <!-- <p id="filters-title" class="subtitle">Filters</p> -->
    <!-- <div id="filters-content"> -->
    <!--------------------------------------------------------------------->
    <!-- High/Low-Pass Filter -->
    <!--------------------------------------------------------------------->
    <!-- <div id="high-low-pass">
        <p id="high-low-pass-title" class="subtitle-s">
            High/Low Pass
        </p>
        <div id="high-low-pass-content">
            <p class="label">Low-Pass Cutoff</p>
            <div id="high-low-pass-frequency"></div>
            <p class="label" id="low-pass-freq-label">
            High-Pass Cutoff
            </p>
        </div>
        </div> -->

    <!--------------------------------------------------------------------->
    <!-- Auto Filter -->
    <!--------------------------------------------------------------------->
    <div id="auto-filter">
    <p id="auto-filter-title" class="subtitle">Auto Filter</p>
    <div id="auto-filter-content">
        <div id="auto-filter-toggle"></div>
        <div class="component">
        <p class="label">Depth</p>
        <div id="auto-filter-depth"></div>
        <br />
        <div id="auto-filter-depth-num"></div>
        </div>

        <div class="component">
        <p class="label">Frequency</p>
        <div id="auto-filter-frequency"></div>
        <br />
        <div id="auto-filter-frequency-num"></div>
        </div>

        <div class="component">
        <p class="label">Octaves</p>
        <div id="auto-filter-octaves"></div>
        <br />
        <div id="auto-filter-octaves-num"></div>
        </div>
    </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->

    <!--------------------------------------------------------------------->
    <!-- Chorus -->
    <!--------------------------------------------------------------------->
    <div id="chorus">
    <p id="chorus-title" class="subtitle">Chorus</p>
    <div id="chorus-content" >
        <div id="chorus-toggle"></div>
        <div class="component">
        <p class="label">Frequency</p>
        <div id="chorus-frequency"></div>
        <br />
        <div id="chorus-frequency-num"></div>
        </div>
        <div class="component">
        <p class="label">Delay</p>
        <div id="chorus-delay"></div>
        <br />
        <div id="chorus-delay-num"></div>
        </div>
        <div class="component">
        <p class="label">Depth</p>
        <div id="chorus-depth"></div>
        <br />
        <div id="chorus-depth-num"></div>
        </div>
    </div>
    </div>

    <!--------------------------------------------------------------------->
    <!-- Phaser -->
    <!--------------------------------------------------------------------->
    <div id="phaser">
    <p id="phaser-title" class="subtitle">Phaser</p>
    <div id="phaser-content">
        <div id="phaser-toggle"></div>

        <div class="component">
        <p class="label">Frequency</p>
        <div id="phaser-frequency"></div>
        <br />
        <div id="phaser-frequency-num"></div>
        </div>

        <div class="component">
        <p class="label">Octaves</p>
        <div id="phaser-octaves"></div>
        <br />
        <div id="phaser-octaves-num"></div>
        </div>

        <div class="component">
        <p class="label">Base Freq</p>
        <div id="phaser-base-frequency"></div>
        <br />
        <div id="phaser-base-frequency-num"></div>
        </div>
    </div>
    </div>

    <!--------------------------------------------------------------------->
    <!-- Feedback Delay -->
    <!--------------------------------------------------------------------->
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
    </div>

    <!--------------------------------------------------------------------->
    <!-- Ping Pong Delay -->
    <!--------------------------------------------------------------------->
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
    </div>

    <!--------------------------------------------------------------------->
    <!-- Tremolo -->
    <!--------------------------------------------------------------------->
    <div id="tremolo">
    <p id="tremolo-title" class="subtitle">Tremolo</p>
    <div id="tremolo-content">
        <div id="tremolo-toggle"></div>
        <div id="tremolo-components">
        <div class="component">
            <p class="label">Frequency</p>
            <div id="tremolo-frequency"></div>
            <br />
            <div id="tremolo-frequency-num"></div>
        </div>
        <div class="component">
            <p class="label">Depth</p>
            <div id="tremolo-depth"></div>
            <br />
            <div id="tremolo-depth-num"></div>
        </div>
        </div>
    </div>
    </div>

    <!--------------------------------------------------------------------->
    <!-- Vibrato -->
    <!--------------------------------------------------------------------->
    <div id="vibrato">
    <p id="vibrato-title" class="subtitle">Vibrato</p>
    <div id="vibrato-content">
        <div id="vibrato-toggle"></div>
        <div id="vibrato-components">
        <div class="component">
            <p class="label">Frequency</p>
            <div id="vibrato-frequency"></div>
            <br />
            <div id="vibrato-frequency-num"></div>
        </div>
        <div class="component">
            <p class="label">Depth</p>
            <div id="vibrato-depth"></div>
            <br />
            <div id="vibrato-depth-num"></div>
        </div>
        </div>
    </div>
    </div>

    <!--------------------------------------------------------------------->
    <!-- Reverb -->
    <!--------------------------------------------------------------------->
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
    </div>

    <!--------------------------------------------------------------------->
    <!-- Distortion -->
    <!--------------------------------------------------------------------->
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
    </div>

    <!--------------------------------------------------------------------->
    <!-- Bit Crusher -->
    <!--------------------------------------------------------------------->
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
    </div>

    <!--------------------------------------------------------------------->
    <!-- Frequency Shifter -->
    <!--------------------------------------------------------------------->
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
    </div>
    
    <!--------------------------------------------------------------------->
    <!-- Chebyshev -->
    <!--------------------------------------------------------------------->
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
    </div>
</div>
`;
}
