import {Outlet} from "react-router-dom";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <PaginationComponent />
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;