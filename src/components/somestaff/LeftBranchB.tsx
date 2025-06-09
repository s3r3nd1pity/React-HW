import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchB = () => {
    const {counterValue} = useContext(MyContext)
    return (
        <div>
            LeftBranchB
            <p>
                current counter value is {counterValue}
            </p>
        </div>
    );
};

export default LeftBranchB;