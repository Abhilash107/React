import { useState } from "react"
import {QRCode} from "react-qr-code"
// we can take the input from props too.
export default function QRCodeGenerator(){

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
        setInput("")
    }

    return(
        <div>
           <h1>QR Code generator</h1> 

           <div className="heading">
            <input onChange={(e)=> setInput(e.target.value)}
             type="text" 
             name="qr_code" 
             value={input}
            placeholder="Enter your value here"/>

            <button disabled={input && input.trim() !== '' ? false : true} 
            onClick={handleGenerateQrCode} type="button">Generate</button>

           </div>

           <div className="QRcode">
            <QRCode id="qr-code-value" value={qrCode} size={300}/>

           </div>
        </div>
    )
}