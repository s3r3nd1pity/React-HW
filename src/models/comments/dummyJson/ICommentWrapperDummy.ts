import {ICommentDummy} from "./ICommentDummy.ts";

export interface ICommentWrapperDummy {
	comments: ICommentDummy[];
	total: number;
	skip: number;
	limit: number;
}
