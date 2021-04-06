import React, {useState} from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import "./Tabla.css";

function Tabla(){
    const [mascotas, setMascotas] = useState([
        {
            tipo: "Perro",
            nombre: "Andy",
            propietario: "Monica",
        },
        {
            tipo: "Perro",
            nombre: "Andy",
            propietario: "Monica",
        },
    ]);
    const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : [];
    return (
        <table className="table table-striped table-hover ">
            <Encabezado columnas = {columnas}/>
            <tbody id="lista-mascotas" >
            {mascotas.map(
            (mascota, index) => (
            <Fila mascota={mascota} index={index}/>
        ))}
        </tbody>
        </table>
    );
}
export default Tabla;