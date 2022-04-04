import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

import Item from '../PlaylistItem/Item'
import SearchComponent from "../search/search";
import FormSubmission from "../Form/form";
import { LoginButton } from "../login/login";
import { login } from "../token/slice";

const Header = ({realHeader}) =>{

    const autentication={
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    CLIENT_ID: "a83b7e2cfcb64a2993d8cd07e9e28575",
    CLIENT_SECRET: "da696cbbdd524ef5930fe289f20fb4ed",
    REDIRECT_URL: "http://localhost:3000/",
    RESPONSE_TYPE: "token",
    SCOPE: "playlist-modify-private"};
    
    const currentAmount = useSelector(state => state.account.value);
    const dispatch = useDispatch();
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [selectedTracks, setSelectedTracks] = useState([])
    const [combinedTrack, setCombinedTrack] = useState([])
    const [user, setUser] = useState({
        name: '',
        description: '',
        public: true
    })
    

    ///////////////////////////////////////////token handler/////////////////////////////////////////////////

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
        dispatch(login(token))
    }, [dispatch])
  
    
    const logout = () => {
        dispatch(login(''))
        window.localStorage.removeItem("token")
        alert("Logged out")
    }

    ///////////////////////////////////////////token handler/////////////////////////////////////////////////



    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////
    
    const searchArtists = async (e) => {
        e.preventDefault()
        const searchUrl="https://api.spotify.com/v1/search";
        const Params = {
            q: searchKey,
            type: "track"
        }
        const {data} = await axios.get(searchUrl, {headers: {Authorization: `Bearer ${currentAmount}`,},params: Params})
        setTracks(data.tracks.items)
    }
 

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value)
    }

    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////


    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////

    useEffect((e) => {
        const combinedTrackWithSelectedTrack = tracks.map((track) => ({
            isSelected: selectedTracks.find(t => t.uri === track.uri),
            ...track,
        }));
        setCombinedTrack(combinedTrackWithSelectedTrack);
    }, [selectedTracks, tracks]);

    const handleSelectedTrack = (track) => {
        const alreadySelected = selectedTracks.find(t => t.uri === track.uri)
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter(t => t.uri !== track.uri))
        } else {
            setSelectedTracks((selectedTracks) => [...selectedTracks, track])
        }
    }

    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////


    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const uris = selectedTracks.map(item => item.uri);
        const headerAll = {Authorization: `Bearer ${currentAmount}`};
        const apiSpotify = "https://api.spotify.com/v1"
        const playlistRequest ={
            name: user.name,
            description: user.description,
            public: false,
        }

        axios.get(`${apiSpotify}/me`, 
        {headers: headerAll})
            .then((response) =>{
                axios.post(`${apiSpotify}/users/${response.data.id}/playlists`, playlistRequest,
                {headers: headerAll} )
                .then((response) =>{
                    axios.post(`${apiSpotify}/playlists/${response.data.id}/tracks`,
                    { uris: uris }, {headers:headerAll})
                    alert("Spotify playlist added")
                })     
            })
        
} 
    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////
    

    function renderPlayListItems() {
        return combinedTrack.map(item => {
            return (
                <Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} />
                )
        })
    }

    return(
    <div className="whole">

        <header className="header-login">
            
            <a href="http://localhost:3000/#" className="header-logo">Wynnie's</a>

            {token 
            ? <SearchComponent searchArtists={searchArtists} handleSearchChange={handleSearchChange}/>
            : <h2 className="header-warning">Please login</h2>
            }

            {!token 
            ? <LoginButton {...autentication}/>
            : <button id="button1" className="loginButton" onClick={logout}>Logout</button>
            }

        </header>

        <div className="body">
            <div className="main2">

                {realHeader}

                {currentAmount}

                {token
                ? <FormSubmission user={user} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} /> 
                : <h2 className="header-warning">Please login</h2>}

                <div className="Songs">  
                    {renderPlayListItems()}
                </div>

            </div>
        </div> 
    </div>
          );
};

export default Header;
