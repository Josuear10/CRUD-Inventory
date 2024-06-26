import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearRequisicion() {
    const [req_fecha, setFecha] = useState('');
    const [pro_id, setIdproducto] = useState('');
    const [req_cantidad, setCantidad] = useState('');
    const [emp_id, setIdempleado] = useState('');
    const [ofi_id, setIdoficina] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:6060/requisicion', {
            req_fecha,
            pro_id,
            req_cantidad,
            emp_id,
            ofi_id
         })
        .then(res => {
            console.log(res);
            navigate('/');  
        }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                <h3>Crear Requisicion</h3>
                    <div className="mb-2">
                        <label htmlFor="">Fecha</label>
                        <input type="text" className="form-control" 
                        value={req_fecha} onChange={e => setFecha(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">ID Producto</label>
                        <input type="text" className="form-control" 
                        value={pro_id} onChange={e => setIdproducto(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Cantidad</label>
                        <input type="text" className="form-control" 
                        value={req_cantidad} onChange={e => setCantidad(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">ID Empleado</label>
                        <input type="text" className="form-control" 
                        value={emp_id} onChange={e => setIdempleado(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">ID Oficina</label>
                        <input type="text" className="form-control" 
                        value={ofi_id} onChange={e => setIdoficina(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2">Guardar</button>
                </form>
            </div>
        </div>
    );
}

export default CrearRequisicion;
