import {useEffect, useState} from "react";
import {urlsPH} from "../constants/urls.ts";
import {IUser} from "../models/IUser.ts";

export const useFetch = ()=>{
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch(urlsPH.users.allUsers).then(value => value.json()).then(value => setUsers(value) )
    }, []);
    return users;
}