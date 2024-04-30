import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Nabvar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Módulo Inventarios</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menú" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/producto">Producto</NavDropdown.Item>
              <NavDropdown.Item href="/entrada">Entrada</NavDropdown.Item>
              <NavDropdown.Item href="/cliente">Clientes</NavDropdown.Item>
              <NavDropdown.Item href="/detalleproducto">Detalle Productos</NavDropdown.Item>
              <NavDropdown.Item href="/detalleorden">Detalle Órdenes</NavDropdown.Item>
              <NavDropdown.Item href="/empleados">Empleados</NavDropdown.Item>
              <NavDropdown.Item href="/requisicion">Requisiciones</NavDropdown.Item>
              <NavDropdown.Item href="/oficina">Oficinas</NavDropdown.Item>
              <NavDropdown.Item href="/ordenes">Órdenes</NavDropdown.Item>
              <NavDropdown.Item href="/proveedores">Proveedores</NavDropdown.Item>
              <NavDropdown.Item href="/salida">Salidas</NavDropdown.Item>      
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}