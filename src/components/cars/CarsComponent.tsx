import {useEffect, useState} from "react";
import {getAllCars} from "../../services/cars.services.tsx";
import {ICar} from "../../models/cars/ICar.ts";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(value => setCars(value))
    }, [cars]);
    return (
        <div>
            {
                cars.map(value => <CarComponent car={value}/>)
            }
        </div>
    );
};

export default CarsComponent;