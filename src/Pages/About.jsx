import { useContext } from "react"
import { themeContext } from "../context/ThemeContext"


export const About = () => {
  const { theme, name, setName } = useContext(themeContext)
  return (
    <div>

      <h1>About Page</h1>
      <p>Name: {name} </p>
      <button onClick={() => setName("Dayo")}>Change name</button>
      <p>Theme: {theme}</p>
    </div>
  )
}
