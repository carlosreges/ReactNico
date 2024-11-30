
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'world';
  const [is_female, setIsFemale] = useState(true);

  const welcomenGender = () => {return is_female ? 'Bienvenida' : 'Bienvenido';};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {welcomenGender()} es true {name}!
        </p>
        <a>
          <button onclick = setIsFemale>algo</button>
        </a>
      </header>
    </div>
  );
}

export default App;
