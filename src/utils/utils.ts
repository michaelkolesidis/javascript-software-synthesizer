export function assertNotNull(value: unknown): asserts value is NonNullable<typeof value> {
	if (value === null) throw new Error('Nope');
}

export function assertInstanceOf<T>(element: unknown, expected: new () => T): asserts element is T {
	if (!element || !(element instanceof expected)) {
		const received = !element ? 'null' : element.constructor.name;
		throw new Error(`Expected element to be a ${expected.name}, but was ${received}`);
	}
}

export const scale = (inNum: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
	if (inMin === inMax) {
		return outMin;
	}
	return ((inNum - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const capitalizeString = (str: string, lowerRest = true): string =>
	str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

export const capitalizeSlug = (str: string): string =>
	str
		.split('-')
		.map((word) => capitalizeString(word))
		.join(' ');

export const throttle = (func: (...args: any[]) => unknown, ms: number) => {
	let throttled: boolean;
	return function wait(this: any, ...args: any[]) {
		if (!throttled) {
			func.apply(this, args);
			throttled = true;
			setTimeout(() => {
				throttled = false;
			}, ms);
		}
	};
};
