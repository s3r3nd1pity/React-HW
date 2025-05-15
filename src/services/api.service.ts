import {urlsDummy} from "../constants/urls.ts";
import {IUserWrapper} from "../models/users/IUserWrapper.ts";
import {IPostWrapper} from "../models/posts/IPostWrapper.ts";

export const getUsers = async (): Promise<IUserWrapper> => {
    return await fetch(urlsDummy.users.allUsers).then(value => value.json())
}

export const getPosts = async (): Promise<IPostWrapper> => {
    return await fetch(urlsDummy.posts.allPosts).then(value => value.json())
}