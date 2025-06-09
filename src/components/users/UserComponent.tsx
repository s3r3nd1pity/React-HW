import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type userPropType = {
    user:IUser
}

const UserComponent:FC<userPropType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.name}
        </div>
    );
};

export default UserComponent;