import './App.css'
import {products} from "./data/productsList.ts";
import MyComponent from "./components/my-components/MyComponent.tsx";

function App() {

  return (
    <>
      {
        products.map((product, index)=>(
            <MyComponent product={product} key = {index}></MyComponent>
        ))
      }
    </>
  )
}

export default App
