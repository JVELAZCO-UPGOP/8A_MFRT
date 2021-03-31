import React from "react";

function Mascotas() {
    return (
    <>
    <div className="container">    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Veterinaria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/index.html">Mascotas<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/veterinarios.html">Veterinarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/consultas.html">Consultas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Dueños.html">Dueños</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    
        <div className="actions-menu">
            <h1>Macotas</h1>
            <div className="actions-menu-content">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Nueva
            </button>
                <div className="alert alert-danger alert-dismissible" role="alert">
                    <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    

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
            </tbody>
        </table>
    </div>
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header" >
                <h5 className="modal-title" id="exampleModalLongTitle">Nueva Mascota</h5>
                <button type="button" className="close modal-close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form id="form">
                    <input type="hidden" id="indice"/>
                        <div className="form-row">
                            <div className="col">
                            <select id="tipo" className="form-control">
                                <option>Tipo animal</option>
                                <option>Perro</option>
                                <option>Gato</option>
                                <option>Pájaro</option>
                                <option>Otro</option>
                            </select>
                            </div>
                        </div>
                    <div className="form-row"> 
                        <div className="col">
                            <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="col">
                            <select id="propietario" class="form-control">
                                <option>Dueño</option>
                                <option>Verito</option>
                                <option>Monica</option>
                                <option>Rafa</option>
                                <option>Daniel</option>
                                <option>Vince</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" id="btn-guardar">Crear</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
} 
export default Mascotas;
