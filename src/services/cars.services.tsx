import axios from "axios";
import {ICar} from "../models/cars/ICar.ts";
import {ICarMake} from "../models/cars/ICarMake.ts";

const axiosInstance = axios.create(
    {
        baseURL: "http://owu.linkpc.net/carsAPI/v1",
        headers: {"Content-Type": "application/json"}
    }
);
export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get("/cars");
    return data;
}

export const makeCar = async (car: ICarMake): Promise<ICarMake> => {
    const {data} = await axiosInstance.post("/cars", car);
    return data;
}