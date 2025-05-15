import {urlsDummy} from "../constants/urls.ts";
import {IUserWrapper} from "../models/users/IUserWrapper.ts";
import {ICartWrapper} from "../models/carts/ICartWrapper.ts";

export const getUsers = async ():Promise<IUserWrapper> => {
    return await fetch(urlsDummy.users.allUsers).then(value => value.json())
}

export const getCartsByUserId = async (id: number):Promise<ICartWrapper> => {
    return await fetch(urlsDummy.carts.byUserId(id)).then(value => value.json())
}