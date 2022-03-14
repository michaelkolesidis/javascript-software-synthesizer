# 0.2.5

### Changes

* Sequencer
    * Note sequence input
    * Tempo
    * Note value
    * Set sequence button
    * Play button
    * Stop button
    * 2 sequence examples (default and Funky Town)
* Styling 
* Code cleanup

### Known Issues
* Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)
* When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
* Partials sections don't work


# 0.2.4

### Changes

* Computer keyboard playbility
    * 16 notes playble (one octave + 4 notes) using keys (A-L and W-P)
    * Octave up/down (using Z,X keys)
* Amplitude envelope section 
    * Attack, decay, sustain, release bars
    * Attack, decay and release curves selection
* Oscillator section
    * Oscillator type
    * Partial count
    * Partials
* Modulation Section
    * Modulation type
    * Modulation partials count
    * Modulation partials
    * Modulation envelope
        * Modulation attack, decay, sustain, release bars
        * Modulation attack, decay and release curves selection
* Complete HTML refactoring and reorganization
* Version indicator in footer
* SCSS reorganization
* All section as modules
* JavaScript code cleanup and reorganization
* Added citation file
* Readme file reorganization and expansion

### Known Issues
* Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)
* When using the on-screen and/or the computer keyboard, if playing multiple notes, the synthesizer stops playing all notes if at least one note is released
* Partials sections don't work


# 0.0.1

The first version!

### Features

* Polyphonic FM synthesizer engine implementing Tone.js PolySynth and FMSynth
* Oscilloscope
* Spectrogram
* Gain meter
* MIDI keyboard connectivity (limited to 2nd device in the list)
* MIDI note display
* MIDI to note string function
* On-screen keyboard
* Sliding menu (empty)
* Project logo
* Dark mode button (not working) and dark mode preliminary work
* Help button (not working)
* Main panel with three sections, Synth, Modulation and Effects in different colors
* 4 fully tweakable parameters in Synth section: Volume, Detune, Modulation Index, Harmonicity
* Synth section hide/show function
* 50 parameters implemented and analyzed with specified ranges in backend - not tweakable through the UI

### Known Issues
* Only works on Chromium and WebKit based browsers (Chrome, Edge, Brave, Safari, Opera, GNOME Web etc.)