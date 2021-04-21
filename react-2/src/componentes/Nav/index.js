import React from "react";
import "./Nav.css";
import Search from "../Search";

function Nav() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Veterinaria</a>
            <div className="navbar-right" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/index.html">Mascotas<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/veterinarios.html">Veterinarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/consultas.html">Consultas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Dueños.html">Dueños</a>
                    </li>
                </ul>
                <Search/>
            </div>
        </nav>
    );
}

export default Nav;