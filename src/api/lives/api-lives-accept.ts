/*
 * api-lives-accept.ts
 * Created on Mon Jul 20 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesAccept extends ApiLivesInfo {
	constructor(live: (Play|number)) {
		super(live);
		this.addSubUrl('accept');
	}
}
