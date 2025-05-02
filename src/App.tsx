import './App.css'
import {coursesArray} from "./data/CoursesList.ts";
import CourseComponent from "./my-components/CourseComponent.tsx";

function App() {
  return (
    <>
      {
        coursesArray.map((course, index) => (
            <CourseComponent course={course} key={index}/>
        ))
      }
    </>
  )
}

export default App
