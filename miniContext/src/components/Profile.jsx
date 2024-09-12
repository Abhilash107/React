import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    //initially user & setUser are defined on UserContextProvider file as useState
    //after setUser is passed in Login file, then the user file has access of the data
    
    const {user} = useContext(UserContext)
    
    if(!user) return <div> please login </div>

    return <div>Welcome {user.username}</div>
    
}

export default Profile
