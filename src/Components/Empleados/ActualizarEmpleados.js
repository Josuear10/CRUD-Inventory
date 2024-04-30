import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarEmpleados() {
    const { id } = useParams();
    const [emp_id, setIdempleado] = useState('');
    const [emp_primernombre, setPrimernombre] = useState('');
    const [emp_segundonombre, setSegundonombre] = useState('');
    const [emp_primerapellido, setPrimerapellido] = useState('');
    const [emp_segundoapellido, setSegundoapellido] = useState('');
    const [emp_puesto, setPuesto] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('ID del Empleado:', id);
        axios.get(`http://localhost:6060/empleados/${id}`)
            .then(res => {
                const data = res.data;
                setIdempleado(data.emp_id);
                setPrimernombre(data.EMP_PRIMERNOMBRE);
                setSegundonombre(data.EMP_SEGUNDONOMBRE);
                setPrimerapellido(data.EMP_PRIMERAPELLIDO);
                setSegundoapellido(data.EMP_SEGUNDOAPELLIDO);
                setPuesto(data.EMP_PUESTO);
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:6060/empleados/${id}`, {
            emp_id,
            emp_primernombre,
            emp_segundonombre,
            emp_primerapellido,
            emp_segundoapellido,
            emp_puesto
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
                <div className="mb-2">
                        <label htmlFor="">Primer Nombre</label>
                        <input type="text" className="form-control" 
                        value={emp_primernombre} onChange={e => setPrimernombre(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Segundo Nombre</label>
                        <input type="text" className="form-control" 
                        value={emp_segundonombre} onChange={e => setSegundonombre(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Primer Apellido</label>
                        <input type="text" className="form-control" 
                        value={emp_primerapellido} onChange={e => setPrimerapellido(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Segundo Apellido</label>
                        <input type="text" className="form-control" 
                        value={emp_segundoapellido} onChange={e => setSegundoapellido(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Puesto</label>
                        <input type="text" className="form-control" 
                        value={emp_puesto} onChange={e => setPuesto(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2">Actualizar</button>
                </form>
            </div>
        </div>
    );
}

export default ActualizarEmpleados;
