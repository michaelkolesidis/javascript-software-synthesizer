/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import Nexus from 'nexusui2';

import CollapsibleComponent, {
  type TCollapsibleComponent,
} from '../../components/collapsibleComponent.js';

import { capitalizeString } from '../../utils/utils.js';
import { Color } from '../../utils/enums.js';

import createSynthesizer from './synthesizer/synthesizer.js';
import createModulator from './modulation/modulation.js';
import createEffects from './effects/effects.js';

const ids = {
  synthesizer: 'synthesizer',
  modulation: 'modulation',
  effects: 'effects',
} as const;

const createPanelTitle = (text: string) => {
  const element = document.createElement('div');
  element.classList.add('panel-title');

  const heading = document.createElement('h2');
  heading.textContent = text;

  element.append(heading);
  return element;

  // return `
  // <div class="panel-title">
  // 	<h2>${capitalizeString(id)}</h2>
  // </div>`;
};

export const createPanelSubtitle = (text: string) => {
  const element = document.createElement('div');
  element.classList.add('panel-subtitle');

  const heading = document.createElement('h3');
  heading.textContent = text;

  element.append(heading);
  return element;

  // return `
  // <div class="panel-title">
  // 	<h2>${capitalizeString(id)}</h2>
  // </div>`;
};

export default function createPanels(section: HTMLElement) {
  // create and append surrounding div elements
  const panels = Object.values(ids).reduce(
    (all, id) => {
      const panel = document.createElement('div');
      panel.id = id;
      panel.classList.add('panel');

      const wrapper = document.createElement('div');
      wrapper.classList.add('panel-wrapper');

      wrapper.append(panel);
      section.append(wrapper);

      return Object.assign(all, { [id]: panel });

      // return
      // 	<div class="panel-wrapper"> `
      //		<div id="${id}" class="panel"></div>
      //	</div>`;
    },
    {} as {
      readonly [K in keyof typeof ids]: HTMLElement;
    }
  );

  // create title elements
  const titles = Object.values(ids).reduce(
    (all, id) =>
      Object.assign(all, { [id]: createPanelTitle(capitalizeString(id)) }),
    {} as {
      readonly [K in keyof typeof ids]: HTMLElement;
    }
  );

  // create collapsible components
  const components = Object.values(ids).reduce(
    (all, id) => {
      const component = CollapsibleComponent(id);
      return Object.assign(all, { [id]: component });
    },
    {} as {
      readonly [K in keyof typeof ids]: TCollapsibleComponent;
    }
  );

  // append dom elements
  // @todo darkMode
  Nexus.colors.accent = Color.cyan;
  components.synthesizer.appendtToTitle(titles.synthesizer);
  components.synthesizer.appendToBody(createSynthesizer());

  Nexus.colors.accent = Color.green;
  components.modulation.appendtToTitle(titles.modulation);
  components.modulation.appendToBody(createModulator());

  Nexus.colors.accent = Color.yellow;
  components.effects.appendtToTitle(titles.effects);
  components.effects.appendToBody(createEffects());

  panels.synthesizer.append(components.synthesizer.fragment);
  panels.modulation.append(components.modulation.fragment);
  panels.effects.append(components.effects.fragment);

  //	<div class="panel-wrapper">;
  //		<div id="${id}" class="panel">
  // 			<label for="${id}-content-toggle">${panelTitle}</label>
  //			<input id="${id}-content-toggle" type="checkbox" hidden>
  //			<div class="collapsible-wrapper">
  // 				<div class="collapsible-content">
  // 					${...panelChildren}
  // 				</div>
  // 			</div>
  // 		</div>;
  // 	</div>;
}
