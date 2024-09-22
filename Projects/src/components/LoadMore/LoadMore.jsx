import react, { useEffect, useState } from "react"

export default function LoadMore(){
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])
    // count or pageNo
    const [page, setPage] = useState(0)

    async function fetchProducts(){
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page === 0 ? 0 : page*20}`)

            const result = await response.json()
            //console.log(result);

            if(result && result.products && result.products.length){
                setProduct((prev)=> [...prev, ...result.products])
                setLoading(false)
            }
            
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProducts()
    }, [page]) 

    if(loading){
        return <div>Loading data</div>
    }

    return <div className="container">
        <div>
            {
                product && product.length ? 
                product.map(item=> <div className="product" key={item.id}>
                    <img src={item.thumbnail}  alt={item.title}/>
                    <p>{item.title}</p>
                </div> ) : ""
            }
        </div>

        <div className="btn-container">
            <button onClick={()=> setPage(page +1)}>Load More...</button>
        </div>

    </div>

}