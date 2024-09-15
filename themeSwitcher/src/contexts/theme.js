import { createContext, useContext } from "react";

// can pass both variable as well as function.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

})

// provider 
export const ThemeProvider = ThemeContext.Provider

//custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}
