import {useFetch} from "../../hooks/useFetch.tsx";
import {urlsPH} from "../../constants/urls.ts";
import UserComponent from "./UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {
    const users = useFetch<IUser>(urlsPH.users.allUsers);
    return (
        <div>
            {
                users.map(value => <UserComponent user={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersComponent;