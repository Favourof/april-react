import { useState } from "react"
import { themeContext } from "./ThemeContext"


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const [name, setName] = useState("John");

    const themeToggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    const value = {
        theme, themeToggle, name, setName
    }
    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}
