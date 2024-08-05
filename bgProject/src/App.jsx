import { useState } from "react"


function App() {
  let myColor = "lime"
  const [color, setColor] = useState(myColor)

  return (
    <>
      <div className="w-full h-screen duration-150"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center top-2/4
         inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-2xl">

            <button onClick={()=> setColor("Red")}
            className="outline-none px-4 py-2 text-white rounded-2xl
            shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>

            <button  
            onClick={()=> setColor("lightgreen")} className="outline-none px-4 py-2 text-black rounded-2xl
            shadow-lg"
            style={{backgroundColor: "lightgreen"}}
            >light green</button>

            <button  
            onClick={()=> setColor("blue")} className="outline-none px-4 py-2 text-white rounded-2xl
            shadow-lg"
            style={{backgroundColor: "blue"}}
            >blue</button>

            <button  onClick={()=> setColor("yellow")}
            className="outline-none px-4 py-2 text-black rounded-2xl
            shadow-lg"
            style={{backgroundColor: "yellow"}}
            >yellow</button>

            <button  onClick={()=> setColor("pink")}
            className="outline-none px-4 py-2 text-black rounded-2xl
            shadow-lg"
            style={{backgroundColor: "pink"}}
            >pink</button>

            <button  onClick={()=> setColor("orange")}
            className="outline-none px-4 py-2 text-black rounded-2xl
            shadow-lg"
            style={{backgroundColor: "orange"}}
            >orange</button>

            <button  onClick={()=> setColor("cyan")}
            className="outline-none px-4 py-2 text-black rounded-2xl
            shadow-lg"
            style={{backgroundColor: "cyan"}}
            >cyan</button>

            <button  onClick={()=> setColor("magenta")}
            className="outline-none px-4 py-2 text-white rounded-2xl
            shadow-lg"
            style={{backgroundColor: "magenta"}}
            >magenta</button>

            <button  onClick={()=> setColor("brown")}
            className="outline-none px-4 py-2 text-white rounded-2xl
            shadow-lg"
            style={{backgroundColor: "brown"}}
            >brown</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
