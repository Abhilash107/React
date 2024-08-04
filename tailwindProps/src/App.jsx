import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "Abhilash",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-3xl'>Hello</h1>
      <Card username="papun" btnTxt = "More" />
      <Card  username="Abhilash"  />

    </>
  )
}

export default App
