import axios from 'axios';
import { useState } from "react";

export const handleSearch = ({ token }) => {
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])

    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setTracks(data.tracks.items)
    }


    const handleSearchChange = (e) => {
        setSearchKey(e.target.value)
    }
    return
}