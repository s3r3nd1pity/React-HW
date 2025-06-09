import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA1 = () => {
    const {changer, mode} = useContext(MyContext)
    return (
        <div >
            RightBranchA1:
            <button className={"px-3 py-1 text-sm bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"} onClick={()=>{
                changer(mode);
            }}>Click to change mode</button>
        </div>
    );
};

export default RightBranchA1;