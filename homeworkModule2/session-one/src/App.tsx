// import logo from './logo.svg';
import './cssComponent/App.css';
import './cssComponent/body.css'
// import './cssComponent/Interactivity.css'
import './components/Form/Form.css'
import './components/header/header.css'
import './components/login/loginButton.css'
import './components/PlaylistItem/PlaylistItem.css'
import './components/search/Search.css'
import './components/writingHeader/description.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routing from './router';
import { Provider } from 'react-redux';
import  store  from "./components/token/store";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff5e00',
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Provider store= {store}>
        
    <div className="App">

      <Routing/>
      
    </div>
    
    </Provider>
    </Router>
    </ThemeProvider>
  );
}

export default App;
