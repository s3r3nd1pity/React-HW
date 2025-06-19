import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/users/userSlice.tsx";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const {users, loadStateUser} = useAppSelector(state => state.userSlice)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length < 1) {
            dispatch(userActions.loadUsers())
        }
    }, []);
    return (
        <div>
            {!loadStateUser && <div>Loading...</div>}
            {
                users.map(value => <UserComponent user={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersComponent;