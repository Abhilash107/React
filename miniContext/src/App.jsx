import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
  // again we need to wrap contents/components within the UserContext to use the it props
   <UserContextProvider>
    <h1>React with Abhilash</h1>
    <Login />
    <Profile />
   </UserContextProvider>
   
  )
}

export default App
