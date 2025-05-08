import {IPostDummyJsonWrapper} from "../models/IPostDummyJsonWrapper.ts";
import {IPost} from "../models/IPost.ts";

const url = import.meta.env.VITE_API_BASE_URL;

export const postsList = async ():Promise<IPost[]> => {
    const wrapper: IPostDummyJsonWrapper = await fetch(url + "/posts")
        .then(value => value.json());
    return wrapper.posts;
}