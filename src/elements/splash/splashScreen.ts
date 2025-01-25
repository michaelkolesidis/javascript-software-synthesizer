/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

const id = 'splash-screen';

const visited = localStorage.getItem('visited');

// the minimum duration to display the splash screen
const minDeltaMs = visited ? 1000 : 2000;

let timestamp: number;
let element: HTMLElement;

export function showSplashScreen(root: HTMLElement) {
  timestamp = new Date().getTime();

  element = document.createElement('div');
  element.id = id;
  element.innerHTML = `<img src="./assets/logo/logo_192.png" alt="" />`;

  root.appendChild(element);
}

export async function hideSplashScreen(): Promise<void> {
  return new Promise((resolve) => {
    if (!visited) {
      localStorage.setItem('visited', new Boolean(true).toString());
    }

    const now = new Date().getTime();
    const delta = now - timestamp;

    const remove = () => {
      element.remove();
      resolve();
    };

    if (delta > minDeltaMs) {
      // rendering took longer than `minDeltaMs`
      // remove splash screen element and resolve promise
      remove();
      return;
    }

    // await minDeltaMs and resolve promise
    const delay = minDeltaMs - delta;
    setTimeout(remove, delay);
    return;
  });
}
