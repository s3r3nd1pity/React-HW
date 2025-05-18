import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/users/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [query] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const page = query.get("page") || "1";
        if(page){
            const currentSkip = (+page-1)*30;
            getUsers(currentSkip.toString()).then(value => setUsers(value.users))
        }
    }, [query]);
    return (
        <div>
            {
                users && users.map(value => <UserComponent user={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersComponent;