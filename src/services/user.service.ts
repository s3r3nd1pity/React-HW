import {jsonPHBaseUrl} from "../constants/urls.ts";

import axios from "axios";
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create(
    {
        baseURL: jsonPHBaseUrl,
        headers: {"Content-Type": "application/json"}
    }
)
export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>("/users");
    return data;
}

axiosInstance.interceptors.request.use((request)=>{
    request.headers.set({"x": "xx"})
    console.log(request);
    return request
})
export const saveUser = async (user:IUser):Promise<IUser>=>{
    const {data} = await axiosInstance.post<IUser>("/users", user);
    return data;
}