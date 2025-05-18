import {IUser} from "./IUser.ts";

export interface IUserWrapper {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: IUser[];
	support: ISupport;
}

export interface ISupport {
	url: string;
	text: string;
}