import {FC} from "react";
import {IUser} from "../../models/users/IUser.ts";

type UserPropType = {
    user:IUser;
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>
            <h2 className={"text-lg font-semibold"}>{user.id}. {user.firstName} {user.lastName}</h2>
        </div>
    );
};

export default UserComponent;