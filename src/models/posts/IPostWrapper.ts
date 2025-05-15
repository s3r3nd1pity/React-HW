import {IPost} from "./IPost.ts";

export interface IPostWrapper {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}
