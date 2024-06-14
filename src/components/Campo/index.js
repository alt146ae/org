import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {

    //Destructiruacion
    const {type = "text"} = props
    //console.log(type);

   // const [valor, actualizarValor] = useState("")
    //console.log("Datos: ", props);
    const placeholderModificado = `${props.placeholder}...`
    
    //ver como son los type console.log(props.type);
    
    const manejarCambio = (e) =>{
       // console.log("cambio", e.target.value);
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}
export default Campo