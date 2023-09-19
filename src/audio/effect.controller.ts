/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { StereoFeedbackEffect } from 'tone/build/esm/effect/StereoFeedbackEffect';
import { type FeedbackEffectOptions } from 'tone/build/esm/effect/FeedbackEffect';
import { StereoEffect, type StereoEffectOptions } from 'tone/build/esm/effect/StereoEffect';
import { Effect, type EffectOptions } from 'tone/build/esm/effect/Effect';

import audio from './audio.js';

type EffectNode =
	| Effect<EffectOptions>
	| StereoEffect<StereoEffectOptions>
	| StereoFeedbackEffect<FeedbackEffectOptions>;

export class EffectController {
	private static _effects: EffectController[] = [];

	private static _activeKeys: string[] = [];

	private static get _activeNodes() {
		return this._effects.filter((effect) => effect.active).map((effect) => effect.node);
	}

	private static _disconnectActive() {
		const synth = audio.getSynth();
		synth.disconnect();

		for (const node of this._activeNodes) {
			node.disconnect();
		}
	}

	private static _connectActive() {
		const synth = audio.getSynth();
		const nodes = [];

		for (const name of this._activeKeys) {
			const node = this._activeNodes.find((node) => node.name === name);
			if (node) nodes.push(node);
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
