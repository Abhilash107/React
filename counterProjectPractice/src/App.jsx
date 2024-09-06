import { useState } from 'react'

import './App.css'

function App() {
  // hooks
  const [counter, setCounter] = useState(18)
  // variables and logics

  
  const addValue = ()=>{
    //* to use this, use 'let'
    // counter = counter + 1
    // setCounter(counter)

    //* in React's state management, setCounter is a function that updates the state, so reassignment is handled internally by React

    if(counter < 20) setCounter(counter + 1)
    else alert("Kya re haule")
    
    
  }
  const subtractValue = ()=>{
    //* to use this, use 'let'
    // counter = counter - 1
    // setCounter(counter)
    if(counter > 0) setCounter(counter - 1)
    else alert("Kya re haule")
    
  }

  // html with Js code
  return (
    <>
     <h1>Hello, Counter Project</h1>
     <h1>Counter value: {counter}</h1>

     <button onClick={addValue}>Add</button><br />
     <button onClick={subtractValue}>Subtract</button>

     <p>{counter}</p>

    </>
  )
}

export default App
