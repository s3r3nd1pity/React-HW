import {useEffect, useState} from "react";
import {getCommentsDummy} from "../../../services/api.service.ts";
import {ICommentWrapperDummy} from "../../../models/comments/dummyJson/ICommentWrapperDummy.ts";
import CommentDummyJsonComponent from "./CommentDummyJsonComponent.tsx";

const CommentsDummyJsonComponent = () => {
    const [commentsWrapper, setCommentsWrapper] = useState<ICommentWrapperDummy>();
    useEffect(() => {
        getCommentsDummy().then(value => setCommentsWrapper(value))
    }, []);
    return (
        <div>
            {
                commentsWrapper && commentsWrapper.comments.map(comment => <CommentDummyJsonComponent comment={comment}
                                                                                                      key={comment.id}/>)
            }
        </div>
    );
};

export default CommentsDummyJsonComponent;