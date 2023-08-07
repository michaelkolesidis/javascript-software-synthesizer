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
