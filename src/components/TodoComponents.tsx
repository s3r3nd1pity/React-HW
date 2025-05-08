import {ITodo} from "../models/ITodo.ts";
import {useEffect, useState} from "react";
import TodoComponent from "./TodoComponent.tsx";
import {todosList} from "../services/api.services.tsx";

const TodoComponents= () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        todosList().then(value => setTodos(value))
    }, []);

    return (
        <div>
            {
                todos.map(todo => (
                    <TodoComponent todo={todo} key={todo.id}/>
                ))
            }
            </div>
    );
};

export default TodoComponents;