import {IPost} from "../models/IPost.ts";

const url = import.meta.env.VITE_API_BASE_URL;

export const postList = async ():Promise<IPost[]> => {
    return await fetch(url + "/posts")
        .then(value => value.json())
}