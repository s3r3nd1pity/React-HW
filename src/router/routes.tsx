import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersJsonPhComponent from "../components/users/jsonPH/UsersJsonPHComponent.tsx";
import UsersDummyJsonComponent from "../components/users/dummyJson/UsersDummyJsonComponent.tsx";
import PostsJsonPhComponent from "../components/posts/jsonPH/PostsJsonPHComponent.tsx";
import PostsDummyJsonComponent from "../components/posts/dummyJson/PostsDummyJsonComponent.tsx";
import CommentsJsonPHComponent from "../components/comments/jsonPH/CommentsJsonPHComponent.tsx";
import HomeComponent from "../components/home/HomeComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <HomeComponent/>},
            {path: "users/jsonplaceholder", element: <UsersJsonPhComponent/>},
            {path: "users/dummyjson", element: <UsersDummyJsonComponent/>},
            {path: "posts/jsonplaceholder", element: <PostsJsonPhComponent/>},
            {path: "posts/dummyjson", element: <PostsDummyJsonComponent/>},
            {path: "comments/jsonplaceholder", element: <CommentsJsonPHComponent/>},
        ]
    }
])