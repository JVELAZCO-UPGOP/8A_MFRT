import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./componentes/Nav";

import './App.css';
import Pagina from './Pagina';


function App() {
  return(
    <div className="container">  
    <Nav/>
      <Switch>
            <Route exact  path="/" component={() => <Pagina titulo="Mascotas" entidad="mascotas" />} />
            
            <Route path="/veterinarios" component={() => <Pagina titulo="Veterinarios" entidad="veterinarios" />} />
            <Route path="/Dueños" component={() => <Pagina titulo="Propietarios" entidad="propietarios" />} />
            <Route path="/consultas" component={() => <Pagina titulo="consultas" entidad="consultas" />} />
      </Switch>
    </div>
  );
  
}

export default App;
