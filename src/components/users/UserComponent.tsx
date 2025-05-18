import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type UserPropType = {
    user:IUser;
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>
            <h2>{user.last_name}</h2>
        </div>
    );
};

export default UserComponent;