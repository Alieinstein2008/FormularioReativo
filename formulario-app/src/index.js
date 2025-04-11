import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Formulario from './componentes/Formulario/Formulario.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formulario></Formulario>
  </React.StrictMode>
);

reportWebVitals();
