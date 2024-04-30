import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from './Clientes';
import CrearCliente from './CrearCliente';
import ActualizarCliente from './ActualizarCliente';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clientes />}>  </Route>
          <Route path='/crearcliente' element={<CrearCliente />}>  </Route>
          <Route path='/actualizarcliente/:id' element={<ActualizarCliente />}>  </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;