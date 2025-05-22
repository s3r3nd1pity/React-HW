const FormComponent = () => {
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

    return (
        <div>
            <form>
                <input type={"text"} name={"username"}/>
                <input type={"text"} name={"password"}/>
                <input type={"number"} name={"age"}/>
                <button>send</button>
            </form>
        </div>
    );

};

export default FormComponent;