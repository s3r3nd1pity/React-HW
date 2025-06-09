import {createContext} from "react";

export const init = {
    mode:"light",
    changer:(obj:string)=>{
        console.log(obj);
    }}

export const MyContext = createContext(init);

