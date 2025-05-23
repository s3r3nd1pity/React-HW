import {useForm} from "react-hook-form";
import {IForm} from "../../models/forms/IForm.ts";
import {makeCar} from "../../services/cars.services.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";

const CarMakerComponent = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const handler = (formData: IForm) => {
        makeCar(formData).then(() => {
            reset()
        });

    }

    return (
        <div>
            <form onSubmit={handleSubmit(handler)}>
                <label>
                    <input type={"text"} {...register("brand")} className={"border"}/>
                    <div>{errors.brand?.message}</div>
                </label>

                <label>
                    <input type={"number"} {...register("price")} className={"border"}/>
                    <div>{errors.price?.message}</div>
                </label>

                <label>
                    <input type={"number"} {...register("year")} className={"border"}/>
                    <div>{errors.year?.message}</div>
                </label>

                <button type={"submit"}
                        className={"px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"}>submit
                </button>
            </form>
        </div>
    );
};

export default CarMakerComponent;