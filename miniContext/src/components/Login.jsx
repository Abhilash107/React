import React,{useState, useContext} from "react";
import UserContext from "../context/UserContext"

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // this setUser is defined in UserContextProvider file
    // like a reference
    const {setUser} = useContext(UserContext)

    // Sending the data
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            {"  "}

            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login

