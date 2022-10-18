import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsLayersFill} from "react-icons/bs";



export const Menu = (props) => {
    return (
      <Navbar className="navbar" expand="lg">
      <Container className='nav-contanier' fluid>
        <Navbar.Brand href="#"><BsLayersFill className='icone-logo'/><spam className="spam-d">DIV</spam>TEXT{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Sobre</Nav.Link>
            <NavDropdown title="Referencias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.bible.com/pt/bible/1608/GEN.1.ARA" target="_blank">Biblia Sagrada</NavDropdown.Item>
              <NavDropdown.Item href="https://www.pensador.com/textos/" target="_blank"> Texto Pensador
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}