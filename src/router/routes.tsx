import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children:[
            {path:"users", element: <UsersPage/>},
            {path:"complex", element: <ComplexPage/>},
            {path:"posts", element: <PostsPage/>},
            {path:"comments", element: <CommentsPage/>},
        ]}
]);