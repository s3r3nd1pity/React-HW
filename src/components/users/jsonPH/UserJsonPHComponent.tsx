import {IUserPH} from "../../../models/users/jsonPH/IUserPH.ts";
import {FC} from "react";

type UserPropType = {
    user:IUserPH;
}
const UserJsonPhComponent:FC<UserPropType> = ({user}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{user.id}. {user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserJsonPhComponent;