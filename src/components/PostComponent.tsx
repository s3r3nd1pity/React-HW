import {IPost} from "../models/IPost.ts";
import {FC} from "react";

type PostPropType = {
    post: IPost;
}

const PostComponent: FC<PostPropType> = ({post}) => {
    return (
        <div className={"border-1"}>
            <h2 className={"text-lg"}>{post.id}. {post.title}</h2>
            <p>- {post.body}</p>
            <p className={"text-red-500"}>#{post.tags}</p>
        </div>
    );
};

export default PostComponent;