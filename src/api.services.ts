import {urlsPH} from "./constants/urls.ts";

export const getUsers = async ()=>{
    return await fetch(urlsPH.users.allUsers).then(value => value.json());
}