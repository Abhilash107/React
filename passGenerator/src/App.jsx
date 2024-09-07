import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  // to set the length and display in UI
  const [length, setLength] = useState(8)

  //to add the numbers in password by true/false
  const [numAllowed, setNumAllowed] = useState(false)

  // to add characters in password
  const [charAllowed, setCharAllowed] = useState(false)

  // to update the values in input 
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    //better UI, design
    passwordRef.current?.select()// highlights the selected text
    passwordRef.current?.setSelectionRange(0, 101)
    // copies the content
    window.navigator.clipboard.writeText(password)

  }, [password])

  // Generate password function
  // As this method gets called after each generation,
  // we use //*useCallback(fn , dependencies) 
  // allows you to memoize a function(Optimize)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "#$%&@"

    for (let i = 0; i < length; i++) {

      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  //* use setPassword is changed, then call it
  }, [length, numAllowed, charAllowed, setPassword])

  //* calls the function when some changes are done in dependencies
  useEffect( ()=>{
    passwordGenerator()
  },
  [length, numAllowed, charAllowed, passwordGenerator] )

  

  return (

    <>

    <div className='w-full max-w-md mx-auto rounded-lg px-3 my-20 py-3 text-lime-400 bg-gray-800'>

      <h1 className='text-white text-2xl text-center mb-5'>Password Generator</h1>


      <div className='flex shadow rounded-lg overflow-hidden mb-5'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-2 px-4 text-black' 
        placeholder='password' 
        readOnly 
         ref={passwordRef}
        />

        <button className=' text-white outline-none bg-blue-600 
        shrink-0 px-2 py-2' 
        onClick={copyPasswordToClipboard}>
          Copy
        </button>

      </div>

      <div className='flex text-sm gap-x-2' >
        <div className='flex items-center gap-x-1'>
          <input type="range"
           min={8} 
           max={100} 
           value={length} 
           className='cursor-pointer' 
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
