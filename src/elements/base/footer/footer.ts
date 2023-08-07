/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

const identifier = 'footer';

const urls = {
	repo: 'https://github.com/michaelkolesidis/javascript-software-synthesizer',
	license: 'https://www.gnu.org/licenses/agpl-3.0.html',
	release: 'https://github.com/michaelkolesidis/javascript-software-synthesizer/releases',
};

export default function Footer() {
	return /*html*/ `
<footer id="${identifier}">
  <div>
    <p>
      © 2023 Made with ♥ by <a href="${urls.repo}" target="_blank">Michael Kolesidis</a>.
      <br>
      Licensed under the <a href="${urls.license}" target="_blank">GNU AGPL</a>.
    </p>
  </div>
  <div id="version">
    <a href="${urls.release}" target="_blank">v.2.0.3
    </a>
  </div>
</footer>`;
}
