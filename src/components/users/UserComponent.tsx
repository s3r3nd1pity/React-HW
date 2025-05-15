import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

type UserPropType={
    user:IUser;
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>
            <Link to={"cart/" + user.id} state={user}>{user.username}</Link>
        </div>
    );
};

export default UserComponent;