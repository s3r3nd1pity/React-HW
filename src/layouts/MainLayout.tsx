import LeftBranch from "../components/somestaff/LeftBranch.tsx";
import RightBranch from "../components/somestaff/RightBranch.tsx";
import {init, MyContext} from "../components/context/MyContext.tsx";
import {useState} from "react";

const MainLayout = () => {
    const [counter, setCounter] = useState<number>(init.counterValue)
    console.log('o')
    return (
        <div>
            <MyContext.Provider value={{
                counterValue:counter,
                increment:(obj)=>{
                    setCounter(++obj);
                }
            }}>

                <LeftBranch/>
                <RightBranch/>n 
            </MyContext.Provider>

        </div>
    );
};

export default MainLayout;