import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Salida() {
  const [Salida, setSalida] = useState([]);

  useEffect(() => {
    console.log("Realizando solicitud GET...");
    axios
      .get("http://localhost:6060/salida")
      .then((res) => {
        console.log("Solicitud GET exitosa:", res);
        setSalida(res.data);
      })
      .catch((err) => {
        console.log("Error en la solicitud GET:", err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6060/salida/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      // Manejar el error de eliminación aquí
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100 bg-white rounded p-3">
        
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID Salida</th>
                <th>ID Producto</th>
                <th>Fecha de Salida</th>
                <th>Movimiento</th>
                <th>Unidad de Medida</th>
                <th>Cantidad</th>
                <th>Precio de Salida</th>
                <th>Serie</th>
                <th>FEL</th>
                <th>Cliente ID</th>
              </tr>
            </thead>
            <tbody>
              {Salida.map((data, i) => (
                <tr key={i}>
                  <td>{data.SAL_ID}</td>
                  <td>{data.PRO_ID}</td>
                  <td>{data.SAL_FECHASALIDA}</td>
                  <td>{data.SAL_MOVIMIENTO}</td>
                  <td>{data.SAL_UNIDADMEDIDA}</td>
                  <td>{data.SAL_CANTIDAD}</td>
                  <td>{data.SAL_PRECIOSALIDA}</td>
                  <td>{data.SAL_SERIE}</td>
                  <td>{data.SAL_NFEL}</td>
                  <td>{data.CLI_ID}</td>

                  <td>
                    <Link
                      to={`/salida/actualizarsalida/${data.SAL_ID}`}
                      className="btn btn-primary btn-accion"
                    >
                      ACTUALIZAR
                    </Link>
                    <button
                      className="btn btn-danger ms-2 btn-accion"
                      onClick={() => handleDelete(data.SAL_ID)}
                    >
                      ELIMINAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/salida/crearsalida" className="btn btn-success mb-3">
          AGREGAR
        </Link>
      </div>
    </div>
  );
}

export default Salida;
