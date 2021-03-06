const listaMascotas = document.getElementById('lista-mascotas')
const tipo = document.getElementById('tipo')
const nombre = document.getElementById('nombre')
const propietario = document.getElementById('propietario')
const form = document.getElementById('form')
const btnGuardar = document.getElementById('btn-guardar')
const indice = document.getElementById('indice')
const modal_content = document.getElementById('modal-content')
const cerrar  = document.querySelectorAll(".close")[0];

cerrar.addEventListener('click', () => {
  modal_content.classList.remove('show');
});





let mascotas = [
    {
    tipo: "Perro",
    nombre: "Andy",
    propietario: "Monica"
    },
    {
      tipo: "Gato",
      nombre: "bigotes",
      propietario: "Verito"
      }
];

function listarMascotas(){
    const htmlmascotas = mascotas.map((mascota, index)=> `<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.propietario}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar" ><i class="far fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
      </div>
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmlmascotas;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
  Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));

}


function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    propietario: propietario.value
  };
  const accion = btnGuardar.innerHTML;
  switch(accion) {
    case 'Editar':
      mascotas[indice.value] = datos;
      break;
    default:
      mascotas.push(datos);
      break;
  }
  listarMascotas();
  resetModal();
}

function editar(index) {
  return function cuandoCliqueo() {
    btnGuardar.innerHTML = 'Editar'
    $('#exampleModalCenter').modal('toggle');
    const mascota = mascotas[index];
    nombre.value = mascota.nombre;
    propietario.value = mascota.propietario;
    tipo.value = mascota.tipo;
    indice.value = index;
  }
}

function resetModal(){
    nombre.value = '';
    propietario.value = '';
    tipo.value = '';
    indice.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar(index){
  return function clickEnEliminar(){
    mascotas =  mascotas.filter((mascota, indiceMascota)=> indiceMascota !== index);
    listarMascotas();
  }
}

listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;