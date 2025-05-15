import {ICommentPH} from "../models/comments/jsonPH/ICommentPH.ts";
import {ICommentWrapperDummy} from "../models/comments/dummyJson/ICommentWrapperDummy.ts";
import {IPostPH} from "../models/posts/jsonPH/IPostPH.ts";
import {IPostWrapperDummy} from "../models/posts/dummyJson/IPostWrapperDummy.ts";
import {IUserPH} from "../models/users/jsonPH/IUserPH.ts";
import {IUserWrapperDummy} from "../models/users/dummyJson/IUserWrapperDummy.ts";
import {urlsDummy, urlsPH} from "../constants/urls.ts";

export const getCommentsPH = async ():Promise<ICommentPH[]>=>{
    return await fetch(urlsPH.comments.allComments).then(value => value.json());
}

export const getCommentsDummy = async ():Promise<ICommentWrapperDummy>=>{
    return await fetch(urlsDummy.comments.allComments).then(value => value.json());
}

export const getPostsPH = async ():Promise<IPostPH[]>=>{
    return await fetch(urlsPH.posts.allPosts).then(value => value.json());
}

export const getPostsDummy = async ():Promise<IPostWrapperDummy>=>{
    return await fetch(urlsDummy.posts.allPosts).then(value => value.json());
}

export const getUsersPH = async ():Promise<IUserPH[]>=>{
    return await fetch(urlsPH.users.allUsers).then(value => value.json());
}

export const getUsersDummy = async ():Promise<IUserWrapperDummy>=>{
    return await fetch(urlsDummy.users.allUsers).then(value => value.json());
}