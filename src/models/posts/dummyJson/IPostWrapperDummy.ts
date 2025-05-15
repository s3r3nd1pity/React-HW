import {IPostDummy} from "./IPostDummy.ts";

export interface IPostWrapperDummy {
	posts: IPostDummy[];
	total: number;
	skip: number;
	limit: number;
}
