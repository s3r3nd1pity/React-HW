import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import APage from "./components/pages/APage.tsx";
import BPage from "./components/pages/BPage.tsx";

const router = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children:[
            {path:"a", element:<APage/>},
            {path:"b", element:<BPage/>},
        ]},
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>);
