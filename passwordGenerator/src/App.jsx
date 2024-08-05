import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //* use ref hook
  const passwordRef = useRef(null)// this can passed inside input

  //* for memoization
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-_=+[]{}|<>?/~"

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.random() * str.length+1)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback( ()=> {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,8) // select the range
    window.navigator.clipboard.writeText(password)
  },
   [password] )

  //* runs the code
  useEffect( ()=> {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator] )

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-3 my-20 py-3 text-lime-400 bg-gray-700'>

        <h1 className='text-white text-2xl text-center mb-5'>Password Generator</h1>


        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text" value={password} className='outline-none w-full py-2 px-4 text-black' 
          placeholder='password' readOnly ref={passwordRef}/>

          <button className='rounded-2xl text-white outline-none bg-blue-600 
          shrink-0 px-2 py-2
          ' onClick={copyPasswordToClipboard}>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
            onChange={(e)=> setLength(e.target.value) }/>
            <label >Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked= {numAllowed}
              onChange={()=> setNumAllowed((prevCheck)=> !prevCheck) }
              id='numInput'
            />
            <label htmlFor="numInput">Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked= {charAllowed}
              onChange={()=> setCharAllowed((prevCheck)=> !prevCheck) }
              id='charInput'
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>



      </div>
    </>
  )
}

export default App
