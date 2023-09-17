import { StereoFeedbackEffect } from 'tone/build/esm/effect/StereoFeedbackEffect';
import { FeedbackEffectOptions } from 'tone/build/esm/effect/FeedbackEffect';
import { StereoEffect, StereoEffectOptions } from 'tone/build/esm/effect/StereoEffect';
import { Effect, type EffectOptions } from 'tone/build/esm/effect/Effect';
import audio from './audio';

type EffectNode =
	| Effect<EffectOptions>
	| StereoEffect<StereoEffectOptions>
	| StereoFeedbackEffect<FeedbackEffectOptions>;

export class EffectController {
	private static _effects: EffectController[] = [];

	private static _order: string[] = [];

	private static get _active() {
		return this._effects.filter((effect) => effect.active).map((effect) => effect.node);
	}

	private static _disconnectActive() {
		const synth = audio.getSynth();
		synth.disconnect();

		for (const node of this._active) {
			node.disconnect();
		}
	}

	private static _connectActive() {
		const synth = audio.getSynth();
		const nodes = [];

		for (const name of this._order) {
			const node = this._active.find((node) => node.name === name);
			if (node) nodes.push(node);
		}

		if (nodes.length) {
			synth.chain(...nodes, audio.getDestination());
			return;
		}

		synth.toDestination();
	}

	public node: EffectNode;
	public active: boolean;

	constructor(node: EffectNode) {
		this.node = node;
		this.active = false;
		EffectController._effects.push(this);
	}
	update() {
		if (this.active) {
			EffectController._order.push(this.node.name);
		} else {
			const index = EffectController._order.indexOf(this.node.name);

			if (index >= 0) {
				EffectController._order.splice(index, 1);
			}
		}
		EffectController._disconnectActive();
		EffectController._connectActive();

		console.log(...EffectController._order, EffectController._active);
	}
}
