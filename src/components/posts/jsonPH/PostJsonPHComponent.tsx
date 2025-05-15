import {IPostPH} from "../../../models/posts/jsonPH/IPostPH.ts";
import {FC} from "react";

type PostPropType = {
    post: IPostPH;
}
const PostJsonPhComponent: FC<PostPropType> = ({post}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostJsonPhComponent;