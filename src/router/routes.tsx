import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {path:"/",element:<MainLayout/>, children:[
            {index:true, element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
        ]}
])