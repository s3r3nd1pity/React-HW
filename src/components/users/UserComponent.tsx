import {FC, memo} from "react";
import {IUser} from "../../models/IUser.ts";

const UserComponent:FC<{foo:()=>void, arr:string[], user:IUser}> = memo(({arr, user}) => {
    console.log("user");
    console.log(arr)
    return (
        <div>
            {user.name}
        </div>
    );
});

export default UserComponent;