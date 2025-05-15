import {IUserDummy} from "../../../models/users/dummyJson/IUserDummy.ts";
import {FC} from "react";

type UserPropType ={
    user:IUserDummy;
}
const UserDummyJsonComponent:FC<UserPropType> = ({user}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{user.id}. {user.firstName} {user.lastName}, {user.age} y.o</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDummyJsonComponent;