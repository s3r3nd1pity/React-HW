import {useEffect, useState} from "react";
import {IPostPH} from "../../../models/posts/jsonPH/IPostPH.ts";
import {getPostsPH} from "../../../services/api.service.ts";
import PostJsonPHComponent from "./PostJsonPHComponent.tsx";

const PostsJsonPHComponent = () => {
    const [posts, setPosts] = useState<IPostPH[]>([]);
    useEffect(() => {
        getPostsPH().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(post =><PostJsonPHComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsJsonPHComponent;