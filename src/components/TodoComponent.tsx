import {ITodo} from "../models/ITodo.ts";
import {FC} from "react";

type TodoPropType = {
    todo:ITodo;
}

const TodoComponent:FC<TodoPropType> = ({todo}) => {
    return (
        <div>
            <h2 className={"text-red-900"}>{todo.id}{todo.title}</h2>
            <h4>Is complete:{todo.completed}</h4>
        </div>
    );
};

export default TodoComponent;