import {Card, Col, Container, Row} from "react-bootstrap";
import Nav from "../menu/nav-play";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Footer from "../menu/footer";
import Question from "../question/Question";
function GameShow() {
    return (
        <>
            <Container>
                <Nav/>
                <Row style={{marginTop: 50}}>
                    <Col md={12}>
                        <Question/>
                    </Col>
                </Row>
                <p style={{margin:15}}></p>
                < Footer/>
            </Container>
        </>
    )
}

export default GameShow;
