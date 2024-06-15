import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Panad from './Panaderia';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Panad imagen1="panaderia2.jpg" imagen2="panaderia3.jpg" imagen3="panaderia4.webp" 
      nombre="BISMARK CH" ciudad="Santa Cruz de la Sierra"
      imagen4="panaderia5.jpg" imagen5="panaderia6.jpg" imagen6="panaderia7.jpg"
      unidad1="12" unidad2="24" unidad3="48" compra="Comprar"
      
      ></Panad>
      

      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
