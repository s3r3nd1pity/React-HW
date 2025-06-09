import LeftBranch from "../components/treeComponents/LeftBranch.tsx";
import RightBranch from "../components/treeComponents/RightBranch.tsx";
import {init, MyContext} from "../components/context/MyContext.tsx";
import {useState} from "react";

const MainLayout = () => {
    const [theme, setTheme] = useState<string>(init.mode)
    return (
        <div className={theme === "light"? "bg-white-900 text-black w-screen h-screen" : "bg-gray-900 text-white w-screen h-screen"}>
            <MyContext.Provider value={{mode: theme, changer:(obj)=> {
                if(obj == "light"){
                    setTheme("dark");
                }
                else{
                    setTheme("light")
                }
            }}}>
                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>

        </div>
    );
};

export default MainLayout;