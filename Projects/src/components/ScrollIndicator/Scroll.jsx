import { useEffect, useState } from "react"
import './scroll.css'

export default function Scroll({url}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const [scrollPercentage, setScrollPercentage] = useState(0)

    //Just for demo data, noting imp
    async function fetchData(getUrl){
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            console.log(data);
            if(data && data.products &&  data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setErrMsg(e.message)  
        }
    }

    //* here the % of body scrolled get set to scrollPercentage useSate
    function handleScrollPercentage(){
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage( (scrolled/height) * 100 );
    }

    //just for fetching data
    useEffect(()=> {
        fetchData(url)
    }, [url])

    //* for calling above function
    useEffect( ()=>{
        window.addEventListener('scroll', handleScrollPercentage);

        return ()=> {
            window.removeEventListener('scroll', ()=>{})
        }
    }, [])

    return(
        <div>
                <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress">
                    {/* Here the calculated scrollPercentage is set to width of the displaying div */}
                    <div className="current-progress" style={{width: `${scrollPercentage}%`}}>
                    </div>
                </div>
                </div>
                <div className="data-container">
                    {
                        data && data.length > 0 ? 
                        data.map(items => <p>{items.title}</p>)
                        : null
                    }
                </div>


        
        
        </div>
    )
}