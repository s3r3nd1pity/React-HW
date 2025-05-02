import {IProductInterface} from "../models/product-interface.ts";
import {FC} from "react";

type ProductType = {
    product:IProductInterface;
}

const MyComponent:FC<ProductType> = ({product}) => {
    return (

            <div>
                <h2>{product.title}. {product.price} UAH</h2>
                <img src={product.image} alt={"hi"}/>
            </div>

    );
};

export default MyComponent;