import {FC, ReactNode} from "react";

type MyComponentPropType = {text:string; children?:ReactNode};//reactnode is every type

const MyComponent:FC<MyComponentPropType> = ({text, children})=>{
    return(
        <div className={"text-3xl font-bold underline"}>
            {text}
            {children}
        </div>
    )
}

export default MyComponent;