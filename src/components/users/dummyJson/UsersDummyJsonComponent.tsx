import {useEffect, useState} from "react";
import {IUserWrapperDummy} from "../../../models/users/dummyJson/IUserWrapperDummy.ts";
import {getUsersDummy} from "../../../services/api.service.ts";
import UserDummyJsonComponent from "./UserDummyJsonComponent.tsx";

const UsersDummyJsonComponent = () => {
    const [usersWrapper, setUsersWrapper] = useState<IUserWrapperDummy>();
    useEffect(() => {
        getUsersDummy().then(value => setUsersWrapper(value));
    }, []);
    return (
        <div>
            {
                usersWrapper && usersWrapper.users.map(user => <UserDummyJsonComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersDummyJsonComponent;