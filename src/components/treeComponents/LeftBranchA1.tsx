import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchA1 = () => {
    const {mode} = useContext(MyContext)
    return (
        <div>LeftBranchA1: Now mode is {mode}</div>
    )


};

export default LeftBranchA1;