import Button from "../Button";


export const TodoInput = ({task, setTodoArray, todoArray, setTask}) => {

     const addTodo = ()=>{
    // alert('hchch')
    if (task == ""){
      return alert("Cannot Add an empty value")
    }
     setTodoArray([...todoArray, {task, id:todoArray?.length + 1, completed: false}])
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

    </div>
  )
}
