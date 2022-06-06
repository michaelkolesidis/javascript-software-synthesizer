/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  GNU General Public License v3.0
 *
 */

export default function splashScreen() {
  const splashScreen = document.getElementById("splash-screen");
  const pageContainer = document.getElementById("page-container");

  if (!localStorage.getItem("visited")) {
    setTimeout(function () {
      splashScreen.style.display = "none";
      pageContainer.style.display = "block";
    }, 1000);
    localStorage.setItem("visited", new Boolean(true).toString());
  } else {
    setTimeout(function () {
      splashScreen.style.display = "none";
      pageContainer.style.display = "block";
    }, 500);
  }
}
