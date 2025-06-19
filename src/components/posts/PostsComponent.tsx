import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {postsActions} from "../../redux/slices/posts/postSlice.tsx";
import {useEffect} from "react";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const {posts, loadStatePost} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.length < 1) {
            dispatch(postsActions.loadPosts())
        }
    }, []);

    return (
        <div>
            {
                !loadStatePost && <div>Loading...</div>
            }
            {
                posts && posts.map(value => <PostComponent post={value} key={value.id}/>)
            }
        </div>
    );
};

export default PostsComponent;