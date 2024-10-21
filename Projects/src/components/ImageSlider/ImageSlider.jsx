import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill}  from "react-icons/bs"
import './style.css'


export default function ImageSlider({url, limit = 5, page = 1}){

    // for the imgs
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    //to handle the loading period we need to overcome that process
    const [loading, setLoading] = useState(false)

    

    async function fetchImages(getUrl){
        try {
            //before fetching the imgs set setLoading === true
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`) //fetch
            const data = await response.json()  //json formatter
            //check if data is fetched
            if(data){
                setImages(data)// after getting data setLoading==false
                setLoading(false)

            }

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(url !== '') fetchImages(url)
    }, [url] )

    function handlePrev(){
        setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide-1)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide+1)
    }

    if(loading) return <div>Loading data! Please wait</div>
    if(errorMsg) return <div className="error-display">An error has occurred</div>

    return ( <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left"/>
        {
            images && images.length ? 
            images.map((imagesItems, index)=> (
                <img
                key={imagesItems.id}
                alt={imagesItems.author}
                src={imagesItems.download_url}
                className={currentSlide === index ? "current-slide" : "current-slide hide-slide"}
                />
            ))
            : null
        }
           <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
           <span className="circle-indicators">
             {
                images && images.length ? 
                images.map((_, index)=> (
                    <button key={index} className={
                        currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"
                    }
                    onClick={()=> setCurrentSlide(index)}
                    ></button>
                ))
                : null
             }
    
            </span>

    </div>
    )
}