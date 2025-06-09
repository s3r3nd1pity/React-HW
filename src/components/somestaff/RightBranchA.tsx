import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA = () => {
    const {counterValue, increment} = useContext(MyContext)
    return (
        <div>
            RightBranchA
            <button onClick={() => {
                increment(counterValue)
                console.log(counterValue)
            }}>increase</button>
        </div>
    );
};

export default RightBranchA;