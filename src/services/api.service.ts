import {dummyJsonBaseUrl} from "../constants/urls.ts";
import axios from "axios";
import {ILoginData} from "../models/login/ILoginData.ts";
import {IUserWithTokens} from "../models/users/IUserWithTokens.ts";
import {IProduct} from "../models/products/IProduct.ts";
import {IProductWrapper} from "../models/products/IProductWrapper.ts";
import {retriveLocalStorage} from "./helper.ts";
import {ITokenPair} from "../models/tokens/ITokenPair.ts";

const axiosInstance = axios.create(
    {
        baseURL: dummyJsonBaseUrl + "/auth",
        headers: {"Content-Type": "application/json"}
    }
)

export const login = async ({username, password, expiresInMins}: ILoginData) => {
    const {data} = await axiosInstance.post<IUserWithTokens>("/login", {username, password, expiresInMins});
    localStorage.setItem("user", JSON.stringify(data))
}

export const getAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductWrapper>("/products");
    return data.products;
}

axiosInstance.interceptors.request.use((value) => {
    if (value.method?.toLowerCase() == "get") {
        value.headers.Authorization = "Bearer " + retriveLocalStorage<IUserWithTokens>("user").accessToken;
    }
    return value;
})

export const refresh = async ()=>{
    const x = retriveLocalStorage<IUserWithTokens>("user")
    const {data:{accessToken}} = await axiosInstance.post<ITokenPair>("/refresh", {refreshToken:x.refreshToken, expiresInMins:2})
    x.accessToken = accessToken;
    localStorage.setItem("user", JSON.stringify(x));
}