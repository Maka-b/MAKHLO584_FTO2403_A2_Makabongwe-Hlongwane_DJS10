import { useEffect, useState } from "react"


export default function useFetch(url){
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    
    useEffect( ()=>{
        fetch(url)
            .then(res => {
                if (!res.ok){
                    throw new Error ('Was unable to fetch information :( . Please try again later')
                }
                return res.json()
            })
            .then(data => setData(data))
            .catch(error => setError(error.message))
    },[url])

    return {error, data}
}
