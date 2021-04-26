import React, { Component } from "react";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import {listarEntidad, crearEditarEntidad, eliminarEntidad} from "./servicio";

class Pagina extends Component {
    constructor(props){
        super(props);
        this.state = {
        mostrarModal: false,
        entidades: [],
        objeto: {},
        idObjeto:null,
        method: "POST",
        columnas: [],
        };
    }

    cambiarModal = (_evento, method = "POST") => {
    this.setState({ mostrarModal: !this.state.mostrarModal, method })
    };

    listar = async () => {
        const { entidad } = this.props;
        const entidades  = await listarEntidad({ entidad });
        let columnas= [];
        if (Array.isArray(entidades)&& entidades.length > 0){
            columnas  =  Object.keys(entidades[0]) || [];
        }
        this.setState( {entidades, columnas }); 
    };

    manejarInput = (evento) => {
        const { target: {value, name},
        } = evento;
        let { objeto } = this.state;
        objeto = {...objeto, [name]: value};
        this.setState({ objeto });
    };

    crearEntidad = async () => {
        const { entidad } = this.props;
        let { objeto, method, idObjeto } = this.state;
        await  crearEditarEntidad({entidad, objeto, method, idObjeto });
        this.cambiarModal();
        this.listar();
    };

    editarEntidad = (_evento, index) => {
        const objeto = {...this.state.entidades[index]};
        this.setState({ objeto, idObjeto: index}, () =>{
            this.cambiarModal(null, "PUT")
        });
    };

    eliminarEntidad = async (_evento, index) => {
        const {entidad} = this.props;
        const respuesta = await eliminarEntidad({ entidad, idObjeto: index });
        console.log({ respuesta });
        this.listar();
    };

    componentDidMount(){
        //console.log(this.props)
        this.listar();
    }


//Codigo del componente

//el método render siempre debe ir de ultimo
    render (){
        const {titulo = "Pagina sin titulo"} = this.props;
    return (
        <>
            
            <ActionsMenu 
            cambiarModal = {this.cambiarModal} 
            titulo={titulo}/>
            <Tabla 
            entidades={this.state.entidades} 
            editarEntidad={this.editarEntidad} 
            eliminarEntidad ={this.eliminarEntidad}
            columnas = {this.state.columnas}
            />
            {this.state.mostrarModal && 
            (<Modal 
            cambiarModal = {this.cambiarModal} 
            manejarInput={this.manejarInput} 
            crearEntidad={this.crearEntidad}
            objeto = {this.state.objeto}
            />)}
        </>
        );
    }  
} 
export default Pagina;
