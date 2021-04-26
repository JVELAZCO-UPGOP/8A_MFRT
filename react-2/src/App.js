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
            <Route exact  path="/"> <Pagina titulo="Mascotas" entidad="mascotas" /></Route>
            
            <Route path="/veterinarios" > <Pagina titulo="Veterinarios" entidad="veterinarios" /></Route>
            <Route path="/Dueños"> <Pagina titulo="Propietarios" entidad="propietarios" /></Route>
            <Route path="/consultas" > <Pagina titulo="consultas" entidad="consultas" /></Route>
      </Switch>
    </div>
  );
  
}

export default App;
