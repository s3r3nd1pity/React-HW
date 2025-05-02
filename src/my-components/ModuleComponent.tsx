import {FC} from "react";

type ModuleType = {
    modules:string[]
}


const ModuleComponent:FC<ModuleType> = ({modules}) => {
    return (
        <div>
            {
                modules.map((module) => (<p>{module}</p>))
            }
        </div>
    );
};

export default ModuleComponent;