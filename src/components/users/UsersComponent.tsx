import {useEffect, useState} from "react";
import {IUserWrapper} from "../../models/users/IUserWrapper.ts";
import {getUsers} from "../../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [usersWrapper, setUsersWrapper] = useState<IUserWrapper>();
    useEffect(() => {
        getUsers().then(value => setUsersWrapper(value));
    }, []);
    return (
        <div>
            {
                usersWrapper && usersWrapper.users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;