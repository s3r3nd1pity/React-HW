import {ICommentDummy} from "../../../models/comments/dummyJson/ICommentDummy.ts";
import {FC} from "react";

type CommentPropType = {
    comment: ICommentDummy;
}
const CommentDummyJsonComponent: FC<CommentPropType> = ({comment}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg"}>{comment.id}. {comment.body}</h2>
            <p className={"text-red-600"}>Likes: {comment.likes}</p>
        </div>
    );
};

export default CommentDummyJsonComponent;