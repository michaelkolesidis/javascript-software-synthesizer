export function assertInstanceOf<T>(element: unknown, expected: new () => T): asserts element is T {
	if (!element || !(element instanceof expected)) {
		const received = !element ? 'null' : element.constructor.name;
		throw new Error(`Expected element to be a ${expected.name}, but was ${received}`);
	}
}

export function getElementById(id: string, instance = HTMLElement, fragment?: DocumentFragment) {
	const node = fragment || document;
	const element = node.getElementById(id);

	assertInstanceOf(element, instance);

	return element;
}

export function keysToIdsDict<Keys extends string>(keys: readonly string[]) {
	return keys.reduce((all, id) => Object.assign(all, { [id]: id }), {}) as Record<Keys, string>;
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
