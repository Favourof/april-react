import { useContext, useState } from "react"
import { themeContext } from '../context/ThemeContext'

export const Home = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const Timer = setInterval(() => {
  //     setCount(count + 1)
  //     console.log(count);

  //   }, 1000);
  //   console.log(Timer);
  //   return () => {
  //     clearInterval(Timer)
  //   }



  // }, [count])

  const { theme, name, themeToggle } = useContext(themeContext)

  return (
    <div>
      <h1>Home Page</h1>
      <p>name: {name}</p>
      <p>theme: {theme}</p>
      <p>Count: {count}</p>
      <button onClick={themeToggle} >  {theme === "light" ? "☀️" : "🌖"}</button>

    </div>
  )
}
