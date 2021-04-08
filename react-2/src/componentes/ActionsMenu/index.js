import React, {useState} from "react";
import "./ActionsMenu.css";
import Alert from "../Alert";

function ActionsMenu({cambiarModal = () => {}}){
    return (
        <div className="actions-menu">
            <h1>Macotas</h1>
            <div className="actions-menu-content">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={cambiarModal}>
            Nueva
            </button>
            {mostrarAlerta && <Alert/> }
            </div>
        </div>
    );
}
export default ActionsMenu;