//* custom hooks ==> use '.js'

import { useEffect, useState } from "react";

//* standard approach naming of Hooks : starts with 'use'

function useCurrencyInfo(currency){
    //* to update the data we use useState()
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (response)=> response.json() )
        .then( (response)=> setData(response[currency]) )
    }, [currency])

    return data
}

export default useCurrencyInfo;