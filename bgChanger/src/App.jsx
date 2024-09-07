import { useState } from 'react'
import './App.css'

function App() {
  //we need (useState) colors which reflects in UI so 
  const [color, setColor] = useState("red")

  return (
    <>
   <div className="text-xl h-screen w-full" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-1/3 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg px-3 py-3 rounded-md'>

          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white rounded-full  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>

          <button onClick={()=> setColor("green")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "green"}}
          >
         Green
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>
          <button onClick={()=> setColor("red")}
          className='outline-none px-3 py-2 text-white  ' style={{backgroundColor: "red"}}
          >
          Red
          </button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
