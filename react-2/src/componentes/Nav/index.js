import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Search from "../Search";

function Nav() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to = "/">Veterinaria</Link>
            <div className="navbar-right" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/index">Mascotas<span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/veterinarios">Veterinarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/consultas">Consultas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Dueños">Dueños</Link>
                    </li>
                </ul>
                <Search/>
            </div>
        </nav>
    );
}

export default Nav;