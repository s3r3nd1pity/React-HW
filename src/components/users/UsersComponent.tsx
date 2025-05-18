import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import UserComponent from "./UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {
    const [query] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);
    const pg = query.get("page");
    useEffect(() => {
        getUsers(pg || "1").then(value => setUsers(value.data))
    }, [query]);
    return (
        <div>
            {
                users && users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;