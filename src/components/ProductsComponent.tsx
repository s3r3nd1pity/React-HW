import {useEffect, useState} from "react";
import {IProduct} from "../models/IProduct.ts";
import {productsList} from "../services/api.services.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        productsList().then(value => setProducts(value));
    }, []);

    return (
        <div>
            {
                products.map(product => <ProductComponent product={product} key={product.id}/>)
            }
        </div>
    );
};

export default ProductsComponent;