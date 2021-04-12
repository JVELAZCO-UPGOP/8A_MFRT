import React, {Component} from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import {listarEntidad, crearEditarEntidad} from "./servicio";

class Pagina extends Component {
    constructor(props){
        super(props);
        this.state = {
        mostrarModal: false,
        entidades: [],
        objeto: {},
        };
    }

    cambiarModal = () => {
    this.setState({mostrarModal: !this.state.mostrarModal})
    };

    listar = async () => {
        const {entidad} = this.props;
        const entidades  = await listarEntidad({entidad});
        this.setState({entidades});
    };

    manejarInput = (evento) => {
        evento.persist();
        console.log({evento});
    }

    crearEntidad(){

    }
    componentDidMount(){
        this.listar();
    }


//Codigo del componente

//el método render siempre debe ir de ultimo
    render (){
        const {titulo = "Pagina sin titulo"} = this.props;
    return (
        <>
        <div className="container">    
            <Nav/>
            <ActionsMenu 
            cambiarModal = {this.cambiarModal} 
            titulo={titulo}/>
            <Tabla entidades={this.state.entidades}/>
            {this.state.mostrarModal && 
            (<Modal 
            cambiarModal = {this.cambiarModal} 
            manejarInput={this.manejarInput} 
            
            />)}
        </div>
        </>
        );
    }  
} 
export default Pagina;
