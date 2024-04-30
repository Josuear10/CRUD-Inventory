import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Producto from './Components/Producto/Producto';
import CrearProducto from './Components/Producto/CrearProducto';
import ActualizarProducto from './Components/Producto/ActualizarProducto';
import Entrada from './Components/Entrada/Entrada';
import CrearEntrada from './Components/Entrada/CrearEntrada';
import ActualizarEntrada from './Components/Entrada/ActualizarEntrada';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Cliente from './Components/Cliente/Cliente';
import CrearCliente from './Components/Cliente/CrearCliente';
import ActualizarCliente from './Components/Cliente/ActualizarCliente';
import DetalleProducto from './Components/DetalleProducto/DetalleProducto';
import CrearDetalleProducto from './Components/DetalleProducto/CrearDetalleProducto';
import ActualizarDetalleProducto from './Components/DetalleProducto/ActualizarDetalleProducto';
import Empleados from './Components/Empleados/Empleados';
import CrearEmpleados from './Components/Empleados/CrearEmpleados';
import ActualizarEmpleados from './Components/Empleados/ActualizarEmpleados';
import Requisicion from './Components/Requisicion/Requisicion';
import CrearRequisicion from './Components/Requisicion/CrearRequisicion';
import ActualizarRequisicion from './Components/Requisicion/ActualizarRequisicion';
import Oficina from './Components/Oficinas/Oficinas';
import CrearOficina from './Components/Oficinas/CrearOficina';
import ActualizarOficina from './Components/Oficinas/ActualizarOficinas';
import Ordenes from './Components/Orden/Ordenes';
import CrearOrden from './Components/Orden/CrearOrden';
import ActualizarOrdenes from './Components/Orden/ActualizarOrdenes';
import Proveedor from './Components/Proveedor/Proveedor';
import CrearProveedor from './Components/Proveedor/CrearProveedor';
import ActualizarProveedor from './Components/Proveedor/ActualizarProveedor';
import Salida from './Components/Salida/Salida';
import CrearSalida from './Components/Salida/CrearSalida';
import ActualizarSalida from './Components/Salida/ActualizarSalida';
import DetalleOrden from './Components/DetalleOrden/DetalleOrden';
import CrearDetalleOrden from './Components/DetalleOrden/CrearDetalleOrden';
import ActualizarDetalleOrden from './Components/DetalleOrden/ActualizarDetalleOrden';

function App() {
  return (
    <div className="App">
      {/* Barra de navegacion */}
      <Navbar/>

      {/* Paths */}
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home />}>  </Route>

          {/* Producto */}
          <Route path='/producto' element={<Producto />}>  </Route>
          <Route path='/producto/crearproducto' element={<CrearProducto />}>  </Route>
          <Route path='/producto/actualizarproducto/:id' element={<ActualizarProducto />}>  </Route>

          {/* Entrada */}
          <Route path='/entrada' element={<Entrada />}>  </Route>
          <Route path='/entrada/crearentrada' element={<CrearEntrada />}>  </Route>
          <Route path='/entrada/actualizarentrada/:id' element={<ActualizarEntrada />}>  </Route>

          {/* Cliente */}
          <Route path='/cliente' element={<Cliente />}>  </Route>
          <Route path='/cliente/crearcliente' element={<CrearCliente />}>  </Route>
          <Route path='/cliente/actualizarcliente/:id' element={<ActualizarCliente />}>  </Route>

          {/* DetalleProducto */}
          <Route path='/detalleproducto' element={<DetalleProducto />}>  </Route>
          <Route path='/detalleproducto/creardetalleproducto' element={<CrearDetalleProducto/>}>  </Route>
          <Route path='/detalleproducto/actualizardetalleproducto/:id' element={<ActualizarDetalleProducto />}>  </Route>

          {/* Empleados */}
          <Route path='/empleados' element={<Empleados />}>  </Route>
          <Route path='/empleados/crearempleados' element={<CrearEmpleados/>}>  </Route>
          <Route path='/empleados/actualizarempleados/:id' element={<ActualizarEmpleados />}>  </Route>

          {/* Requisicion */}
          <Route path='/requisicion' element={<Requisicion />}>  </Route>
          <Route path='/requisicion/crearrequisicion' element={<CrearRequisicion/>}>  </Route>
          <Route path='/requisicion/actualizarrequisicion/:id' element={<ActualizarRequisicion />}>  </Route>

          {/* Oficina */}
          <Route path='/oficina' element={<Oficina />}>  </Route>
          <Route path='/oficina/crearoficina' element={<CrearOficina/>}>  </Route>
          <Route path='/oficina/actualizaroficina/:id' element={<ActualizarOficina />}>  </Route>

          {/* Ordenes */}
          <Route path='/ordenes' element={<Ordenes />}>  </Route>
          <Route path='/ordenes/crearordenes' element={<CrearOrden/>}>  </Route>
          <Route path='/ordenes/actualizarordenes/:id' element={<ActualizarOrdenes />}>  </Route>

          {/* Proveedores */}
          <Route path='/proveedores' element={<Proveedor />}>  </Route>
          <Route path='/proveedores/crearproveedores' element={<CrearProveedor/>}>  </Route>
          <Route path='/proveedores/actualizarproveedores/:id' element={<ActualizarProveedor />}>  </Route>

          {/* Proveedores */}
          <Route path='/salida' element={<Salida />}>  </Route>
          <Route path='/salida/crearsalida' element={<CrearSalida/>}>  </Route>
          <Route path='/salida/actualizarsalida/:id' element={<ActualizarSalida />}>  </Route>

          {/* Detalle Orden */}
          <Route path='/detalleorden' element={<DetalleOrden />}>  </Route>
          <Route path='/detalleorden/creardetalleorden' element={<CrearDetalleOrden/>}>  </Route>
          <Route path='/detalleorden/actualizardetalleorden/:id' element={<ActualizarDetalleOrden />}>  </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;