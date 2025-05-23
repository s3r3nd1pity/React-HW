import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import AllCarsPage from "../pages/AllCarsPage.tsx";
import CarMakerPage from "../pages/CarMakerPage.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "cars/get", element: <AllCarsPage/>},
            {path: "cars/post", element: <CarMakerPage/>},
        ]
    }
])