import React from "react";
import BotonAccion from "../BotonAccion";
import "./Fila.css";


function Fila({index, entidad}){
    return(
    <tr>
        <th scope="row">{index}</th>
        <td>{entidad.tipo}</td>
        <td>{entidad.nombre}</td>
        <td>{entidad.propietario}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
            <BotonAccion tipo="editar"/>  
            <BotonAccion tipo="eliminar"/>   
            </div>
        </td>
    </tr>
    )};
    export default Fila;