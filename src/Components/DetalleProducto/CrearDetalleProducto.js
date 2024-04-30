import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearDetalleProducto() {
    const [pro_id, setIdproducto] = useState('');
    const [dtp_nombrecategoria, setNombrecategoria] = useState('');
    const [dtp_categoria, setIdcategoria] = useState('');
    const [dtp_stockminimo, setStockminimo] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:6060/detalleproducto', {
            pro_id,
            dtp_nombrecategoria,
            dtp_categoria,
            dtp_stockminimo
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
                <h3>Crear Detalle Producto</h3>
                    <div className="mb-2">
                        <label htmlFor="">ID Producto</label>
                        <input type="text" className="form-control" 
                        value={pro_id} onChange={e => setIdproducto(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Nombre Categoria</label>
                        <input type="text" className="form-control" 
                        value={dtp_nombrecategoria} onChange={e => setNombrecategoria(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Dpt. Categoria</label>
                        <input type="text" className="form-control" 
                        value={dtp_categoria} onChange={e => setIdcategoria(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Stock Minimo</label>
                        <input type="text" className="form-control" 
                        value={dtp_stockminimo} onChange={e => setStockminimo(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2">Guardar</button>
                </form>
            </div>
        </div>
    );
}

