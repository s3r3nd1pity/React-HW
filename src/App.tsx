import './App.css'
import {coursesTitleArray} from "./data/CoursesList.ts";
import CourseComponent from "./my-components/CourseComponent.tsx";

function App() {
  return (
    <>
      {
        coursesTitleArray.map((course, index)=>(
            <CourseComponent course={course} key = {index}/>
        ))
      }
    </>
  )
}

export default App
