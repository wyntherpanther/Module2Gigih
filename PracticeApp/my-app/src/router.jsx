import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "./pages/home";
import Trending from "./pages/Trending/trending";


function AppRouter() {
  return (
    <Router>
      <Link to="/trending">Trending</Link>
      <Switch>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/">
          <Search />
        </Route>

      </Switch>
    </Router>
  )
}

export { AppRouter as Sample };