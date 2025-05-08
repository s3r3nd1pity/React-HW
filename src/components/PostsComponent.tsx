import {useEffect, useState} from "react";
import {IPost} from "../models/IPost.ts";
import {postList} from "../services/api.services.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postList().then(value => setPosts(value));
    }, []);


    return (
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;