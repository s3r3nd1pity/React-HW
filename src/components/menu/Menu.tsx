import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={""}>Home</Link></li>
                <li><Link to={"users"}>Users</Link></li>
                <li><Link to={"posts"}>Posts</Link></li>
                <li><Link to={"comments"}>Comments</Link></li>
                <li><Link to={"complex"}>Certain user</Link></li>
            </ul>
        </div>
    );
};

export default Menu;