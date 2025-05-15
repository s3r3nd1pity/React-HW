import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={""}>home</Link></li>
                <li><Link to={"users/jsonplaceholder"}>Users - json PH</Link></li>
                <li><Link to={"users/dummyjson"}>Users - dummy json</Link></li>
                <li><Link to={"posts/jsonplaceholder"}>Posts - json PH</Link></li>
                <li><Link to={"posts/dummyjson"}>Posts - dummy json</Link></li>
                <li><Link to={"comments/jsonplaceholder"}>Comments - json PH</Link></li>
                <li><Link to={"comments/dummyjson"}>Comments - dummy json</Link></li>
            </ul>
        </div>
    );
};

export default Menu;