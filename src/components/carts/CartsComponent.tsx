import {FC, useEffect, useState} from "react";
import {ICartWrapper} from "../../models/carts/ICartWrapper.ts";
import {getCartsByUserId} from "../../services/api.service.ts";
import CartComponent from "./CartComponent.tsx";

type UserIdPropType = {
    userId: number;
}

const CartsComponent: FC<UserIdPropType> = ({userId}) => {
    const [cartsWrapper, setCartsWrapper] = useState<ICartWrapper>();
    useEffect(() => {
        if (userId)
        {
            getCartsByUserId(userId).then(value => setCartsWrapper(value))
        }
    }, [userId]);
    return (
        <div>
            {
                cartsWrapper && cartsWrapper.carts.map(cart => <CartComponent cart={cart} key={cart.id}/>)
            }
        </div>
    );
};

export default CartsComponent;