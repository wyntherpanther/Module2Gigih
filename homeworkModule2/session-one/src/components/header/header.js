import {useEffect, useState} from "react";
import axios from 'axios';
import Item from "../PlaylistItem/Item";


const Header = ({children}) =>{
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
        // getToken()
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
    


  
    return(
      
    <div className="main2">
        {!token ?
          <a id="button1" className="loginButton buttonTemplate btn-message1" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>Login
          to Spotify</a>
          : <button id="button1" className="loginButton buttonTemplate btn-message1" onClick={logout}>Logout</button>}
    
        {children}

      <div className="Center" style={{textAlign: "center"}}>
        {token ?
            <form onSubmit={searchArtists}>
                <input type="text" placeholder="Search" onChange={e => setSearchKey(e.target.value)}/>
                        <button id="button1" className="searchButton buttonTemplate btn-message1" type={"submit"}>Search</button>
            </form>

            : <h2>Please login</h2>
        }
      </div>

      <div className="Songs">
        <div className="Playlist">
        

        </div>
        
      {tracks.map((track, id) => <Item {...track} key={id}/>)}

      </div>

    </div>
          );
};

export default Header;
