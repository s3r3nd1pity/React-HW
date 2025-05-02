import {FC} from "react";
import {ICoursesAndDuration} from "../models/ICoursesAndDuration.ts";

type CoursePropType = {
    course:ICoursesAndDuration;
}

const CoursesAndDurationComponent:FC<CoursePropType> = ({course}) => {
    return (
        <div className={"bg-sky-950"}>
            <h2 className={"text-shadow-md"}>{course.title}</h2>
            <h3>Course duration is {course.monthDuration} month</h3>
        </div>
    );
};

export default CoursesAndDurationComponent;