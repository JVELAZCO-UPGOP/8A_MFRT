import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import Select from "../Select";
import "./Modal.css";
import Input from "../Input";

const TiposMascota = [
    {valor:"Perro", etiqueta:"Perro"},
    {valor:"Gato", etiqueta:"Gato" },
    {valor:"Pájaro", etiqueta:"Pájaro"},
    {valor:"Otro", etiqueta:"Otro"},
    ];
const propietario =[
    {valor:"Verito", etiqueta:"Verito"},
    {valor:"Monica", etiqueta:"Monica" },
    {valor:"Rafa", etiqueta:"Rafa"},
    {valor:"Daniel", etiqueta:"Daniel"},
    {valor:"Vince", etiqueta:"Vince"},
    ];
    
function Modal({
cambiarModal = () =>{}, 
manejarInput = () =>{}, 
crearEntidad = () =>{}, 
objeto = {},
children = [],
}){
return(
    <>
    <div className="modal" >
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <ModalHeader cambiarModal = {cambiarModal}/>
        <div className="modal-body">
            <form id="form" >
            <div className="form-row"> 
                {children}
            </div>
                <div className="form-row"> 
                <div className="col">
                <Input nombreCampo = "nombre" tipo="text" onInput={manejarInput} placeholder="Nombre" value ={objeto.nombre}/>
                </div>
                    <div className="col">
                    <Select options={propietario} nombreCampo= "propietario" onChange={manejarInput} placeholder = "Propietario" value ={objeto.propietario}/>
                    </div>
                </div>
            </form>
        </div>
        <ModalFooter 
        cambiarModal = {cambiarModal} 
        crearEntidad={crearEntidad}/>
        </div>
    </div>
</div>
<div className="modal-backdrop fade show" ></div>
</>
);
}
export default Modal;