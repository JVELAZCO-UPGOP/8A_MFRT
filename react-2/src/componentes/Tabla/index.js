import React, {useState} from "react";

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
    ])
    return (
        <table className="table table-striped table-hover ">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Propietario</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="lista-mascotas" >
            {""}
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