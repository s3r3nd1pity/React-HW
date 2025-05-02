import {ISimpson} from "../models/ISimpson.ts";
import {FC} from "react";

type SimpsonType = {
    simpson:ISimpson;
    children:string;
}

const CharacterComponent:FC<SimpsonType> = ({simpson, children}) => {
    return (
        <div className={"border-2 border-indigo-200"}>
            <h2>{simpson.name} {simpson.surname}</h2>
            <h4>Вік: {simpson.age}</h4>
            <p>{children}</p>
            <img src={simpson.photo} alt={simpson.name} className={"w-50"}/>
        </div>
    );
};

export default CharacterComponent;