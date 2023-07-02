# 2.0.3

### Changes

- Updated instructions for building and running locally

# 2.0.2

### Changes

- Migration to Vercel

# 2.0.1

### Changes

- Fixed readme images path

# 2.0.0

### Changes

- Vite migration
- Refactoring
- Code cleanup

# 1.2.0

### Changes

- Fixed computer keyboard playability (language-independent)
- Rewritten keyMapper and midiToNoteString in a concise and optimal way
- Added checks for TypeScript
- Optimized the size of all PNG and SVG images
- Code cleanup
- Updated all dependencies to their latest versions
- Fixed typos in all readme files
- Minor documentation updates
- Minor updates and corrections

# 1.0.6

### Changes

- Updated Tone.js to latest version
- Updated all dependencies to their latest versions
- Using yarn.lock in instead of package-lock
- Updated logo files
- Changed TypeScript target language to ES2021
- Readme update and restructuring
- Minor documentation updates
- Added Security Policy

# 1.0.1

### Changes

- Switched to GNU Affero General Public License v3.0

# 1.0.0

### Changes

- Migration to TypeScript

# 0.7.0

### Changes

- Dark Mode (inverted colors)

# 0.6.2

### Changes

- Updated all components to the new license
- Code cleanup

# 0.6.1

### Changes

- Converted a significant part of the codebase to TypeScript
- License changed to GNU Affero General Public License v3.0
- Minor UI fixes

# 0.5.4

### Changes

- MIDI input device selectable

### Known Issues

- When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
- Partials sections don't work
- High CPU load and performance issues
- Opening the Dev Tools in Chrome results to severe performance deterioration: the app becomes unresponsive and crushes
- Severe performance issues on Firefox

# 0.5.3

### Changes

- Quick Start menu
- Removal of p5.js animated background for better performance
- Styling
- Quick Start documentation

### Known Issues

- When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
- Partials sections don't work
- High CPU load and performance issues
- Opening the Dev Tools in Chrome results to severe performance deterioration: the app becomes unresponsive and crushes
- Severe performance issues on Firefox

# 0.5

### Changes

- Effects
  - Auto filter
  - Chorus
  - Phaser
  - Feedback delay
  - Ping pong delay
  - Tremolo
  - Vibrato
  - Reverb
  - Distortion
  - Bit crusher
  - Frequency shifter
  - Chebyshev waveshaping
- Responsive effects section
- Synthesizer engine refactoring
- Synthesizer effects connectivity
- Splash screen
- Background animation
- Dark mode / help mode buttons removal
- 1 extra sequence example (I Feel Love)
- Styling
- Code cleanup
- All elements as JavaScript modules

### Known Issues

- Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)
- When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
- Partials sections don't work
- High CPU load

# 0.2.5

### Changes

- Sequencer
  - Note sequence input
  - Tempo
  - Note value
  - Set sequence button
  - Play button
  - Stop button
  - 2 sequence examples (default and Funky Town)
- Styling
- Code cleanup

### Known Issues

- Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)
- When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
- Partials sections don't work

# 0.2.4

### Changes

- Computer keyboard playability
  - 16 notes playable (one octave + 4 notes) using keys (A-L and W-P)
  - Octave up/down (using Z,X keys)
- Amplitude envelope section
  - Attack, decay, sustain, release bars
  - Attack, decay and release curves selection
- Oscillator section
  - Oscillator type
  - Partial count
  - Partials
- Modulation Section
  - Modulation type
  - Modulation partials count
  - Modulation partials
  - Modulation envelope
    - Modulation attack, decay, sustain, release bars
    - Modulation attack, decay and release curves selection
- Complete HTML refactoring and reorganization
- Version indicator in footer
- SCSS reorganization
- All section as modules
- JavaScript code cleanup and reorganization
- Added citation file
- Readme file reorganization and expansion

### Known Issues

- Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)
- When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
- Partials sections don't work

# 0.0.1

The first version!

### Features

- Polyphonic FM synthesizer engine implementing Tone.js PolySynth and FMSynth
- Oscilloscope
- Spectrogram
- Gain meter
- MIDI keyboard connectivity (limited to 2nd device in the list)
- MIDI note display
- MIDI to note string function
- On-screen keyboard
- Sliding menu (empty)
- Project logo
- Dark mode button (not working) and dark mode preliminary work
- Help button (not working)
- Main panel with three sections, Synth, Modulation and Effects in different colors
- 4 fully tweakable parameters in Synth section: Volume, Detune, Modulation Index, Harmonicity
- Synth section hide/show function
- 50 parameters implemented and analyzed with specified ranges in backend - not tweakable through the UI

### Known Issues

- Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)
