import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import productos from './components/productos'
import logonave from './components/img/logonave.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>En La Nave</h1>
        <p>Servicios de reposteria y cocteleria</p>

      </header>
      <Fragment>
      <div className="logoprincipal">
          <img src={logonave} class="logonave" alt="logonave"/>
        </div>
        <h2>¿Qué ofrecemos?</h2>
        <p>Ofrecemos servicios de banqueteria enfocado en panaderia y reposteria para diferentes tipos de eventos.</p>
        <a
          className="App-link"
          href= {productos}
          rel="noopener noreferrer"
        >
          <button >Ir al sitio</button>
        </a>
      </Fragment>
      <section>
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Nuestra produccion es realizada a mano por chefs especializados</li>
          <li>Ingredientes 100% frescos en todas nuestras preparaciones</li>
          <li>Nos enfocamos en la accesibilidad y presentacion para garantizar la satisfacción del usuario.</li>
          <li>Avalados por nuestros precios asequibles y transparentes.</li>

        </ul>
      </section>
      <footer>
        <p>¡Gracias por su preferencia!</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;