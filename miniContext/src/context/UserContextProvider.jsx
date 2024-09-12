import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    // the data we need to pass/send to all over component 
    const [user, setUser] = useState(null)
    
    return(
        // wrapping inside UserContext
        // Provider 

        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>

    )
}


export default UserContextProvider;