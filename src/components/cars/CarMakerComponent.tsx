import {useForm} from "react-hook-form";
import {IForm} from "../../models/forms/IForm.ts";
import {makeCar} from "../../services/cars.services.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";

const CarMakerComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IForm>({mode:"all", resolver: joiResolver(carValidator)});

    const handler = (formData: IForm) => {
        makeCar({brand: formData.brand, price: formData.price, year: formData.year}).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handler)}>
                <label>
                    <input type={"text"} {...register("brand")}/>
                    <div>{errors.brand?.message}</div>
                </label>

                <label>
                    <input type={"number"} {...register("price")}/>
                    <div>{errors.price?.message}</div>
                </label>

                <label>
                    <input type={"number"} {...register("year")}/>
                    <div>{errors.year?.message}</div>
                </label>

                <button type={"submit"}>submit</button>
            </form>
        </div>
    );
};

export default CarMakerComponent;