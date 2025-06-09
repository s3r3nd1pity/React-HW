import {createContext} from "react";
import {IMyContext} from "../../models/IMyContext.ts";

export const init = {
    counterValue: 0, increment: (obj: number) => {
        console.log(obj)
    }
}
export const MyContext = createContext<IMyContext>(
    init);