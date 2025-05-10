import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../api.services.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);

    return (
        <div>
            {
                users.map(user =><UserComponent user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;