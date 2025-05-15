import {useEffect, useState} from "react";
import {IPostWrapperDummy} from "../../../models/posts/dummyJson/IPostWrapperDummy.ts";
import {getPostsDummy} from "../../../services/api.service.ts";
import PostDummyJsonComponent from "./PostDummyJsonComponent.tsx";

const PostsDummyJsonComponent = () => {
    const [postsWrapper, setPostsWrapper] = useState<IPostWrapperDummy>();
    useEffect(() => {
        getPostsDummy().then(value => setPostsWrapper(value))
    }, []);
    return (
        <div>
            {
                postsWrapper && postsWrapper.posts.map(post => <PostDummyJsonComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsDummyJsonComponent;