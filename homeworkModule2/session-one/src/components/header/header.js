import {useEffect, useState} from "react";
import axios from 'axios';
import ItemContainer from "../PlaylistItem/handleItem";
import SearchComponent from "../search/search";


const Header = ({description, formSubmission}) =>{
    const AUTH_ENDPOINT= "https://accounts.spotify.com/authorize"
    const CLIENT_ID= "a83b7e2cfcb64a2993d8cd07e9e28575"
    const REDIRECT_URL= "http://localhost:3000/"
    const RESPONSE_TYPE= "token"
    
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
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

    return(
    <div className="whole">
        <header className="header-login">
        <a href="http://localhost:3000/#" className="header-logo">Wynnie's</a>

        {token ? 
        <SearchComponent searchArtists={searchArtists} handleSearchChange={handleSearchChange}/>
        : <h2 className="header-warning">Please login</h2>
        }

        {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`} 
        id="button1" className="loginButton">Login</a>
        : <button id="button1" className="loginButton" onClick={logout}>Logout</button>
        }
        <div className="Center" style={{textAlign: "center"}}>
        
      </div>
        </header>
    <div className="body">
    <div className="main2">
        {description}
        {formSubmission}
      

      <div className="Songs">
        <div className="Playlist">
        

        </div>
        
      <ItemContainer tracks={tracks}/>

      </div>

    </div>
    </div> 
    </div>
          );
};

export default Header;
