import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";


export const Todo = () => {
 const [task, setTask] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  return (
    <div>
        <TodoInput task = {task} setTask={setTask} setTodoArray={setTodoArray} todoArray={todoArray}   />
        <TodoList todoArray={todoArray} />
    </div>
  )
}
