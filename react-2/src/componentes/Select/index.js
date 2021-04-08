import React from "react";
import "./Select.css";

function Select(){
    return(
            <select id="tipo" className="form-control">
            <option>Tipo animal</option>
            <option>Perro</option>
            <option>Gato</option>
            <option>Pájaro</option>
            <option>Otro</option>
            </select>
    );
}
export default Select;