import CartWidget from './CartWidget/CartWidget';
import { Boxes } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useCategory } from "../../hooks/useProducts";


function NavbarComponent() {

  const { category } = useCategory();

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link className='me-3 link-dark link-underline-opacity-0' to='/'><Boxes /> 3D2</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {category.map((item, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${item}`}>{item}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            {/* <Nav.Link href="#">Contacto</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;