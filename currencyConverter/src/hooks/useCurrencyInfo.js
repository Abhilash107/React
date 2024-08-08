import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
        .then((res)=> res.json())
        //accessing the  object using res[]
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency]);
    console.log(data);
    return data    
}  

export default useCurrencyInfo;

// let url = ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`