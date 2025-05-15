import {IUserDummy} from "./IUserDummy.ts";

export interface IUserWrapperDummy {
	users: IUserDummy[];
	total: number;
	skip: number;
	limit: number;
}
