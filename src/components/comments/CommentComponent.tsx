import {IComment} from "../../models/comments/IComment.tsx";
import {FC} from "react";

type CommentPropsType = {
    comment: IComment
}

const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            {comment.id}. {comment.name}
        </div>
    );
};

export default CommentComponent;