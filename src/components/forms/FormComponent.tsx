import {useForm} from "react-hook-form";
import {IForm} from "../../models/IForm.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator.ts";

const FormComponent = () => {
    //дибильный вариант контроля формы
    // const [formState, setFormState] = useState<IForm>({
    //     username: "hii",
    //     password: "",
    //     age: 0
    // })
    //
    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     let user: IForm = {
    //         username: formState.username,
    //         password: formState.password,
    //         age: formState.age
    //     }
    // }
    //
    //
    // const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, [input.name]: input.value})
    // }
    //
    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <input type={"text"} name={"username"} value={formState.username} onChange={handleInputChange}/>
    //             <input type={"text"} name={"password"} value={formState.password} onChange={handleInputChange}/>
    //             <input type={"number"} name={"age"} value={formState.age} onChange={handleInputChange}/>
    //             <button>send</button>
    //         </form>
    //     </div>
    // );

    //дибильный вариант валидации
    // const {handleSubmit, register, formState: {errors, isValid}} = useForm<IForm>({mode: "all"});
    //
    // const handler = (formData: IForm) => {
    //     console.log(formData);
    // };
    //
    // return (
    //     <div>
    //         <form onSubmit={handleSubmit(handler)}>
    //             <label>
    //                 <input type={"text"} {...register("username", {
    //                     required: true,
    //                     pattern: {
    //                         value: /\w+/,
    //                         message: "Wrong name"
    //                     },
    //                 })} />
    //                 <div>{errors.username?.message}</div>
    //             </label>
    //             <label>
    //                 <input type={"text"} {...register("password", {
    //                     required: true,
    //                     minLength: {
    //                         value: 4,
    //                         message: "Wrong password"
    //                     }
    //                 })}/>
    //                 <div>{errors.password?.message}</div>
    //             </label>
    //             <label>
    //                 <input type={"number"} {...register("age", {
    //                     required: true,
    //                     valueAsNumber: true,
    //                     min: {
    //                         value: 18,
    //                         message: "Wrong age"
    //                     }
    //                 })}/>
    //                 <div>{errors.age?.message}</div>
    //             </label>
    //
    //
    //             <button disabled={!isValid}>send</button>
    //         </form>
    //     </div>
    // );

    const {handleSubmit, register, formState:{errors}} = useForm<IForm>({mode:"all", resolver:joiResolver(userValidator)});

    const handler = (formData: IForm) => {
        console.log(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handler)}>
                <label>
                    <input type={"text"} {...register("username")} />
                    <div>{errors.username?.message}</div>
                </label>

                <label>
                    <input type={"text"} {...register("password")}/>
                    <div>{errors.password?.message}</div>
                </label>

                <label>
                    <input type={"number"} {...register("age")}/>
                    <div>{errors.age?.message}</div>
                </label>
                <button>send</button>
            </form>
        </div>
    );

};

export default FormComponent;