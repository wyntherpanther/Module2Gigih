import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchComponent from "../search/search";
import { login } from "./slice";
import { Link } from "react-router-dom";
import LoginButton from "../login/login";

interface props {
    searchArtists?: React.FormEventHandler<HTMLFormElement> | undefined;
    handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const TokenTaker = ({ searchArtists, handleSearchChange }: props) => {
    const autentication = {
        AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
        CLIENT_ID: "a83b7e2cfcb64a2993d8cd07e9e28575",
        CLIENT_SECRET: "da696cbbdd524ef5930fe289f20fb4ed",
        REDIRECT_URL: "http://localhost:3000/",
        RESPONSE_TYPE: "token",
        SCOPE: "playlist-modify-private"
    };

    const dispatch = useDispatch();
    const [token, setToken] = useState<string>("")


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = (
                hash
                    .substring(1)
                    .split("&")
                    .find(elem => elem.startsWith("access_token")) as string
            ).split("=")[1];
            window.location.hash = ""
            window.localStorage.setItem("token", String(token))
        }
        setToken(String(token))
        dispatch(login(token))
    }, [dispatch])


    const logout = () => {
        setToken('')
        dispatch(login(''))
        window.localStorage.removeItem("token")
        alert("Logged out")
    }

    return (
        <header className="header-login">
            <Link to="/" className="header-logo">Wynnie's</Link>
            {token
                ? <SearchComponent searchArtists={searchArtists} handleSearchChange={handleSearchChange} />
                : <h2 className="header-warning">Please login</h2>
            }
            {!token
                ? <LoginButton {...autentication} />
                : <Link to="/"><button id="button1" className="loginButton" onClick={logout}>Logout</button></Link>
            }
        </header>

    )
}
export default TokenTaker