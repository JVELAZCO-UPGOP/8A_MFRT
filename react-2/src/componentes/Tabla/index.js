import React, {useState} from "react";
import Encabezado from "./Encabezado";

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
            <tbody id="lista-mascotas" >
            <Encabezado columnas = {columnas}/>
            {mascotas.map(
            (mascota, index) => <tr>
            <th scope="row">{index}</th>
            <td>{mascota.tipo}</td>
            <td>{mascota.nombre}</td>
            <td>{mascota.propietario}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>
        )}
        </tbody>
        </table>
    );
}
export default Tabla;