/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 */

import CollapsibleComponent from '../../../components/collapsibleComponent';
import { capitalizeString } from '../../../utils/utils';

export const id = 'effects';

const panelTitle = `
<div class="panel-title">
    <h2>${capitalizeString(id)}</h2>
</div>`;

const panelBody = `
@todo`;

export default function Effects() {
	return /*html*/ `
<div id="${id}" class="panel">
    ${CollapsibleComponent(id, panelTitle, panelBody)}
</div>`;
}