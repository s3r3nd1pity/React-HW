import CartsComponent from "../components/carts/CartsComponent.tsx";
import {useParams} from "react-router-dom";

const CartPage = () => {
    const {userId} = useParams();
    return (
        <div>
            {userId && <CartsComponent userId={+userId}/>}
        </div>
    );
};

export default CartPage;