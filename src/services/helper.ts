export const retriveLocalStorage = <T>(key:string)=>{
    const object = localStorage.getItem(key);
    if (object){
        return JSON.parse(object) as T;
    }
    return {} as T
}