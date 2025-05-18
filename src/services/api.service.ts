import {IUserWrapper} from "../models/users/IUserWrapper.ts";
import {urlsDummy} from "../constants/urls.ts";

export const getUsers = async (pg:string): Promise<IUserWrapper> => {
    return await fetch(urlsDummy.users.allUsers + "/?skip=" + pg).then(value => value.json())
}