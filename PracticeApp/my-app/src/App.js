import './App.css';
// import Search from './pages/home/index';
import {Provider} from 'react-redux';
import { store } from './components/redux/store';
import { Sample } from './router';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <Sample/>
        </Provider>
      </header>
    </div>
  
  );
}

export default App;
