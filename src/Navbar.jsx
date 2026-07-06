

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "./context/Auth/authContext";
import "./Navbar.css"
export default function Navbar() {
    const { isAuthenticated, logOut } = useContext(authContext)


    return (
        <div style={{ padding: "16px 0" }}>
            <ul
                style={{
                    width: "min(1100px, 92%)",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "14px",
                    listStyle: "none",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}
            >
                {/* <li><Link to={"/"}>Home</Link></li> */}
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isActive ? "active" : "unActive"
                    }
                >
                    Home
                </NavLink>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                {isAuthenticated && <>
                    <li><Link to={"/profile/3"}>Profile</Link></li>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/product"}>Product</Link></li>
                </>}


                {
                    isAuthenticated ? <li><Link to={"/login"} onClick={logOut}>logOut</Link></li> :
                        <>
                            <li><Link to={"/login"}>Login</Link></li>
                            <li><Link to={"/signup"}>Signup</Link></li>
                        </>

                }

            </ul>
        </div>
    )
}

