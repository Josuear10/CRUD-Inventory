import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearProducto() {
    
    // const [pro_id, setIdProducto] = useState('');
    const [pro_nombre, setNombreProducto] = useState('');
    const [pro_unidaddemedida, setUnidadDeMedida] = useState('');
    const [pro_descripcion, setDescripcion] = useState('');
    const [pro_cantidad, setCantidad] = useState('');
    const [pro_valor, setValor] = useState('');
    const [ofi_id, setOfiId] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:6060/producto', {  pro_nombre, pro_unidaddemedida, pro_descripcion, pro_cantidad, pro_valor, ofi_id })
        .then(res => {
            console.log(res);
            navigate('/');  
        }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h3>Agregar Producto</h3>
                    
                    <div className="mb-2">
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Ingrese nombre producto." className="form-control"
                        value={pro_nombre} onChange={e=> setNombreProducto(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Unidad Medida</label>
                        <input type="text" placeholder="Ingrese Unidad de medida." className="form-control"
                        value={pro_unidaddemedida} onChange={e=> setUnidadDeMedida(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Descripción</label>
                        <input type="text" placeholder="Ingrese Descripción Producto." className="form-control"
                        value={pro_descripcion} onChange={e=> setDescripcion(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Cantidad</label>
                        <input type="text" placeholder="Ingrese cantidad" className="form-control"
                        value={pro_cantidad} onChange={e=> setCantidad(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Valor Unitario</label>
                        <input type="text" placeholder="Ingrese valor unitario" className="form-control"
                        value={pro_valor} onChange={e=> setValor(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">ID Oficina</label>
                        <input type="text" placeholder="Ingrese ID de Oficina" className="form-control"
                        value={ofi_id} onChange={e=> setOfiId(e.target.value)} />
                    </div>

                    <button type="submit" href="/producto" className="btn btn-success mb-2">Guardar</button>
                </form>
            </div>
        </div>
    );
}

