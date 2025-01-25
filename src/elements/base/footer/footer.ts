/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { author, license, version } from '../../../../package.json';

const urls = {
  repo: 'https://github.com/michaelkolesidis/javascript-software-synthesizer',
  license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  releases:
    'https://github.com/michaelkolesidis/javascript-software-synthesizer/releases',
};

export default function Footer() {
  return /*html*/ `
<footer>
  <div>
    <p>
      © 2023 Made with ♥ by <a href="${urls.repo}" target="_blank">${author}</a>.
      <br>
      Licensed under the <a href="${urls.license}" target="_blank">${license}</a>.
    </p>
  </div>
  <div id="version">
    <a href="${urls.releases}" target="_blank">v.${version}</a>
  </div>
</footer>`;
}
