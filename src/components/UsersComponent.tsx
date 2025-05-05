import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";
import {getUsers} from "../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [data, setData] = useState<IUser | null>(null)

    useEffect(() => {
        // const fetchData = async () => {
        //     const users = await getUsers();
        //     setUsers(users);
        // }
        //
        // fetchData();
        //or

        getUsers()
            .then(value => setUsers(value));
    }, []);

    const foo = (data: IUser) => {
        setData(data);
    }

    return (
        <div>
            {
                data && <div>{JSON.stringify(data)}</div>
            }

            {
                users.map((user) => (
                    <UserComponent foo={foo} user={user} key={user.id}/>
                ))
            };
        </div>
    );
};

export default UsersComponent;