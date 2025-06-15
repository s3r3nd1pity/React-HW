import {userActions} from "../redux/slices/users/userSlice.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";

const UsersPage = () => {

    const {users, loadState} = useAppSelector(state => state.userSlice)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>Loading</div>}
            {
                users.map(value => <div>{value.id}. {value.name}</div>)
            }
        </div>
    );
};

export default UsersPage;