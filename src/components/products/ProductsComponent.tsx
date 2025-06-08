import {useEffect, useState} from "react";
import {getAuthProducts, refresh} from "../../services/api.service.ts";
import {IProduct} from "../../models/products/IProduct.ts";
import ProductComponent from "./ProductComponent.tsx";

const ProductsComponent = () => {
    //иницализация юзеСтейт для продуктов
    const [products, setProducts] = useState<IProduct[]>([]);
    //один раз получаем продукты, сетаем их и если ловим ошибку то вызываем рефреш токен чтобы переайти, в случает успеха
    //снова сетаем продукты
    useEffect(() => {
        getAuthProducts().then(value => setProducts(value)).catch(reason => {
            console.log(reason);
            refresh().then(() => {
                getAuthProducts().then(value => setProducts(value))
            })
        });
    }, []);
    return (
        <div className={"min-h-screen bg-pink-50 flex items-center justify-center"}>
            {
                //в случае успеха выводим все продукты
                products && products.map(value => <ProductComponent product={value} key={value.id}/>)
            }
            {
                //проверяем есть ли уже зареганый юзер и если нет то выводим предупреждение
                !localStorage.getItem("user") && <p className={"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 font-bold text-3xl"}>Sorry, you need to login first</p>
            }
        </div>
    );
};

export default ProductsComponent;