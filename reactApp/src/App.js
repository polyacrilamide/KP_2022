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
      <Ccomponent />

      </header>
      
    </div>
  );
}

export default App;
