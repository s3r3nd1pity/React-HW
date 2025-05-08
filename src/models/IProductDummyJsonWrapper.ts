import {IProduct} from "./IProduct.ts";

export interface IProductDummyJsonWrapper {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}

