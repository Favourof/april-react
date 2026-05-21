


export const TodoList = ({todoArray}) => {

  // console.log(task, 'task......');

 
  
  return (
    <div>
    
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
