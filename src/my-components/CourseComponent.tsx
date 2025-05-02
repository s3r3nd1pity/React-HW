import {ICourse} from "../models/ICourse.ts";
import {FC} from "react";
import ModuleComponent from "./ModuleComponent.tsx";

type CourseType = {
    course:ICourse;
}


const CourseComponent:FC<CourseType> = ({course}) => {
    return (
        <div className={"border-3 border-black-400"}>
            <h2>{course.title}</h2>
            <h4>Duration in month:{course.monthDuration}, in hours:{course.hourDuration}</h4>
            <div>Modules: <ModuleComponent modules={course.modules}/></div>
        </div>
    );
};

export default CourseComponent;