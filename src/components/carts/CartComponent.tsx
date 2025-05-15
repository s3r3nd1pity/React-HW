import {ICart} from "../../models/carts/ICart.ts";
import {FC} from "react";

type CartPropType = {
    cart:ICart;
}
const CartComponent:FC<CartPropType> = ({cart}) => {
    return (
        <div className={"border"}>
            <h4>Cart no:{cart.id}. Total:{cart.total}</h4>
        </div>
    );
};

export default CartComponent;