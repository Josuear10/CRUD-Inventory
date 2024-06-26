import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ActualizarProducto() {
    const { id } = useParams();
    const [pro_id, setIdProducto] = useState('');
    const [pro_nombre, setNombreProducto] = useState('');
    const [pro_unidaddemedida, setUnidadDeMedida] = useState('');
    const [pro_descripcion, setDescripcion] = useState('');
    const [pro_cantidad, setCantidad] = useState('');
    const [pro_valor, setValor] = useState('');
    const [ofi_id, setOfiId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log('ID del Producto:', id);
        // Fetch data for the specified product ID (id)
        axios.get(`http://localhost:6060/producto/${id}`)
            .then(res => {
                const data = res.data;
                setIdProducto(data.PRO_ID);
                setNombreProducto(data.PRO_NOMBRE);
                setUnidadDeMedida(data.PRO_UNIDADDEMEDIDA);
                setDescripcion(data.PRO_DESCRIPCION);
                setCantidad(data.PRO_CANTIDAD);
                setValor(data.PRO_VALOR);    
                setOfiId(data.OFI_ID) 
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:6060/producto/${id}`, {
            pro_id,
            pro_nombre,
            pro_unidaddemedida,
            pro_descripcion,
            pro_cantidad,
            pro_valor,
            ofi_id
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h3>Actualizar Producto</h3>
                    <div className="mb-2">
                        <label htmlFor="">Nombre Producto</label>
                        <input type="text" className="form-control" value={pro_nombre} onChange={e => setNombreProducto(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Unidad de Medida</label>
                        <input type="text" className="form-control" value={pro_unidaddemedida} onChange={e => setUnidadDeMedida(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Descripcion</label>
                        <input type="text" className="form-control" value={pro_descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Cantidad</label>
                        <input type="text" className="form-control" value={pro_cantidad} onChange={e => setCantidad(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Valor Unitario</label>
                        <input type="text" className="form-control" value={pro_valor} onChange={e => setValor(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">ID Oficina</label>
                        <input type="text" className="form-control" value={ofi_id} onChange={e => setOfiId(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2">Actualizar</button>
                </form>
            </div>
        </div>
    );
}


