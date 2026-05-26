import { useEffect, useState } from "react"


export const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const Timer = setInterval(() => {
      setCount(count + 1)
      console.log(count);

    }, 1000);
    console.log(Timer);
    return () => {
      clearInterval(Timer)
    }



  }, [count])

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
    </div>
  )
}
