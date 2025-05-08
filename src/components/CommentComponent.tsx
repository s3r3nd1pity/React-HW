import {IComment} from "../models/IComment.ts";
import {FC} from "react";

type CommentPropType = {
    comment:IComment;
}

const CommentComponent:FC<CommentPropType> = ({comment}) => {
    return (
        <div className={"border-2"}>
            <h2 className={"text-xl"}>{comment.name}/{comment.email}</h2>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;