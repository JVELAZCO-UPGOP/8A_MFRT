import React from "react";
import ModalHeader from "./ModalHeader";
import Select from "../Select";
import "./Modal.css";

function Modal(){
return(
    <>
    <div className="modal" >
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <ModalHeader/>
        <div className="modal-body">
            <form id="form" >
            <div className="form-row"> 
                <div className="col">
            <Select/>
                </div>
            </div>
                <div className="form-row"> 
                <div className="col">
                <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre"/>
                </div>
                <div className="col">
                <select id="propietario" className="form-control">
                    <option>Dueño</option>
                    <option>Verito</option>
                    <option>Monica</option>
                    <option>Rafa</option>
                    <option>Daniel</option>
                    <option>Vince</option>
                </select>
                </div>
            </div>
            </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" id="btn-guardar">Crear</button>
        </div>
        </div>
    </div>
</div>
<div className="modal-backdrop fade show" ></div>
</>
);
}
export default Modal;