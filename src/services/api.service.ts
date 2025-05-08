import {IComment} from "../models/IComment.ts";

const url = import.meta.env.VITE_API_BASE_URL;

export const commentsList = async ():Promise<IComment[]> => {
    return await fetch(url + "/comments")
        .then(value => value.json());
}