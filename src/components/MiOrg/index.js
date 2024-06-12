import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //estado - Hooks 
    //useState
    //const [nombreVariable, funcionaActualiza]= useState(Valorinicial) 
    console.log(props);
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar/OCultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar)
    //}
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}
export default MiOrg