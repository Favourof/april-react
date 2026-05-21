
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Profile } from "./Pages/Profile";
import { Dashboard } from "./Pages/Dashboard";


function App() {



  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
         <Route path="dashboard" element={<Dashboard />} />
        
        <Route path="*" element={<h1>Page not Found</h1>} />


    </Routes>

        
    </div>

  )
}


export default App