import {urlsPH} from "./constants/urls.ts";

export const getUsers = async () => {
    return await fetch(urlsPH.users.allUsers).then(value => value.json());
}

export const getPosts = async () => {
    return await fetch(urlsPH.posts.allPosts).then(value => value.json())
}

export const getPostsOfUserById = async (id: number) => {
    return await fetch(urlsPH.posts.userPostsById(id)).then(value => value.json())
}