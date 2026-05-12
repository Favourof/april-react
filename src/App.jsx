// import Button from "./Button"
// import appstyle from './App.module.css'
// import { useState } from "react";
import { Interpolation } from "./Interpolation"
import Button from "./Button";
import Navbar from "./Navbar"
import { TodoList } from "./TodoList";

function App() {
  // const text = {
  //   backgroundColor: "black",
  //   color: "white",
  //   fontSize: "50px"
  // }


  // const [count, setCount] = useState(0);


  // const decrement = ()=>{
  //   // alert('heelo')
  //   if (count > 0) {
  //          setCount(count - 1)
  //   }

  //   console.log(count, "count");
   
  // }


  return (
    <div>
      <Navbar />

      {/* <h1>Count: {count}</h1> */}
     
      {/* <button onClick={increment}>increment</button> */}
        {/* <button onClick={()=> setCount(count + 1) }>increment</button>
          <button onClick={decrement}>Decrement</button>
            <button onClick={()=> count > 0? setCount(count - 1): count }>Decrement</button> */}
      {/* <p style={{ fontSize: "50px", color: "brown" }}> Hello world</p>
      <p style={text}>Another p tag</p>
      <Button />
      <button>you</button>
      <div className={appstyle.card}>Lorem ipsum dolor sit amet, consectetur  dksd</div>
      <div className={appstyle.circle}></div> */}
      <Interpolation />
          <TodoList />
          <Button text={"log in"} color={"green"}  />
        
    </div>

  )
}


export default App