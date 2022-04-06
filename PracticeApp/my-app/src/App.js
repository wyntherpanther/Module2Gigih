import './App.css';
import { Sample } from './router';
import {Provider} from 'react-redux';
import { store } from './components/redux/store';


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
