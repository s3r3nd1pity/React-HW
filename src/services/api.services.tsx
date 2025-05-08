import {ITodo} from "../models/ITodo.ts";

const url = import.meta.env.VITE_API_BASE_URL;

export const todosList = async ():Promise<ITodo[]> =>{
    return await fetch(url + "/todos")
        .then(value => value.json())
}
