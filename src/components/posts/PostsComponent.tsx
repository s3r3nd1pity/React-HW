import {FC, useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {getPostsOfUserById} from "../../api.services.ts";
import PostComponent from "./PostComponent.tsx";

type UserIdPropType = {
    userId: number;
}

const PostsComponent: FC<UserIdPropType> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId) {
            getPostsOfUserById(+userId).then(value => setPosts(value))
        }

    }, [userId]);
    return (
        <div>
            {
                posts.map(value => <PostComponent post={value} key={value.id}/>)
            }
        </div>
    );
};

export default PostsComponent;