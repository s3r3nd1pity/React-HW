import {IProduct} from "./IProduct.ts";

export interface IProductWrapper {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}
