// function Navbar() {
//     return (
//         <div>

import { Link } from "react-router-dom";

//         </div>
//     )
// }

// export default Navbar



// export const Navbar = () => {
//     return (
//         <div></div>
//     )
// }





export default function Navbar() {
    return (
        <div>
            <ul style={{ width: "80%", margin: "auto", display: "flex", justifyContent: "space-around" }}>
                <Link to={"/"}>  <li>home</li></Link>
              
               <Link to={"/about"}><li>About</li></Link> 
               <Link to={"/contact"}><li>Contact</li></Link> 
              <Link to={"/profile/3"}><li>Profile</li></Link>  
               <Link to={"/dashboard"}><li>Dashboard</li></Link>  
            </ul>
        </div>
    )
}

