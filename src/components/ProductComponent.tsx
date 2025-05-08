import {IProduct} from "../models/IProduct.ts";
import {FC} from "react";

type ProductPropType = {
    product: IProduct;
}

const ProductComponent: FC<ProductPropType> = ({product}) => {
    return (
        <div className={"border-1"}>
            <h2 className={"text-lg"}>{product.id}. {product.title}</h2>
            <p>Description: {product.description}</p>
            <img src={product.images[0]} alt={product.title} className={"w-100"}/>
            <p className={"text-red-600"}>Price: {product.price}$</p>
        </div>
    );
};

export default ProductComponent;