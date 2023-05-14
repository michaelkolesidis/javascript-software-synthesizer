![JSS-01 Logo](./assets/logo/logo_256_white.png#gh-dark-mode-only)
![JSS-01 Logo](./assets/logo/logo_256.png#gh-light-mode-only)

<h1>JSS-01<br>JavaScript Software Synthesizer</h1>

[![made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-01004c.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT license](https://img.shields.io/badge/License-AGPLv3-01004c.svg)](https://www.gnu.org/licenses/agpl-3.0.html)
[![Version](https://img.shields.io/badge/version-1.0.6-01004c.svg)](https://shields.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/93c42090-6fc9-4c3d-a462-42b535ea9d15/deploy-status)](https://app.netlify.com/sites/javascript-software-synthesizer/deploys)

## Technologies Used

<a href="https://tonejs.github.io/"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/tonejs/tonejs-original.png" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://webmidijs.org/"><img src="https://webmidijs.org/img/webmidijs-logo-dark.svg" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.typescriptlang.org/"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/typescript/typescript-original.svg" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://sass-lang.com/"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/sass/sass-original.svg" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.yarnpkg.com/"><img src="https://github.com/michaelkolesidis/tech-icons/blob/main/icons/yarn/yarn-original.svg" height="50px" /></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

More info about the technologies can be found <a href="https://github.com/michaelkolesidis/javascript-software-synthesizer/blob/main/README.md#technologies-used-extended">here</a>.

## Description

The _JSS-01 | JavaScript Software Synthesizer_ is a web application enabling you to make and play music in the browser. It is a [software synthesizer](https://en.wikipedia.org/wiki/Software_synthesizer) utilizing the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) by implementing a variety of JavaScript frameworks and libraries, such as [Tone.js](https://tonejs.github.io/) and [NexusUI](https://nexus-js.github.io/ui/). Its design is fully modular, thus it can easily be adapted and integrated into any kind of project.

My aim when creating the JSS-01 was to offer a powerful synthesizer that is simple, easy and, above all, fun to use!

<img width="900px" src="./screenshots/v.0.5.4-large.png">

More screenshots can be found <a href="https://github.com/michaelkolesidis/javascript-software-synthesizer/blob/main/README.md#screenshots">here</a>.

## Build & Run

First clone the project from GitHub:

```
git clone git@github.com:michaelkolesidis/javascript-software-synthesizer.git
cd javascript-software-synthesizer
```

Install the project dependencies:

```
yarn build
```

You can now run the _JavaScript Software Synthesizer_ locally easily by using a VSCode extension like **Live Server** ([Live Server on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) or Python's **http.server** module.

For more information, please refer to MDN's excellent article: [MDN article](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)

### Demo

There is an online demo available at [https://javascript-software-synthesizer.netlify.app/](https://javascript-software-synthesizer.netlify.app/)

## Introduction

Keys, knobs, sliders and buttons to tweak your sound and generate immersive soundscapes. You can also connect your MIDI keyboard and play with it!

### Quick Start

The _JSS-01 | JavaScript Software Synthesizer_ uses <strong>FM Synthesis</strong> (frequency modulation synthesis). In FM Synthesis there is an oscillator that produces the sound signal, the <strong>Carrier</strong>, and an oscillator that modulates the carrier's wave frequency, the <strong>Modulator</strong>.

<img width="300px" src="./assets/fm.png">

<p><strong>Sine wave:</strong></p>
<img width="300px" src="./assets//waveforms/sine_wave.png">

<p><strong>Frequency-modulated sine wave:</strong></p>
<img width="300px" src="./assets//waveforms/sine_wave_mod.png">

<br><br>

<img width="50px" src="./screenshots/elements/synth.png">
In JSS-01, the <strong>Synth Section</strong> of the synthesizer includes the controls for the <strong>Carrier</strong> oscillator.

<br><br>

<img width="100px" src="./screenshots/elements/modulation.png">
The <strong>Modulation Section</strong> includes the controls for the <strong>Modulator</strong> oscillator.

<br><br>

<img width="58px" src="./screenshots/elements/effects.png">
The <strong>Effects Section</strong> includes the controls of the various effects that can be applied to the sound. The effects are connected in series with the following connectivity: Oscillator 2 --> Oscillator 1 --> Auto Filter --> Phaser --> Crusher --> Chebyshev --> Feedback Delay --> Ping Pong Delay --> Reverb --> Chorus --> Tremolo --> Vibrato --> Distortion --> Frequency Shifter --> Output.

#### How to Play

You can play the JSS-01 by using the on-screen keyboard, your computer keyboard, or a MIDI keyboard.

<img width="500px" src="./assets/keyboard/keyboard_bg_w.png">

#### Oscilloscope

The [Oscilloscope](https://en.wikipedia.org/wiki/Oscilloscope) shows the waveform of the sound. You can click on it to pause or you can right-click on it to save the current waveform as an image.

#### Modulation Index

<img width="80px" src="./screenshots/elements/mod_index.png">
The Modulation Index determines the amount of the modulation that will be applied to the Carrier. If you set the <strong>Modulation Index</strong> to 0 (can be found at the top line of the Synth section) you get the unmodulated output of the carrier oscillator.

#### MIDI

In order to use your [MIDI keyboard](https://en.wikipedia.org/wiki/MIDI_keyboard) with the JSS-01 you should connect it and turn it on, prior to accessing the web app. If you connect it while already on the JSS-01, you should refresh the page. The available MIDI devices will appear inside the MIDI display, located on top left. You can click on the MIDI device you would like to use and wait for the confirmation message. You are now ready to use your MIDI keyboard. Enjoy playing!

#### Sequencer

<img width="900px" src="./screenshots/elements/sequencer.png">
Right above the on-screen keyboard you can find the Sequencer. There is an included sequence preinstalled, so you can just press the <strong>Play button</strong> and listen to it. <br><br>

The first input from the left controls the rate of the sequence (speed). The second input is the base value of the notes of the sequence (16n stands for a 16th note value, 8n for an 8th and so on). You can input your own sequences in the main input by writing the sequence of the desired notes in this form: <strong>"C4", "F5", "D2"\*\*</strong>. You can include parts with notes of half the base value by including them in brackets, ex. <strong>"C4", ["F5", "D2"]</strong>. In this examples, if the base value is 16n (16th notes), C4 will have a value of 16th, and each of the F5 and D2 will have a value of 32th (or a value of a 16th combined).

When your sequence is ready, you can add it to the sequencer using the <strong>Add button</strong>. In order to go back to the default sequence, you can simply write <strong>default</strong> in the sequence input field and then click the Add button. There are two extra sequences included, the bassline of "I Feel Love" by Donna Summer (peoduced by Giorgio Moroder), which can be accessed by writing <strong>i feel love</strong> in the sequence input field and then pressing the add button, and the riff of "Funky Town", that can be accessed by writing <strong>funky town</strong>.

You can find some additional information about the JSS-01 and sound synthesis in this short [presentation](./assets/presentation/JSS%20Presentation.pdf).

## System Requirements

The _JSS-01 | JavaScript Software Synthesizer_ is quite heavy, especially on the CPU. We would suggest these indicative minimum requirements:

| Component  | Minimum                                 | Recommended                            |
| ---------- | --------------------------------------- | -------------------------------------- |
| CPU        | Quad-core x86-64 (2014 or later)        | Quad-core x86-64 (2018 or later) or M1 |
| RAM        | 8GB                                     | 16GB                                   |
| Display    | 1600x900                                | 1920X1080                              |
| Sound Card | On-board, dedicated, or audio interface | Audio interface                        |
| Speakers   | Monitor speakers or mixing headphones   | Monitor speakers or mixing headphones  |

#### Browser Requirements

| Browser                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- |
| Chrome or other Chromium-based browsers                                                                                       |
| Safari                                                                                                                        |
| Firefox with the <a href="https://addons.mozilla.org/en-US/firefox/addon/midi-input-provider/">MIDI Input Provider add-on</a> |

## Documentation

Full documentation will be released at some point in the future. In the meantime, you can refer to the [Tone.js documentation](https://tonejs.github.io/docs/), as well as the [NexusUI documentation](https://nexus-js.github.io/ui/api/#intro).

## Guides & Tutorials

The JSS-01 is using FM synthesis implementing the FMSynth of Tone.js, While there aren't any guides and tutorials specifically for the JSS-01 yet, there are plenty of excellent guides on FM synthesis:

### FM Synthesis

- [Synth Secrets: An Introduction To Frequency Modulation from Sound on Sound](https://web.archive.org/web/20160403123704/http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm)
- [Synth Secrets: More On Frequency Modulation from Sound on Sound](https://web.archive.org/web/20160404062919/http://www.soundonsound.com/sos/may00/articles/synth.htm)
- [FM Synthesis Collection by Yamaha](https://www.yamahasynth.com/learn/synth-programming/fm-synthesis-collection)
- [FM Synthesis entry in Wikipedia](https://en.wikipedia.org/wiki/Frequency_modulation_synthesis)

## Contributing

Feel free to submit issues and pull requests. It would be great to create a community around JSS-01, to contiue its development and evolution, making it more capable and easier to use, increasing its creative and artistic potential.
If you are interested in becoming part of out community it would be useful to have a look to our dedicated document regarding [Contributing](https://github.com/michaelkolesidis/javascript-software-synthesizer/blob/main/CONTRIBUTING.md), as well as, out [Code of Conduct](https://github.com/michaelkolesidis/javascript-software-synthesizer/blob/main/CODE_OF_CONDUCT.md). It a nutshell, we want our community to be a safe space for everyone, so that we can all have a pleasant and joyful experience!

## Changelog

Please refer to the project's [Changelog](https://github.com/michaelkolesidis/javascript-software-synthesizer/blob/main/CHANGELOG.md) document.

## Technologies Used (Extended)

- [Tone.js](https://github.com/Tonejs/Tone.js/)
  <br>One could say that Tone.js is the "soul" of our project. It provides us with the synthesizers we use to generate sounds, as well as their various properties that can be tweaked and adjusted.
- [NexusUI](https://github.com/nexus-js/ui)
  <br>NexusUI provides us with the UI components that are connected to the synthesizers and make parameters adjusting easy and playful.
- [WEBMIDI.js](https://github.com/djipco/webmidi)
  <br>WEBMIDI.js makes Web MIDI API easy to implement. It allows users to connect their MIDI keyboards and play the synthesizer the way it is meant to be played. Because, who likes playing music with a [mouse](https://web.archive.org/web/20150928202135im_/https://kathytemean.files.wordpress.com/2014/11/46289.jpg?w=500&h=540)?
- [Sass](https://github.com/sass/sass)
  <br>The SCSS (Sassy CSS) syntax is utilized for the styling of our project.
- [TypeScript](https://www.typescriptlang.org/)
  <br>In version 0.6.1, TypeScript was first introduced in the project, with significant parts of it migrating to TypeScript for increased type safety. In version 1.0.0 migration to TypeScript was completed.

## Roadmap

### Completed

- Dark Mode. Users are now able to switch the UI to dark mode. Dark mode makes the whole experience easier on the eyes and greatly improves readability and accessibility for certain users. It was one of the most common feature requests we were getting as feedback from our users.
- Migration to TypeScrip

### Currently Working On

- Bug fixes

### Future Plans

Some of the features to be implemented in the future are:

- Recorder
- Presets
- All parameters controllable with MIDI
- Other types of sound synthesis to choose from (currently only FM synthesis)
- Rewriting the app using React

## References and Inspiration

- [Synth Secrets from Sound on Sound](https://www.soundonsound.com/series/synth-secrets-sound-sound)
- [Learning Synths by Ableton](https://learningsynths.ableton.com/en/playground)
- [Syntorial](https://www.syntorial.com/)
- [Dexed - FM Plugin Synth](https://github.com/asb2m10/dexed)
- [Teenage Engineering OP-1](https://teenage.engineering/products/op-1)
- [Helm](https://tytel.org/helm/)

A full(-ish) list of references can be found in the [References](https://github.com/michaelkolesidis/javascript-software-synthesizer/blob/main/REFERENCES.md) document.

## Screenshots

#### Medium Screens

<img width="900px" src="./screenshots/v.0.5.4-medium.png">

#### Small Screens

<img width="900px" src="./screenshots/v.0.5.4-small.png">

## Sponsors

None, yet! We will have to add way more features for that.

## Contributors

- [Michael Kolesidis](ttps://github.com/michaelkolesidis)
- [Chris Strawser](https://github.com/mcochris)
- [Margarita Marmaridou](https://github.com/mamarmar)

You name could be here and it would be great to have you aboard!

## Other

- You can find a mirror of this repository in [Codeberg](https://codeberg.org/michaelkolesidis/javascript-software-synthesizer).
- The project has a total of 3,342 lines of code (excluding blank lines and comments).

## Special Thanks To

- [Mohammed Amine Grid](https://github.com/mohammed-amine-grid), for his guidance and dedication throughout this journey.
- All the students and the tutors at the [Social Hackers Academy](https://github.com/SocialHackersAcademy), for creating a nice little community of passionate people offering their best for each other.

## License

<a href="https://www.gnu.org/licenses/agpl-3.0.html"><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/AGPLv3_Logo.svg" height="100px" /></a>

Copyright (c) 2023 Michael Kolesidis<br>
Licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html).

<br>

<p align="center">
<img width="400px" src="./assets/visual.png">
</p>
