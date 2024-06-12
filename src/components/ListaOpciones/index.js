import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    //metodo map para recorrer arreglos ->arreglo.map ((equipo,index) => {})///
    //return <option></option>
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ]
    
    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        { equipos.map ((equipo, index) => {
                return <option key= {index} value={equipo}>{equipo} </option>
           }) }
     
    {/* //a el codigo superior lo podemos dejar correr así: 
    //{ equipos.map ((equipo, index) => <option key= {index}>{equipo}</option>)} */}
        </select>
    </div>
}

export default ListaOpciones