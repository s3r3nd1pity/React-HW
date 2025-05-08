import {IPost} from "../models/IPost.ts";
import {FC} from "react";

type PostPropType = {
    post:IPost;
}

const PostComponent:FC<PostPropType> = ({post}) => {
    return (
        <div className={"font-mono border-1 border-black-200"}>

                <h2 className={"text-lg"}>{post.id}. {post.title}</h2>
                <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;