import React from  "react";
import "./Input.css";

function Input ({tipo = "text", nombreCampo, onInput = () => {} }){
    return(
    <input type={tipo}
    id={nombreCampo} 
    name={nombreCampo} 
    className="form-control" 
    placeholder={nombreCampo}
    onInput={onInput} />
    );
}
export default Input;