import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={"users"}>Users</Link></li>
                <li><Link to={"users/id"}>User 1</Link></li>
                <li><Link to={"posts"}>Posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;