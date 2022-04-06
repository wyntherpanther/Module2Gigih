import { useEffect, useState } from "react"
import axios from 'axios';
import Gif from "../../components/Gif/index.js";

export const Trending = () => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const { data } = axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=vYaoDT4GVtdV6b3VZtt2yq1ZbYh2Zj3E`, {})
        setGifs(data.data)
    }, [])

    return (
        <div className='trending-item'>
            {gifs.length > 0 &&
                (gifs.map((gif, id) => <Gif {...gif} key={id} />))
            }
        </div>
    )
}