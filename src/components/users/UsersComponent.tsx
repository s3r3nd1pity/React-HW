import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../../hooks/useFetch.tsx";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {
    const foo = useCallback(() => console.log("foo"), [])
    const arr = useMemo(() => ["HI", "BUe"], []);
    console.log("users");
    const users: IUser[] = useFetch();

    return (
        <div>
            {users.map(value => <UserComponent user={value} foo={foo} arr={arr}/>)}
        </div>
    );
};

export default UsersComponent;