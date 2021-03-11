const listaDueños = document.getElementById('lista-dueños')
const pais = document.getElementById('pais')
const nombre = document.getElementById('nombre')
const identificacion = document.getElementById('identificacion')
const form = document.getElementById('form')
const btnGuardar = document.getElementById('btn-guardar')
const indice = document.getElementById('indice')
const apellido = document.getElementById('apellido')


let dueños = [
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

function listarDueños(){
    const htmlDueños = dueños.map((dueño, index)=> `<tr>
    <th scope="row">${index}</th>
    <td>${dueño.nombre}</td>
    <td>${dueño.apellido}</td>
    <td>${dueño.pais}</td>
    <td>${dueño.identificacion}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar" ><i class="far fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
      </div>
    </td>
  </tr>`).join("");
  listaDueños.innerHTML = htmlDueños;
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
      dueños[indice.value] = datos;
      break;
    default:
      dueños.push(datos);
      break;
  }
  listarDueños();
  resetModal();
}

function editar(index) {
    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar'
        $('#exampleModalCenter').modal('toggle');
        const dueño = dueños[index];
        indice.value = index;
        nombre.value = dueño.nombre;
        apellido.value = dueño.apellido;
        identificacion.value = dueño.identificacion; 
        pais.value = dueño.pais;  
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
        dueños =  dueños.filter((dueño, indiceDueño)=> indiceDueño !== index);
        listarDueños();
    }
}

listarDueños();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;