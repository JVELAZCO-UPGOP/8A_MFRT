const listaConsultas = document.getElementById("lista-consultas");
const mascota = document.getElementById("mascota");
const veterinario = document.getElementById("veterinario");
const historia = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
const indice = document.getElementById('indice');
const btnGuardar = document.getElementById('btn-guardar');
const formulario = document.getElementById("formulario");
const url = "http://localhost:5000";

let consultas = [];
let mascotas = [];
let veterinarios = [];


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
                    <button class="editar" type="button" class="btn btn-info">Editar</button>
                </div>
            </td>
        </tr>` 
        )
        .join("");
        listaConsultas.innerHTML = htmlConsultas;
        Array.from(document.getElementsByClassName('editar')).forEach(
            (botonEditar, index)=>(botonEditar.onclick = editar(index))
            );
    }
} catch (error) { 
    console.log({ error });
    $(".alert-danger").show();
}
}



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
            const optionActual = document.createElement("option");
            optionActual.innerHTML = _mascota.nombre;
            optionActual.value = indice;
            mascota.appendChild(optionActual);
        });
    }
} catch (error) { 
    console.log({ error });
    $(".alert-danger").show();
}
}



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
    console.log({ error });
    $(".alert-danger").show();
}
}

function editar(index) {
    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar';
        $('#exampleModalCenter').modal('toggle');
        const consulta = consultas[index];
        indice.value = index;
        mascota.value = consulta.mascota.id;
        veterinario.value = consulta.veterinario.id;
        historia.value = consulta.historia;  
        diagnostico.value = consulta.diagnostico;  
    }
}


async function enviarDatos(evento) {
    const entidad  = "consultas";
    evento.preventDefault();
    try {
    const datos = {
    mascota: mascota.value, 
    veterinario: veterinario.value,
    historia: historia.value,
    diagnostico: diagnostico.value,
    };
    if (validar(datos) === true){
        const accion = btnGuardar.innerHTML;
        let urlEnvio = `${url}/${entidad}`;
        let method = 'POST';
        if(accion === "Editar") {
        urlEnvio += `/${indice.value}`; 
        method = 'PUT';
        }
        const respuesta = await fetch(urlEnvio, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
        mode: "cors",
        });
        if (respuesta.ok) {
        listarConsultas();
        resetModal();
    }
    formulario.classList.add('was-validated');
    return;
    }
    $(".alert-warning").show();
    //formulario.classList.add('was-validated');
    } catch (error) {
        console.log({ error });
        $(".alert-danger").show();
    }
}

function resetModal(){
    indice.value = '';
    mascota.value = '';
    veterinario.value = '';
    historia.value = '';
    diagnostico.value = '';
    btnGuardar.innerHTML = 'Crear';
    $('#exampleModalCenter').modal('toggle');
}

function validar(datos){
if (typeof datos !== "object") return false; 
let respuesta = true;
    for(let llave in datos){
        if (datos[llave].length === 0) {
            document.getElementById(llave).classList.add('is-invalid');
            respuesta = false;
        }  else{
            document.getElementById(llave).classList.remove('is-invalid');
            document.getElementById(llave).classList.add('is-valid');
        }  
    }
    return respuesta;
}

btnGuardar.onclick = enviarDatos;
listarConsultas();
listarVeterinarios();
listarMascotas();