import {useEffect, useState} from "react";
import {IPostWrapper} from "../../models/posts/IPostWrapper.ts";
import {getPosts} from "../../services/api.service.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [postsWrapper, setPostsWrapper] = useState<IPostWrapper>();
    useEffect(() => {
        getPosts().then(value => setPostsWrapper(value))
    }, []);
    return (
        <div>
            {
                postsWrapper && postsWrapper.posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;