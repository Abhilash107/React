import { useState } from "react"
import useLocalStorage from "./useLocalStorage.jsx"
import './theme.css'

export default function ThemeToggle(){
    const [theme, setTheme] = useLocalStorage("theme", "dark")

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
    return(
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container" >
                <p>Hello World</p>
                <button onClick={handleToggleTheme}>switch theme</button>
            </div>
        </div>
    )
}