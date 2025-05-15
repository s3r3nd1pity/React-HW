import {IPost} from "../../models/posts/IPost.ts";
import {FC} from "react";

type PostPropType = {
    post:IPost;
}
const PostComponent:FC<PostPropType> = ({post}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <p className={"text-red-600"}>#{post.tags}</p>
        </div>
    );
};

export default PostComponent;