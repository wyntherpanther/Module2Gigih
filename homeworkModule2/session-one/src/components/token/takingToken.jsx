import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginButton } from "../login/login";
import SearchComponent from "../search/search";
import { login } from "./slice";


const TokenTaker = ({ searchArtists, handleSearchChange }) => {
    const autentication = {
        AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
        CLIENT_ID: "a83b7e2cfcb64a2993d8cd07e9e28575",
        CLIENT_SECRET: "da696cbbdd524ef5930fe289f20fb4ed",
        REDIRECT_URL: "http://localhost:3000/",
        RESPONSE_TYPE: "token",
        SCOPE: "playlist-modify-private"
    };

    const dispatch = useDispatch();
    const [token, setToken] = useState("")


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
        setToken('')
        dispatch(login(''))
        window.localStorage.removeItem("token")
        alert("Logged out")
    }

    return (<header className="header-login">

        <a href="http://localhost:3000/#" className="header-logo">Wynnie's</a>

        {token
            ? <SearchComponent searchArtists={searchArtists} handleSearchChange={handleSearchChange} />
            : <h2 className="header-warning">Please login</h2>
        }

        {!token
            ? <LoginButton {...autentication} />
            : <button id="button1" className="loginButton" onClick={logout}>Logout</button>
        }

    </header>

    )
}
export default TokenTaker