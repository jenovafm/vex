/*
 * api-user.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';
import { User } from '../struct/user-struct';

export class ApiUser extends ApiRequest {
	constructor(
		private UserId: number
	) {
		super('users');
		this.addSubUrl(UserId.toString());
	}
}
