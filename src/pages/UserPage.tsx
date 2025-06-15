import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../redux/slices/users/userSlice.tsx";
import {useParams} from "react-router-dom";

const UserPage = () => {
    const {id} = useParams()
    const {user} = useAppSelector(state => state.userSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(id)
        {
            dispatch(userActions.loadUser(id))
        }
    }, [id]);
    return (
        <div>
            {
                user && <div>{user.id}. {user.name}</div>
            }
        </div>
    );
};

export default UserPage;