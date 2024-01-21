import { CartWidget } from "./CartWidget/CartWidget";
import { Boxes } from "react-bootstrap-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import { useGetCategories } from "../../hooks/useProducts";

function NavbarComponent() {
  const { categories } = useGetCategories();

  return (
    <Navbar expand="sm" fixed="top" className="bg-body-tertiary">
      <Container>
        <Link className="me-3 link-dark link-underline-opacity-0" to="/">
          <Boxes /> 3D2
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {categories.map((item, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${item}`}>{item}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/Cart">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
