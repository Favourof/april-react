import { useEffect, useState } from "react";
import { authContext } from "./authContext"
import { privateInstance } from "../../api/axios";
import { useNavigate } from "react-router-dom";



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const isAuthenticated = Boolean(token)

    const logIn = ({ user, token }) => {
        setToken(token || null)
        setUser(user || null)

        if (token && user) {
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        }
        setLoading(false)
    }



    const logOut = () => {
        localStorage.clear("token")
        localStorage.clear("user")
        setToken(null)
        setUser(null)

    }


    const getCurrentUser = async () => {
        try {
            const response = await privateInstance.get("/auth/me")
            console.log("from Current User", response.data);

            if (response) {
                navigate("/product")
            }


        } catch (err) {
            console.log(err.response.data.message);
            navigate("/login")
        }
    }

    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        const savedUser = localStorage.getItem("user")

        try {
            if (savedToken) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setToken(savedToken)
            }
            if (savedUser) {
                const preSavedUser = JSON.parse(savedUser)
                setUser(preSavedUser)
            }
            getCurrentUser()

        } catch (error) {
            console.log(error);

        }

        setLoading(false)
    }, [])


    const value = {
        user,
        token,
        logOut,
        logIn,
        isAuthenticated,
        loading
    }





    return (<authContext.Provider value={value} >
        {children}
    </authContext.Provider>)
}
