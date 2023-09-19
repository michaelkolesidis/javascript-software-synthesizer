/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

export type SequencerUI = {
	rate: HTMLInputElement;
	subdivision: HTMLInputElement;
	sequence: HTMLInputElement;
	set: HTMLButtonElement;
	play: HTMLButtonElement;
	stop: HTMLButtonElement;
};

export type SequencerUIKeys = {
	[K in keyof SequencerUI]: string;
};

export const ids = <SequencerUIKeys>{
	rate: 'seq-rate',
	subdivision: 'seq-subdivision',
	sequence: 'seq-notes',
	set: 'seq-set',
	play: 'seq-play',
	stop: 'seq-stop',
};
