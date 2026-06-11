
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Profile } from "./Pages/Profile";
import { Dashboard } from "./Pages/Dashboard";
import { Chart } from "./DashboardPages/Chart";
import { History } from "./DashboardPages/History";
import { Payment } from "./DashboardPages/Payment";
import { Settings } from "./DashboardPages/Settings";
import { Manage } from "./DashboardPages/Manage";
import { Product } from "./Pages/Product";
import { AddProduct } from "./DashboardPages/AddProduct";


function App() {



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/product" element={<Product />} />




        <Route path="/dashboard" element={<Dashboard />} >
          <Route index="/" element={<Chart />} />
          <Route path="history" element={<History />} />
          <Route path="payment" element={<Payment />} />
          <Route path="settings" element={<Settings />} />
          <Route path="manage" element={<Manage />} />
          <Route path="addproduct" element={<AddProduct />} />



        </Route>

        <Route path="*" element={<h1>Page not Found</h1>} />


      </Routes>


    </div>

  )
}


export default App