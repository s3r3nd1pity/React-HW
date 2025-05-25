import {IProduct} from "../../models/products/IProduct.ts";
import {FC} from "react";

type ProductPropsType = {
    product:IProduct;
}

const ProductComponent:FC<ProductPropsType> = ({product}) => {
    return (
        <div className={"border-pink-300 rounded-xl p-4 shadow-sm hover:shadow-md transition"}>
            <h2 className={"text-lg font-semibold text-pink-800"}>{product.id}.{product.title}</h2>

        </div>
    );
};

export default ProductComponent;