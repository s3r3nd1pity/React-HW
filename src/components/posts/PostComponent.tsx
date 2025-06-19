import {FC} from "react";
import {PostPropsType} from "../../models/posts/PostPropsType.tsx";


const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title}
        </div>
    );
};

export default PostComponent;