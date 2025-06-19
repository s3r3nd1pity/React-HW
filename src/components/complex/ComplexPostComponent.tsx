import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {FC} from "react";
import {PostPropsType} from "../../models/posts/PostPropsType.tsx";
import PostComponent from "../posts/PostComponent.tsx";
import CommentComponent from "../comments/CommentComponent.tsx";

const ComplexPostComponent: FC<PostPropsType> = ({post}) => {
    const {comments} = useAppSelector(state => state.commentSlice)

    const commentsByPostId = comments.filter(value => value.postId === post.id)

    return (
        <div>
            <div><br/> <PostComponent post={post} key={post.id}/> Comments:</div>
            <div>{
                commentsByPostId.map(value => <CommentComponent comment={value} key={value.id}/>)
            }</div>
        </div>
    );
};

export default ComplexPostComponent;