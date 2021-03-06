/*
 * struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

export abstract class Struct<C> {
	abstract toJSON(): any;
	abstract readRawData(data: any): void;
	//static deserialize(data: any): any;
}
