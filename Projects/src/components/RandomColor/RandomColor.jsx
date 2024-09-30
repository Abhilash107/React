import { useEffect, useState } from "react"

export default function RandomColor(){
    
    const [type, setType] = useState('hex') // type of color(rgb or hex)
    const [color, setColor] = useState('black')// colors

    function handleCreateHEXColor(){
        let hexColor = '#'
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        for(let i = 0; i< 6; i++){
            const randomIndex = Math.floor(Math.random() * hex.length);
            hexColor += hex[randomIndex];
        }

        setColor(hexColor)
    }

    function handleCreateRGBColor(){
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 

        const rgbColor = `rgb(${r}, ${g}, ${b})`; 
        setColor(rgbColor); 
    }

    useEffect(()=>{
        // to dynamically check if which type of color is selected
        if(type == 'rgb') handleCreateRGBColor()
        else handleCreateHEXColor()

    }, [type])

    return (
        <div className="container" style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color
        }}>
            
            <button onClick={()=> setType("hex")}>Create HEX colors</button>
            <button onClick={()=> setType("rgb")}>Create RGB colors</button>

            <button onClick={type === 'hex' ? handleCreateHEXColor : handleCreateRGBColor }>Generate random colors</button>

            <div>   
                <h1>{type}</h1>
                <h1>{color}</h1>  
            </div>

        </div>
    )
}