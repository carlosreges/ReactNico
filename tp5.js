import './App.css';
import { useState } from "react";

// Implementar una calculadora de Índice de Masa Corporal (IMC). 
// Pedir los datos al usuario a través de las etiquetas correspondientes y colocar un botón para obtener el resultado. 
// Mostrar al usuario tanto el valor obtenido como la interpretación de ese valor, es decir, la clasiﬁcación de ese resultado.

// Menos de 18.5	=> Debajo del peso
// 18.5 a 24.9	  => Saludable
// 25.0 a 29.9	  => Sobrepeso
// 30.0 a 39.9	  => Obeso
// Más de 40	    => Obesidad extrema

// IMC = peso (kg)/ [estatura (m)]2

function App() {

  const [inputPeso, setInputPeso] = useState('');
  const handleInputChange2 = (event) => {
  setInputPeso(event.target.value);
  };
  const [inputAltura, setInputAltura] = useState('');
  const handleInputChange3 = (event) => {
  setInputAltura(event.target.value);
  };
  let calculo = inputPeso / inputAltura;
  let estado = ''
  if (calculo <= 18.5){
    estado = 'Debajo del peso'
  } else if (calculo > 18.5 && calculo < 24.9) {
      estado = 'Saludable';
  } else if (calculo > 25.0 && calculo < 29.9) {
      estado = 'Sobrepeso';
  } else if (calculo > 30.0 && calculo < 39.9) {
      estado = 'Obeso';
  } else if (calculo >= 40) {
      estado = 'Obesidad extrema';
  } else {
    estado ='Error';
  }
  
  return (
  <div className="App">
  <main className="App-header">
 
  <label>Ingresa tu peso en kilogramos:</label>
  <input
  type="text"
  value={inputPeso}
  onChange={handleInputChange2}
  />
  <p>{inputPeso}</p>
  <label>Ingresa tu estatura en metros:</label>
  <input
  type="text"
  value={inputAltura}
  onChange={handleInputChange3}
  />
  <p>{inputAltura}</p>
  <p>Tu IMC: {calculo}</p>
  <p>Tu estado físico es: {estado}</p>
  <p></p>
  </main>
  </div>
  );
  }

export default App;
