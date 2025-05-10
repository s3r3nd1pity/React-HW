import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import SingleUserDetailsPage from "../pages/SingleUserDetailsPage.tsx";

export const routes = createBrowserRouter([
    {path:"/",element:<MainLayout/>, children:[
            {index:true, element:<HomePage/>},
            {path:"users", element:<UsersPage/>, children:[
                    {path:"posts/:userId",element:<PostsPage/>}
                ]},
            {path:"users/details", element:<SingleUserDetailsPage/>},
            {path:"posts", element:<PostsPage/>},
        ]}
])