

import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <ul style={{ width: "80%", margin: "auto", display: "flex", justifyContent: "space-around" }}>
                <Link to={"/"}>  <li>home</li></Link>

                <Link to={"/about"}><li>About</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
                <Link to={"/profile/3"}><li>Profile</li></Link>
                <Link to={"/dashboard"}><li>Dashboard</li></Link>
                <Link to={"/product"}><li>Product</li></Link>
            </ul>
        </div>
    )
}

