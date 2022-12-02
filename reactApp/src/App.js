import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';

//пропс - вход данные извне.
//стейт - создается компонентой, зависит от компоненты.

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Ccomponent number ="123"/>
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
