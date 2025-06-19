import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userActions} from "../../redux/slices/users/userSlice.tsx";
import ComplexPostComponent from "./ComplexPostComponent.tsx";
import UserComponent from "../users/UserComponent.tsx";

const ComplexComponent = () => {
    const {
        userSlice: {users, loadStateUser, userId},
        postSlice: {posts, loadStatePost},
        commentSlice: {loadStateComment}
    } = useAppSelector(state => state)
    const dispatch = useAppDispatch();

    const user1 = users.find(value => value.id === userId)

    const postsByUserId = posts.filter(value => value.userId === userId)

    if (loadStateUser && loadStatePost && loadStateComment) {
        return (
            <div>
                {
                    user1 && <div><UserComponent user={user1} key={user1.id}/></div>
                }
                <hr/>
                <p>Posts:</p>
                {
                    postsByUserId.map(value => <ComplexPostComponent post={value} key={value.id}/>)
                }

                <button onClick={() => {
                    if (userId > 1) {
                        dispatch(userActions.changeId(userId - 1))
                    }
                }} className={"px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 m-4"}>Prev
                </button>
                <button onClick={() => {
                    if (userId < users.length) {
                        dispatch(userActions.changeId(userId + 1))
                    }
                }} className={"px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 m-4"}>Next
                </button>
            </div>

        )
    } else {
        return (
            <div>You need to load data first</div>
        )
    }
};

export default ComplexComponent;