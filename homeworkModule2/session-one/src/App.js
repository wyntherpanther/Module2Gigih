// import logo from './logo.svg';
import './cssComponent/App.css';
import './cssComponent/body.css'
import './cssComponent/Interactivity.css'
import './cssComponent/hover.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Playlist from './Pages/Home/Index.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Playlist/>
    </div>
    </Router>
  );
}

export default App;
