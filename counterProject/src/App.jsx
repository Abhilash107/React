import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, myCounter] = useState(0)

  const addValue = ()=>{
    if(counter>19){
      alert("Counter can't be greater than 20")
      return;
    }
      
    //myCounter(counter+1)// to increase the counter by 1
    myCounter(counter => counter+1)
    myCounter(counter => counter+1)
    myCounter(counter => counter+1)
    
  }

  const subtractValue = ()=>{
    if(counter<=0) alert("Counter can't be less than 0")
   
    myCounter(counter-1)
  }

  return (
    <>
    <h1>Hello</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value: {counter} </button>
    <br />
    <button
    onClick={subtractValue}
    >Subtract Value: {counter} </button>
   </>
  )
}

export default App
