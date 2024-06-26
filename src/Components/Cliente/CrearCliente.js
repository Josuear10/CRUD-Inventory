import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearCliente() {
    const [cli_nit, setNit] = useState('');
    const [cli_primernombre, setPrimernombre] = useState('');
    const [cli_segundonombre, setSegundonombre] = useState('');
    const [cli_primerapellido, sePrimerapellido] = useState('');
    const [cli_segundoapellido, setSegundoapellido] = useState('');
    const [cli_departamento, setDepartamento] = useState('');
    const [cli_municipio, setMunicipio] = useState('');
    const [cli_casa, setCasa] = useState('');
    const [cli_calle, setCalle] = useState('');
    const [cli_avenida, setAvenida] = useState('');
    const [cli_zona, setZona] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:6060/cliente', {
        cli_nit,
        cli_primernombre,
        cli_segundonombre,
        cli_primerapellido,
        cli_segundoapellido,
        cli_departamento,
        cli_municipio,
        cli_casa,
        cli_calle,
        cli_avenida,
        cli_zona })
        .then(res => {
            console.log(res);
            navigate('/');  
        }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h3>Agregar Cliente</h3>
                    <div className="mb-2">
                        <label htmlFor="">NIT</label>
                        <input type="text" placeholder="Ingrese NIT" className="form-control"
                        value={cli_nit} onChange={e=> setNit(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Primer Nombre</label>
                        <input type="text" placeholder="Ingrese primer nombre" className="form-control"
                        value={cli_primernombre} onChange={e=> setPrimernombre(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Segundo Nombre</label>
                        <input type="text" placeholder="Ingrese segundo nombre" className="form-control"
                        value={cli_segundonombre} onChange={e=> setSegundonombre(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Primer Apellido</label>
                        <input type="text" placeholder="Ingrese primer apellido" className="form-control"
                        value={cli_primerapellido} onChange={e=> sePrimerapellido(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Segundo Apellido</label>
                        <input type="text" placeholder="Ingrese segundo nombre" className="form-control"
                        value={cli_segundoapellido} onChange={e=> setSegundoapellido(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Departamento</label>
                        <input type="text" placeholder="Ingrese departamento" className="form-control"
                        value={cli_departamento} onChange={e=> setDepartamento(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Municipio</label>
                        <input type="text" placeholder="Ingrese municipio" className="form-control"
                        value={cli_municipio} onChange={e=> setMunicipio(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">No. Casa</label>
                        <input type="text" placeholder="Ingrese No. Casa" className="form-control"
                        value={cli_casa} onChange={e=> setCasa(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Calle</label>
                        <input type="text" placeholder="Ingrese calle" className="form-control"
                        value={cli_calle} onChange={e=> setCalle(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Avenida</label>
                        <input type="text" placeholder="Ingrese avenida" className="form-control"
                        value={cli_avenida} onChange={e=> setAvenida(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Zona</label>
                        <input type="text" placeholder="Ingrese zona" className="form-control"
                        value={cli_zona} onChange={e=> setZona(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2">Guardar</button>
                </form>
            </div>
        </div>
    );
}

