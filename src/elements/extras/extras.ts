/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import createSequencer from './sequencer/sequencer';

type ExtrasIds = {
  sequencer: string;
};

const ids = <ExtrasIds>{
  sequencer: 'sequencer',
};

export default function createExtras(section: HTMLElement) {
  const wrappers = Object.values(ids).reduce(
    (all, id) => {
      const wrapper = document.createElement('div');
      wrapper.id = id;

      return Object.assign(all, { [id]: wrapper });
    },
    {} as {
      [K in keyof ExtrasIds]: HTMLElement;
    }
  );

  wrappers.sequencer.append(createSequencer());
  section.append(wrappers.sequencer);
}
