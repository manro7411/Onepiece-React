/* eslint-disable jsx-a11y/alt-text */
import { Navbar, Container, Nav,Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./AppHeader.css";
function AppHeader(props) {
    const { value, onValueChange } = props;
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img className='app-header-logo' src="/images/PngItem_2142197.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="./Contact.html" target="_blank">Contact</Nav.Link>
                        <Nav.Link href="#" >About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="text" placeholder='Search' value={value} onChange={(event) => { onValueChange(event.target.value) }}></FormControl>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AppHeader;