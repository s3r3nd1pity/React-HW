import {useEffect, useState} from "react";
import {IComment} from "../models/IComment.ts";
import {commentsList} from "../services/api.service.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentsList().then(value => setComments(value));
    }, []);

    return (
        <div className={"flex gap-4 flex-col"}>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.postId}/>)
            }
        </div>
    );
};

export default CommentsComponent;