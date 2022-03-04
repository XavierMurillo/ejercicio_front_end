import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import suma from './utils/sum.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Utilizamos el arreglo para generar la suma y mostrarla en consola, adicionalmente repetí el proceso en la función app para que se vea en pantalla
var MyArray = [2,4,6,8,10,12];
console.log(suma(...MyArray)+ " suma desde index utilizando export e import");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
