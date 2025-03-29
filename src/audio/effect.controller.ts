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

import { StereoFeedbackEffect } from 'tone/build/esm/effect/StereoFeedbackEffect';
import { type FeedbackEffectOptions } from 'tone/build/esm/effect/FeedbackEffect';
import {
  StereoEffect,
  type StereoEffectOptions,
} from 'tone/build/esm/effect/StereoEffect';
import { Effect, type EffectOptions } from 'tone/build/esm/effect/Effect';

import { AutoFilter, Chorus, Tremolo } from './tone.js';
import audio from './audio.js';

type EffectNode =
  | Effect<EffectOptions>
  | StereoEffect<StereoEffectOptions>
  | StereoFeedbackEffect<FeedbackEffectOptions>;

export class EffectController {
  private static _effects: EffectController[] = [];

  private static _activeKeys: string[] = [];

  private static get _activeNodes() {
    return this._effects
      .filter((effect) => effect.active)
      .map((effect) => effect.node);
  }

  private static _disconnectActive() {
    const synth = audio.getSynth();
    synth.disconnect();

    for (const node of this._activeNodes) {
      // some effects require to call stop()
      if (
        node instanceof AutoFilter ||
        node instanceof Chorus ||
        node instanceof Tremolo
      ) {
        node.stop();
      }

      node.disconnect();
    }
  }

  private static _connectActive() {
    const synth = audio.getSynth();
    const nodes = [];

    for (const name of this._activeKeys) {
      // name of node was added by instance on update
      const node = this._activeNodes.find((node) => node.name === name);
      if (node) nodes.push(node);

      // some effects require to call start()
      if (
        node instanceof AutoFilter ||
        node instanceof Chorus ||
        node instanceof Tremolo
      ) {
        node.start();
      }
    }

    // chain active effects and return
    if (nodes.length) {
      synth.chain(...nodes, audio.getDestination());
      return;
    }

    // fallback when there are no active effects
    synth.toDestination();
  }

  public node: EffectNode;
  public active: boolean;

  constructor(node: EffectNode) {
    this.node = node;
    this.active = false;

    // store disconnected effect in static class
    EffectController._effects.push(this);
  }

  update() {
    if (this.active) {
      // push effect name as string to the array of active effects
      EffectController._activeKeys.push(this.node.name);
    } else {
      // find effect name
      const index = EffectController._activeKeys.indexOf(this.node.name);

      // remove effect from the array of active effects
      if (index >= 0) {
        EffectController._activeKeys.splice(index, 1);
      }
    }

    // update audio context / chained nodes
    EffectController._disconnectActive();
    EffectController._connectActive();

    // console.log(...EffectController._order, EffectController._active);
  }
}
