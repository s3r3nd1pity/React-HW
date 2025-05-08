import {IPost} from "./IPost.ts";

export interface IPostDummyJsonWrapper {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}