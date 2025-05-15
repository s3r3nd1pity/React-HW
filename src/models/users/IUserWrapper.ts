import {IUser} from "./IUser.ts";

export interface IUserWrapper {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}