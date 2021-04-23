import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import './App.css';
import Pagina from './Pagina';


function App() {
  return(
    <div className="container">  
    <Nav/>
    <Switch>
          <Route path="/" component={() => <Pagina titulo="Mascotas" entidad="mascotas" />} />
          exact 
          <Route path="/veterinarios" component={() => <Pagina titulo="Veterinarios" entidad="veterinarios" />} />
          <Route path="/propietarios" component={() => <Pagina titulo="Propietarios" entidad="propietarios" />} />
          <Route path="/consultas" component={() => <Pagina titulo="consultas" entidad="consultas" />} />
        </Switch>
        </div>
  );
  
}

export default App;
