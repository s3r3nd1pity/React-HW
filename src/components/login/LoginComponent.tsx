import {useForm} from "react-hook-form";
import {ILoginData} from "../../models/login/ILoginData.ts";
import {login} from "../../services/api.service.ts";
import {useState} from "react";

const LoginComponent = () => {
    // выдавливаем эти хуйни для нормального бзания формы из юзформ
    const {handleSubmit, register, reset} = useForm<ILoginData>();
    //пытаемся найти юзера в лх
    const userInStorage = localStorage.getItem("user");
    const handler = (formData: ILoginData) => {
        // в логин передаем всю инфу из формы потом чистим форму и в случае если юзер не подходит то мы чистим лх
        login({
            username: formData.username,
            password: formData.password,
            expiresInMins: formData.expiresInMins
        }).then(() => reset()).catch(()=>{
            localStorage.clear();
            setCounter(counter+1);
        })

    }
    const [counter, setCounter] = useState(0);
    return (
        <div className={"min-h-screen flex items-center justify-center bg-pink-50 px-4"}>
            <form onSubmit={handleSubmit(handler)}
                  className={"w-full max-w-md bg-white p-6 rounded-2xl shadow-xl space-y-4 border border-pink-200"}>
                <label className={"w-screen"}>
                    <input type={"text"} {...register("username")} placeholder={"username"}
                           className={"w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"}/>
                </label>
                <label className={"w-screen"}>
                    <input type={"password"} {...register("password")} placeholder={"password"}
                           className={"w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"}/>

                </label>
                <label className={"w-screen"}>
                    <input type={"number"} {...register("expiresInMins")} placeholder={"expires in mins for token"}
                           className={"w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"}/>
                </label>
                <button type={"submit"}
                        className={"w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-xl transition duration-200"}>Send
                </button>
                {
                    !userInStorage && counter!=0 && <p>Sorry, you're not in data base</p>
                }
                {
                    userInStorage && <p>Successful login as {JSON.parse(userInStorage).username}!</p>
                }
            </form>
        </div>
    );
};

export default LoginComponent;