import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const name = "Nico Lo";
  const [is_female, setIs_female] = useState(true);

  const handleClick = () => {
    if (is_female === true){
      setIs_female(false);
      return (is_female);
    }
    else {
      setIs_female(true);
      return (is_female)
    }
  };
  console.log(is_female);

  const welcomeGender = () => {
    return is_female ? "Bienvenida" : "Bienvenido";
  };
  return (
    <div className="App">
    <header className="App-header">
    <h3>
    {welcomeGender()} a la página web de {name}
    </h3>
    <img src={logo} className="App-logo" alt="logo" />
    <p>Hola Mundo!</p>
    
    <button onClick={handleClick}> Indica tu género </button>
    
    </header>
    </div>
  );
}

export default App;
