import {useEffect, useState} from "react";
import {ICommentPH} from "../../../models/comments/jsonPH/ICommentPH.ts";
import {getCommentsPH} from "../../../services/api.service.ts";
import CommentJsonPHComponent from "./CommentJsonPHComponent.tsx";

const CommentsJsonPHComponent = () => {
    const [comments, setComments] = useState<ICommentPH[]>([]);
    useEffect(() => {
        getCommentsPH().then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentJsonPHComponent comment={comment} key={comment.id}/> )
            }
        </div>
    );
};

export default CommentsJsonPHComponent;