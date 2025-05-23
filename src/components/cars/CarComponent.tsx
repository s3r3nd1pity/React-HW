import {ICar} from "../../models/cars/ICar.ts";
import {FC} from "react";

type CarPropsType = {
    car:ICar;
}


const CarComponent:FC<CarPropsType> = ({car}) => {
    return (
        <div className={"border"}>
            <h2 className={"text-lg font-semibold"}>{car.id}. {car.brand}</h2>
            <p className={"text-red-600"}>{car.price}</p>
        </div>
    );
};

export default CarComponent;