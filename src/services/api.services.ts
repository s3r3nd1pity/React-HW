import {IProductDummyJsonWrapper} from "../models/IProductDummyJsonWrapper.ts";
import {IProduct} from "../models/IProduct.ts";

const url = import.meta.env.VITE_API_BASE_URL;

export const productsList = async ():Promise<IProduct[]>=>{
    const wrapper:IProductDummyJsonWrapper = await fetch(url + "/products")
        .then(value => value.json());
    return wrapper.products;
}