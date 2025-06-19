import {IUser} from "../../models/users/IUser.ts";
import {FC} from "react";

type UserPropsType = {
    user: IUser;
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <div>{user.id}. {user.name}</div>
        </div>
    );
};

export default UserComponent;