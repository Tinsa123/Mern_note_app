import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="md" style={{backgroundColor:"#158cba"}}>
      <Container >
        <Navbar.Brand>
          <Link to="/" style={{"textDecoration":"none",color:"unset"}}>Notes Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav  className='d-flex flex-row justify-content-end' >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
          
           
            <Nav.Link >
              <Link to="/myNotes" style={{"textDecoration":"none",color:"unset"}}>My Notes</Link>
              </Nav.Link>
          
            </Nav>
            <NavDropdown title="Setting" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tinsa Baby</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Logout
              </NavDropdown.Item>
             
            
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;