import React from "react";
import ModalHeader from "./ModalHeader";

function Modal(){
return(
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <ModalHeader/>
        <div className="modal-body">
            <form id="form" >
            <input type="hidden" id="indice"/>
            <div className="form-row">
                <div className="col">
                    <select id="tipo" className="form-control">
                    <option>Tipo animal</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Pájaro</option>
                    <option>Otro</option>
                    </select>
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
);
}
export default Modal;