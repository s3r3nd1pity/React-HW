import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

type UserPropType = {
    user:IUser;
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{user.id}. {user.firstName} {user.lastName}, {user.age} y.o</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserComponent;