const listaDueños = document.getElementById('lista-dueños');
const nombre = document.getElementById('nombre');
const documento = document.getElementById('documento');
const form = document.getElementById('form');
const indice = document.getElementById('indice');
const apellido = document.getElementById('apellido');
const url = "veterinaria-backend-three.vercel.app/propietarios";
const btnGuardar = document.getElementById('btn-guardar');

let dueños = [];

  async function listarDueños(){
    try {
    const respuesta = await fetch(url);
    const dueñosDelServer = await respuesta.json();
    if (Array.isArray(dueñosDelServer)) {
      dueños = dueñosDelServer;
    }
    if (dueños.length > 0) {
      const htmlDueños = dueños.map((dueño, index)=> `<tr>
      <th scope="row">${index}</th>
      <td>${dueño.nombre}</td>
      <td>${dueño.apellido}</td>
      <td>${dueño.documento}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-info editar" ><i class="far fa-edit"></i></button>
          <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join("");
    listaDueños.innerHTML = htmlDueños;
    Array.from(document.getElementsByClassName('editar')).forEach(
      (botonEditar, index)=>(botonEditar.onclick = editar(index))
      );
    Array.from(document.getElementsByClassName('eliminar')).forEach(
      (botonEliminar, index)=>(botonEliminar.onclick = eliminar(index))
      );
  return;
  }
  listaDueños.innerHTML = `<tr>
  <td colspan="5" class="lista-vacia">No hay veterinarios</td>
        </tr>`;
      } catch (error) {
        console.log({ error });
      $(".alert").show();
      }
  }


async function enviarDatos(evento) {
  evento.preventDefault();
  try {
    const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    documento: documento.value,
};
  let urlEnvio = url;
  let method = "POST";
  const accion = btnGuardar.innerHTML;
  if(accion === "Editar") {
    urlEnvio += `/${indice.value}`; 
    method = "PUT";
  }
  const respuesta = await fetch(urlEnvio, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
    mode: "cors",
  });
  if (respuesta.ok) {
    listarDueños();
    resetModal();
}
  } catch (error) {
    console.log({ error });
    $(".alert").show();
  }
}


function editar(index) {
    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar';
        $('#exampleModalCenter').modal('toggle');
        const dueño = dueños[index];
        indice.value = index;
        nombre.value = dueño.nombre;
        apellido.value = dueño.apellido;
        documento.value = dueño.documento;  
    }
}

function resetModal(){
    indice.value = '';
    nombre.value = '';
    apellido.value = '';
    documento.value = '';
    btnGuardar.innerHTML = 'Crear';
}

function eliminar(index){
  const urlEnvio = `/${url}/${index}`;
    return async function clickEnEliminar(){
        try {
          const respuesta = await fetch(urlEnvio, {
            method:"DELETE",
            mode: "cors",
          });
          if (respuesta.ok) {
            listarDueños();
            resetModal();
          } 
        } catch (error) {
          console.log({ error });
        $(".alert").show();
        }
    };
}

listarDueños();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;