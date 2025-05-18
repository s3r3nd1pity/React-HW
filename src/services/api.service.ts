import {IUserWrapper} from "../models/IUserWrapper.ts";

export const getUsers = async (pg:string):Promise<IUserWrapper>=>{
    return await fetch("https://reqres.in/api/users?page=" + pg, {
        headers:{"x-api-key": "reqres-free-v1"}
    })
        .then(value => value.json())
}