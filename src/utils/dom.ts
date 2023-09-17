import { assertInstanceOf } from './utils.js';

export function getElementById(id: string, instance = HTMLElement, fragment?: DocumentFragment) {
	const node = fragment || document;
	const element = node.getElementById(id);

	assertInstanceOf(element, instance);

	return element;
}

export function getElementsFromFragment<T extends object>(ids: T, fragment: DocumentFragment) {
	const keys = [...Object.keys(ids)] as [keyof typeof ids];

	return keys.reduce(
		(all, key) =>
			Object.assign(all, {
				[key]: fragment.getElementById(ids[key]),
			}),
		{} as {
			[K in keyof T]: HTMLElement;
		}
	);
}
