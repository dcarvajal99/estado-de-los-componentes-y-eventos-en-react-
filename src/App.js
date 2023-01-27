import Button from './Components/Button' 
/* import Formulario from './Components/Form/Formulario';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function App() {
  

  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState("");
  const [mensaje, setMensaje] = useState("")
  
  const enaButton = () => {
    if (nombre.length > 0  && contraseña.length > 0) {
        console.log("hola");
        setError(true);
        return;
    }
    setError(false);
  };

  const submitButton = (e) =>{
    console.log("a");
    e.preventDefault();
    if(nombre==='ADL' && contraseña==='252525'){
      setMensaje('login success')
      setAlert(true)
  }else{
    setMensaje('invalid credentials')
      setAlert(false)
  }
  }
  return (<>  
      <h1>Desafío Estado de los Componentes y eventos.</h1>
      {mensaje != "" && <div id="" className={alert ? "alert alert-success" : "alert alert-warning"} >{mensaje}</div>}
      <form onChange={enaButton} onSubmit={submitButton}>
            <div className="form-group" >
                <label>Nombre</label>
                <input
                    type="text"
                    id="text"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={(e) => setContraseña(e.target.value)}
                />
            </div>
            {error ? <Button  text="Iniciar Sesion" /> : null}
        </form>
      </>);
}

export default App;
