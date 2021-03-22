const listaConsultas = document.getElementById("lista-consultas");
const mascota = document.getElementById("mascota");
const veterinario = document.getElementById("veterinario");

let consultas = [];
let mascotas = [];
let veterinarios = [];

const url = "http://localhost:5000";

async function listarConsultas(){
    const entidad = "consultas";
try {
    const respuesta  = await fetch(`${url}/${entidad}`);
    const consultasDelServidor = await respuesta.json();
    if (Array.isArray(consultasDelServidor)) {
        consultas  = consultasDelServidor;
    }
    if (respuesta.ok) {
        const htmlConsultas = consultas.map(
            (consulta, indice) =>
            `<tr>
            <th scope="row">1</th>
            <td>${consulta.mascota.nombre}</td>
            <td>${consulta.veterinario.nombre} ${consulta.veterinario.apellido}</td>
            <td>${consulta.diagnostico}</td>
            <td>${consulta.fechaCreacion}</td>
            <td>${consulta.fechaEdicion}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info">Editar</button>
                </div>
            </td>
        </tr>` 
        )
        .join("");
        listaConsultas.innerHTML = htmlConsultas;
    }
} catch (error) { 
    throw error;
}
}

listarConsultas();

async function listarMascotas(){
    const entidad = "mascotas";
try {
    const respuesta  = await fetch(`${url}/${entidad}`);
    const mascotasDelServidor = await respuesta.json();
    if (Array.isArray(mascotasDelServidor)) {
        mascotas  = mascotasDelServidor;
    }
    if (respuesta.ok) {
        mascotas.forEach((_mascota, indice) =>{
            const optionActual = document.createElement('option');
            optionActual.innerHTML = _mascota.nombre;
            optionActual.value = indice;
            mascota.appendChild(optionActual);
        });
    }
} catch (error) { 
    throw error;
}
}

listarMascotas();

async function listarVeterinarios(){
    const entidad = "veterinarios";
try {
    const respuesta  = await fetch(`${url}/${entidad}`);
    const veterinariosDelServidor = await respuesta.json();
    if (Array.isArray(veterinariosDelServidor)) {
        veterinarios  = veterinariosDelServidor;
    }
    if (respuesta.ok) {
        veterinarios.forEach((_veterinario, indice) =>{
            const optionActual = document.createElement('option');
            optionActual.innerHTML = `${_veterinario.nombre} ${_veterinario.apellido}`;
            optionActual.value = indice;
            veterinario.appendChild(optionActual);
        });
    }
} catch (error) { 
    throw error;
}
}
listarVeterinarios();