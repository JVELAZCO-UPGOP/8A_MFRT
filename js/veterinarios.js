const listaVeterinarios = document.getElementById('lista-veterinarios')
const pais = document.getElementById('pais')
const nombre = document.getElementById('nombre')
const identificacion = document.getElementById('identificacion')
const form = document.getElementById('form')
const btnGuardar = document.getElementById('btn-guardar')
const indice = document.getElementById('indice')
const apellido = document.getElementById('apellido')


let veterinarios = [
    {
    nombre: "Vince",
    apellido: "Gonzalez",
    pais: "Ecuador",
    identificacion: "132446677445"
    },
    {
        nombre: "Daniel",
        apellido: "Felix",
        pais: "Perú",
        identificacion: "545342782121"
        }
];

function listarVeterinarios(){
    const htmlVeterinarios = veterinarios.map((veterinario, index)=> `<tr>
    <th scope="row">${index}</th>
    <td>${veterinario.nombre}</td>
    <td>${veterinario.apellido}</td>
    <td>${veterinario.pais}</td>
    <td>${veterinario.identificacion}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar" ><i class="far fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
      </div>
    </td>
  </tr>`).join("");
  listaVeterinarios.innerHTML = htmlVeterinarios;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
  Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));

}


function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    nombre: nombre.value,
        apellido: apellido.value,
        identificacion: identificacion.value,
        pais: pais.value,
  };
  const accion = btnGuardar.innerHTML;
  switch(accion) {
    case 'Editar':
      veterinarios[indice.value] = datos;
      break;
    default:
      veterinarios.push(datos);
      break;
  }
  listarVeterinarios();
  resetModal();
}

function editar(index) {
    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar'
        $('#exampleModalCenter').modal('toggle');
        const veterinario = veterinarios[index];
        indice.value = index;
        nombre.value = veterinario.nombre;
        apellido.value = veterinario.apellido;
        identificacion.value = veterinario.identificacion; 
        pais.value = veterinario.pais;  
    }
}

function resetModal(){
    indice.value = '';
    nombre.value = '';
    apellido.value = '';
    identificacion.value = '';
    pais.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar(index){
    return function clickEnEliminar(){
        veterinarios =  veterinarios.filter((veterinario, indiceVeterinario)=> indiceVeterinario !== index);
        listarVeterinarios();
    }
}

listarVeterinarios();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;