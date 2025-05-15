import {ICart} from "./ICart.ts";

export interface ICartWrapper {
	carts: ICart[];
	total: number;
	skip: number;
	limit: number;
}
