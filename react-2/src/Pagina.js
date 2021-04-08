import React, {Component} from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";

class Pagina extends Component {
    constructor(props){
        super(props);
        this.state = {
        mostrarModal: false,
        };
    }

    cambiarModal = () => {
this.setState({mostrarModal: !this.state.mostrarModal})
    };

//Codigo del componente

//el método render siempre debe ir de ultimo
    render (){
    return (
        <>
        <div className="container">    
            <Nav/>
            <ActionsMenu cambiarModal = {this.cambiarModal}/>
            <Tabla/>
            {this.state.mostrarModal && <Modal/>}
        </div>
        </>
        );
    }  
} 
export default Pagina;
