import './App.css'
import {useEffect, useState} from "react";
import {IUser} from "./models/IUser.ts";

function App() {
    console.log("o");
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);


    return (
        <>
            {
                users.map(user => (
                    <div>{user.name} </div>
                ))
            }
        </>
    )
}

export default App
