import {useState} from "react";

export const useFetch = <T,>(link:string):T[]=>{
    const [object, setObject] = useState<T[]>([])
    fetch(link)
        .then(value => value.json())
        .then(value => setObject(value))
    return object;
}

