import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={"bg-pink-50 p-4 shadow-md rounded-b-lg"}>
            <ul className={"flex space-x-8 justify-center text-pink-700 font-semibold"}>
                <li>
                    <Link to={""} className={"hover:text-pink-500 transition-colors duration-200"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"login"} className={"hover:text-pink-500 transition-colors duration-200"}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to={"auth/resources"} className={"hover:text-pink-500 transition-colors duration-200"}>
                        Resources
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;