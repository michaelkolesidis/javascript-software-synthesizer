import React from "react";
import { Piano } from "react-nexusui";
import * as Tone from "tone";

export default function Keyboard() {
  const synth = new Tone.Synth().toDestination();

  // const triggerKeyPress = note => {
  //   synth.triggerAttackRelease(note, '8n')
  // }

  return (
    <div className="Keyboard">
      <Piano
        size={[1200, 80]}
        mode={"button"}
        lowNote={21}
        highNote={108}
        onReady={(nexusPiano) => {
          console.warn(nexusPiano);
        }}
        onChange={() => {
          console.log("changed");

          synth.triggerAttackRelease("C4", "8n");
        }}
      />
    </div>
  );
}
