import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearOrden() {
    const [ord_id] = useState('');
    const [tra_id] = useState('');
    const [ofi_id, setId] = useState('');
    const [ord_fecha, setFecha] = useState('');
    const [ord_cantidad, setCantidad] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:6060/ordenes', {  ord_id, tra_id, ofi_id, ord_fecha, ord_cantidad})
        .then(res => {
            console.log(res);
            navigate('/');  
        }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h3>Agregar Orden</h3>
                    
                    {/* <div className="mb-2">
                        <label htmlFor="">ID de orden</label>
                        <input type="text" placeholder="Ingrese numero de orden" className="form-control"
                        value={ord_id} onChange={e=> setOrdid(e.target.value)} /> 
                    </div> */}
                    {/* <div className="mb-2">
                        <label htmlFor="">ID Traslado</label>
                        <input type="text" placeholder="Ingrese el numero de la tra" className="form-control"
                        value={tra_id} onChange={e=> setTid(e.target.value)} />
                    </div> */}
                    <div className="mb-2">
                        <label htmlFor="">Oficina ID</label>
                        <input type="text" placeholder="Ingrese la oficina " className="form-control"
                        value={ofi_id} onChange={e=> setId(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Fecha</label>
                        <input type="text" placeholder="Ingrese la fecha" className="form-control"
                        value={ord_fecha} onChange={e=> setFecha(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Cantidad</label>
                        <input type="text" placeholder="Ingrese la cantidad" className="form-control"
                        value={ord_cantidad} onChange={e=> setCantidad(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2">Guardar</button>
                </form>
            </div>
        </div>
    );
}


