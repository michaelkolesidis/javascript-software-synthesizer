import React from "react";
import logo from "./assets/logo/jss-logo.png";

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>JavaScript Software Synthesizer</div>
    </div>
  );
}
