import './App.css'
import {coursesAndDurationArray} from "./data/coursesAndDurationList.ts";
import CoursesAndDurationComponent from "./my-components/CoursesAndDurationComponent.tsx";

function App() {
  return (
    <>
      {
        coursesAndDurationArray.map((course, index)=>(
            <CoursesAndDurationComponent course={course} key = {index}/>
        ))
      }
    </>
  )
}

export default App
