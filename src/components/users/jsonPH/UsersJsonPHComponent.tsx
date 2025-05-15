import {useEffect, useState} from "react";
import {IUserPH} from "../../../models/users/jsonPH/IUserPH.ts";
import {getUsersPH} from "../../../services/api.service.ts";
import UserJsonPHComponent from "./UserJsonPHComponent.tsx";

const UsersJsonPhComponent = () => {
    const [users, setUsers] = useState<IUserPH[]>([]);
    useEffect(() => {
        getUsersPH().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(user => <UserJsonPHComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersJsonPhComponent;