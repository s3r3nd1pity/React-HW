import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type PostPropType = {
    post:IPost;
}

const PostComponent:FC<PostPropType> = ({post}) => {
    return (
        <div>
            <div>
                {post.id}. {post.title}
            </div>
        </div>
    );
};


export default PostComponent;