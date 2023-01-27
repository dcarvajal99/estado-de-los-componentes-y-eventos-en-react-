import React, { useState } from "react";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");

    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        //Validación
        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }
        setError(false);
        setNombre('');
        setContraseña('');
    };
    return (
        <div>
        <form onSubmit={validarDatos}>
            <div className="form-group" >
            {error ? <p>Todos los campos son obligatorios</p> : null}
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setContraseña(e.target.value)}
                />
            </div>
        </form>
        <h1>Datos ingresados</h1>
        {nombre} - {contraseña}
        </div>
    );
};
export default Formulario;
