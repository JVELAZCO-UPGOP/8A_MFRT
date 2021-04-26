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
            <Route exact  path="/" component={(props) => (
            <Pagina {...props} titulo="Mascotas" entidad="mascotas" />
          )}
        />
            
            <Route path="/veterinarios" component={(props) => ( 
            <Pagina {...props} titulo="Veterinarios" entidad="veterinarios" />
            )}
        />
            <Route path="/Dueños" component={(props) => (
            <Pagina {...props} titulo="Propietarios" entidad="propietarios" />
            )}
        />
            <Route path="/consultas" component={(props) => ( 
            <Pagina {...props} titulo="consultas" entidad="consultas" />
            )}
        />
      </Switch>
    </div>
  );
  
}

export default App;
