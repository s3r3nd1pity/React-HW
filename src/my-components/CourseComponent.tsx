import {FC} from "react";

type CourseType = {course:string};

const CourseComponent:FC<CourseType> = ({course}) => {
    return (
        <div>
            <h2 className={"bg-sky-50"}>This course is {course}</h2>
        </div>
    );
};

export default CourseComponent;