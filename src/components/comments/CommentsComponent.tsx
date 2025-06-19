import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentsActions} from "../../redux/slices/comments/commentSlice.tsx";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {
    const {comments, loadStateComment} = useAppSelector(state => state.commentSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (comments.length < 1) {
            dispatch(commentsActions.loadComments())
        }
    }, []);

    return (
        <div>
            {!loadStateComment && <div>Loading...</div>}
            {
                comments && comments.map(value => <CommentComponent comment={value} key={value.id}/>)
            }
        </div>
    );
};

export default CommentsComponent;