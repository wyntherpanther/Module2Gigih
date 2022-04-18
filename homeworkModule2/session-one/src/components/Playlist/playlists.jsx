import { useEffect } from "react";
import { useSelector } from "react-redux";
// import PlaylistList from "./playlist";
import axios from 'axios';
import { useState } from "react";
// import { Stack } from "@mui/material";


const Playlist = () => {
    const [playlist, setPlaylist] = useState([])
    const token = useSelector(state => state.account.value);

    useEffect(() => {
        const headerAll = { Authorization: `Bearer ${token}` };
        const apiSpotify = "https://api.spotify.com/v1"
        const data =
            axios.get(`${apiSpotify}/me`,
                { headers: headerAll })
                .then((response) => {
                    axios.get(`${apiSpotify}/users/${response.data.id}/playlists`,
                        { headers: headerAll })
                })

        setPlaylist(data.items)
    }, [token])

    // function renderPlayListList() {
    //     return playlist.map((item) => {
    //         return (
    //             <PlaylistList key={item.uri} playlist={item} />
    //         )
    //     })
    // }
    return (
        <>
            {/* <Stack spacing={2}>
                {renderPlayListList()}
            </Stack> */}
            <h1>this is{playlist}</h1>
        </>
    )
}
export default Playlist