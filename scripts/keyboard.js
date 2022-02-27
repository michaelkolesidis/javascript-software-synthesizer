export default function keyboard() {
    new Nexus.Piano("#keyboard", {
        size: [1200, 100],
        mode: "button", // 'button', 'toggle', or 'impulse'
        lowNote: 21,
        highNote: 108,
      });
      keyboard.colorize("accent", "rgb(180, 180, 180)");
}