/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import { assertInstanceOf } from '../utils/utils.js';

const selectors = {
	toggle: 'collapsible-toggle',
	wrapper: 'collapsible-wrapper',
	content: 'collapsible-content',
};

class Component {
	private _title: HTMLElement;

	private _body: HTMLElement;

	public fragment: DocumentFragment;

	constructor(title: HTMLElement, toggle: HTMLElement, wrapper: HTMLElement) {
		this.fragment = new DocumentFragment();
		this.fragment.append(title, toggle, wrapper);

		const body = wrapper.children[0];
		assertInstanceOf(body, HTMLElement);

		this._title = title;
		this._body = body;
	}

	set title(value: string) {
		this._title.innerHTML = value;
	}
	get title(): HTMLElement {
		return this._title;
	}
	set body(value: string) {
		this._body.innerHTML = value;
	}
	get body(): HTMLElement {
		return this._body;
	}
	appendtToTitle(element: HTMLElement) {
		this.title.append(element);
	}
	appendToBody(element: HTMLElement | DocumentFragment) {
		this.body.append(element);
	}
}

export default function CollapsibleComponent(id: string, title?: HTMLElement, ...body: HTMLElement[]) {
	const identifier = `${id}-content-toggle`;

	const label = document.createElement('label');
	label.setAttribute('for', identifier);

	const toggle = document.createElement('input');
	toggle.id = identifier;
	toggle.type = 'checkbox';
	toggle.classList.add(selectors.toggle);
	toggle.setAttribute('hidden', 'hidden');

	const [wrapper, content] = [selectors.wrapper, selectors.content].map((selector) => {
		const element = document.createElement('div');
		element.classList.add(selector);
		return element;
	});

	if (title) {
		label.append(title);
	}

	content.append(...body);
	wrapper.append(content);

	return new Component(label, toggle, wrapper);

	//	return `
	//		<label for="${identifier}">
	// 			${title}
	//		</label>
	//		<input id="${identifier}" type="checkbox" hidden />
	//		<div class="${selectors.wrapper}">
	//			<div class="${selectors.content}">
	// 				${body}
	// 			</div>
	//		</div>`;
}

export type TCollapsibleComponent = Component;
