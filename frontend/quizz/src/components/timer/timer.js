import react, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Home from "../home/home";
import {Route, Routes} from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

const Timer = (props) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [second, setSecond] = useState(60);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const restartGame = () => {
        props.onData("Data use restartgame");
    };
    const handleGoHome = () => {
        navigate("/");
    };
    useEffect(() => {
        console.log(second);
        let timeCount = null
        if (second === 0) {
            setShowModal(true);
            clearInterval(timeCount);
        } else {
            if (props.timerStart) {
                timeCount = setInterval(() => {
                    setSecond(second - 1);
                }, 1000)
            } else {
                clearInterval(timeCount);
            }
        }
        return () => clearInterval(timeCount);
    }, [second, props.timerStart]);

    return (
        <>
            <h1
                style={{
                    color: 'black',
                    position: 'fixed',
                    top: '15%',
                    left:'10%'
                }}
            >{second}:sec</h1>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Hết giờ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn đã thua rồi!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={restartGame}>
                        Chơi Lại
                    </Button>
                    <Button variant="secondary" onClick={handleGoHome}>
                        Chọn Bộ Câu Hỏi khác
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Timer;
