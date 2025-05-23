import {useEffect, useState} from "react";
import {getAllCars} from "../../services/cars.services.ts";
import {ICar} from "../../models/cars/ICar.ts";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(value => setCars(value))
    }, []);
    return (
        <div>
            {
                cars.map(value => <CarComponent car={value} key={value.id}/>)
            }
        </div>
    );
};

export default CarsComponent;