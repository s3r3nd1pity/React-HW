import {ICommentPH} from "../../../models/comments/jsonPH/ICommentPH.ts";
import {FC} from "react";

type CommentPropType = {
    comment: ICommentPH;
}
const CommentJsonPhComponent: FC<CommentPropType> = ({comment}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{comment.id}. {comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentJsonPhComponent;