import Button from "./Button"
import appstyle from './App.module.css'
import Navbar from "./Navbar"

function App() {
  const text = {
    backgroundColor: "black",
    color: "white",
    fontSize: "50px"
  }

  return (
    <div>
      <Navbar />
      <p style={{ fontSize: "50px", color: "brown" }}> Hello world</p>
      <p style={text}>Another p tag</p>
      <Button />
      <button>you</button>
      <div className={appstyle.card}>Lorem ipsum dolor sit amet, consectetur  dksd</div>
      <div className={appstyle.circle}></div>
    </div>

  )
}


export default App