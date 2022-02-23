import "./scss/style.scss";

import * as Tone from "tone";
import * as Nexus from "./components/NexusUI";
import { Midi } from "@tonaljs/tonal";

import { Header } from "./components/header";

const container = document.getElementById("content");
const header = document.createElement("header");

const keyboardContainer = document.createElement("div");
keyboardContainer.setAttribute("id", "keyboard");

container.append(header);
container.append(keyboardContainer);
header.innerHTML = Header();

const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease(Midi.midiToNoteName(60), "8n");

// KEYBOARD
let keyboard = new Nexus.Piano("keyboard", {
  size: [1200, 100],
  mode: "button", // 'button', 'toggle', or 'impulse'
  lowNote: 21,
  highNote: 108,
});
keyboard.colorize("accent", "rgb(180, 180, 180)");
