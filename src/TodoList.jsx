import { useState } from "react";
import Button from "./Button";

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  // console.log(task, 'task......');

  const addTodo = ()=>{
    // alert('hchch')
    if (task == ""){
      return alert("Cannot Add an empty value")
    }
     setTodoArray([...todoArray, {task, id:todoArray.length + 1, completed: false}])
    setTask('')
    console.log(todoArray);
    
    
  }
  
  return (
    <div>
    <input type="text"
    value={task}
    onChange={(e)=> setTask(e.target.value)}
    />
    {/* <button onClick={addTodo}>Add</button> */}
    <Button text={"Add"} alertme={addTodo} />

    <div>
      <h3>Todo Lists</h3>
      {todoArray.map((todo)=>(
        <ul key={todo.id}>
          <li>{todo.id}. {todo.task}  {todo.completed?"✅" : "❌"}</li>
        </ul>
      ))}
    </div>
    </div>
  )
}
