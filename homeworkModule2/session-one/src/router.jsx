import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "./Pages/Home/loginPage";
import Playlist from "./Pages/Home/mainPage";
const Routing = () => {

    const token = useSelector(state => state.account.value);

    return (

        <Switch>

            <Route exact path="/create-playlist">
                {!token && <Redirect to="/" />}
                <Playlist />
            </Route>

            <Route exact path="/">
                {token && <Redirect to="/create-playlist" />}
                <LoginPage />
            </Route>

            <Redirect from="*" to="/" />

        </Switch>

    )
}
export default Routing;