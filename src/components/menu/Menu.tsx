import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={""}>Back to home</Link></li>
                <li><Link to={"cars/get"}>Get all cars</Link></li>
                <li><Link to={"cars/post"}>Make a new car</Link></li>
            </ul>
        </div>
    );
};

export default Menu;