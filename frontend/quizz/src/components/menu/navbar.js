import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup, MDBNavbarLink, MDBNavbarItem
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Navbars() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><Link to={'/'}> <img style={{width: 100, borderRadius: 50}}
                                                            src="https://www.sangia.vn/uploads/Image/2020/12/25/C%C3%A1c%20c%C3%A2u%20%C4%91%E1%BB%91%20vui%20h%E1%BA%A1i%20n%C3%A3o.jpg"/>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">code@gmail.com</Nav.Link>
                        <Nav.Link href="/login">Logout</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Nhập thể loại.."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button style={{
                            border: ' 3px solid blueviolet',
                            background: 'blueviolet',
                            color: 'white',
                            width: 100,
                            height: 50
                        }}  variant="outline-success">Tìm </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
