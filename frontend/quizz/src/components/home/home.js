import Register from "../info/register";
import Login from "../info/login";
import Navbars from "../menu/navbar";
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Footer from "../menu/footer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// import {Row, Container, Col} from "react-bootstrap";

function Home() {
    const [jsonData, setJsonData] = useState([]);
    const [status, setStatus] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/api/category/');
            const data = await response.json();
            setJsonData(data.data);
            setStatus(true)
            console.log(jsonData)
        }
        fetchData();
    }, []);
    return (
        <>
            <Container>
                <Navbars />
                <Row style={{ marginTop: 50 }}>
                    <Col md={12}>
                        <img style={{ width: 1300 }} src="https://kenh14cdn.com/thumb_w/640/2016/cover-quizz-1458020660190.jpg" />
                    </Col>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    <h2 style={{ color: 'blueviolet', textAlign: 'center' }}>Chọn thể loại yêu thích để chơi </h2>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    <Col md={12}>
                    </Col>
                </Row>
                <Row style={{ margin: 15, textAlign: 'center' }}>
                    {jsonData.map(item => (
                        <Col md={4} >
                            <Card style={{ width: '18rem', border: '4px solid blueviolet', background: 'lemonchiffon' }}>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Link to="/start">  <Button variant="warning">Vào trong</Button> </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row style={{ margin: 15, textAlign: 'center' }}>
                    <Col md={4} >
                        <Card style={{ width: '18rem', border: '5px solid blueviolet', background: 'lemonchiffon' }}>

                            <Card.Body>
                                <Card.Title>Lịch sử 2</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Link to={'/start'}> <Button variant="warning">Vào trong</Button> </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card style={{ width: '18rem', border: '5px solid blueviolet', background: 'lemonchiffon' }}>

                            <Card.Body>
                                <Card.Title>Văn hóa</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to={'/start'}> <Button variant="warning">Vào trong</Button> </Link>
                            </Card.Body>
                        </Card>
                    </Col><Col md={4} >
                        <Card style={{ width: '18rem', border: '5px solid blueviolet', background: 'lemonchiffon' }}>

                            <Card.Body>
                                <Card.Title>Thể Thao</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to={'/start'}> <Button variant="warning">Vào trong</Button> </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Footer />
            </Container>
        </>
    );
}
export default Home;
