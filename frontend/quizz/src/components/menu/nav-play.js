import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";



function Nav() {
    return (
        <Navbar fixed="top">


            <Container>

                <Navbar.Brand href="#home">

                    <Link to={'/start'}>  <Button variant="light">Quay về </Button></Link>

                </Navbar.Brand>

                <Navbar.Brand href="#home">

                    {/* <Link>  <Button variant="warning" >Dừng lại </Button></Link> */}

                </Navbar.Brand>

                <Navbar.Brand href="#home">

                    {/* <small> Điểm : <smaill style={{color:"red"}}>500</smaill></small> */}

                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">


                </Navbar.Collapse>

            </Container>

        </Navbar>

    );

}
export default Nav;