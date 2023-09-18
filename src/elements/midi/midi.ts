export const midiDisplayId = 'midi-display';

// @todo dry
// ../displays/display.ts
const createWrapper = (text: string, element: HTMLElement) => {
	const label = document.createElement('p');
	label.textContent = text;

	const wrapper = document.createElement('div');
	wrapper.append(label, element);

	return wrapper;

	// return `
	// 	<div>
	// 		<p>${label}</p>
	// 		<div>
	// 			${element}
	// 		</div>
	// 	</div>`
};

export default function createMidiDisplay(section: HTMLElement) {
	const element = document.createElement('div');
	element.id = midiDisplayId;

	const wrapper = createWrapper('MIDI', element);
	section.append(wrapper);
}