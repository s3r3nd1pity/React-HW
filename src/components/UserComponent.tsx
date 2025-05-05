import {FC} from "react";
import {IUser} from "../models/IUser.ts";

type UserPropType = {
    user: IUser;
    foo: (user: IUser) => void;
}

const UserComponent: FC<UserPropType> = ({user, foo}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <button onClick={() => {
                foo(user);
            }}></button>
        </div>
    );
};

export default UserComponent;