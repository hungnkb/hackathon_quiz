import react, { useState } from 'react';

import questions from '../../assets/question.json'

import Contents from "../contents/contents";
import {Button, Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import Rankingg from "../rankcomponent/rankcomponent";

const Question = (props) => {
    let [answerSelect, setAnswerSelect] = useState();

    let [question, setQuestion] = useState(0);

    let [gameEnd, setGameEnd] = useState();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const restartGame = () => {
        props.onData("Data use restartgame");
    };
    const handleGoHome = () => {
        navigate("/");
    };
    const handleSelect = (data) => {
        if (data === questions[question].correct) {
            setAnswerSelect(data);

            setTimeout(() => {
                setAnswerSelect(null)
                setQuestion(question + 1);

                const randomNumHelperFunc = num => Math.floor(Math.random() * num);

            }, 2000)
        } else {
            setGameEnd(true);
                setShowModal(true);
            setQuestion(0)
        }
    }
    return (
        <>
            <center>
                <div style={{width:1110, height:220,background:'lemonchiffon',marginTop:80}}>
                    <div>
                        {/* <p style={{textAlign: "right",background:'white'}}>00:30</p> */}
                    </div>
                        <div style={{ color: "white",height:35,background :'blueviolet'}}>
                            {questions[question].question}
                        </div>
                    <Contents question={questions[question]} answerSelect={answerSelect} handleSelect={(data) => handleSelect(data)}/>
                    {/*<Rankingg />*/}
                    <Modal show={showModal} onHide={handleCloseModal} backdrop="static" style={{height: "50%"}}>
                        <Modal.Header closeButton={false}>
                            <Modal.Title>Đán Án Sai</Modal.Title>
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
                </div>
            </center>

        </>

    )
}
export default Question;