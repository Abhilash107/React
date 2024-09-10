import React, { useEffect, useState  } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Abhilash107')
    //  .then(response => response.json())
    //  .then(data => {
    //     //console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className="text-center m-3 p-4 bg-gray-600 text-lime-600 text-2xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture"  width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Abhilash107")
    return response.json()
}