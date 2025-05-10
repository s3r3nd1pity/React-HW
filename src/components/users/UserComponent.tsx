import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";

type UserPropType = {
    user: IUser;
}
const UserComponent: FC<UserPropType> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Link to={"details"} state={user}>{user.username}</Link>

            <button onClick={()=>{
                navigate("posts/" + user.id, {state:user})
            }}>go to details</button>
        </div>
    );
};

export default UserComponent;