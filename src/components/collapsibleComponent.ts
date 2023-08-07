export default function CollapsibleComponent (id: string, title: string, body: string) {
	const selector = {
		id: `${id}-content-input`,
		input: 'collapsible-input',
		wrapper: 'collapsible-wrapper',
		content: 'collapsible-content',
	}

	return `
<label for="${selector.id}">
	${title}
</label>
<input id="${selector.id}" class="${selector.input}" type="checkbox" />
<div class="${selector.wrapper}">
	<div class="${selector.content}">
		${body}
	</div>
</div>`;
}