import react, {useEffect, useState} from 'react';
import styled from "styled-components";
import Help from "../help/help";
import ReactDOM from 'react-dom'
import questions from "../../assets/question.json";
import 'bootstrap/dist/css/bootstrap.css';

const ContentStyles = styled.div`
  .correct-style {
    background-color: forestgreen;

  }
  .incorrect-style {
    background-color: aliceblue;
  }
`

const Contents = (props) => {
    let [answer, setAnswer] = useState(props.answerSelect);
    let [datahelp, setDataHelp] = useState();
    let [randomFirst, setRandomFirst] = useState();
    let [randomSecond, setRandomSecond] = useState();
    const [showButton, setShowButton] = useState(true);
    function handleDataChange(data) {
        console.log(data);
        fiftyFiftyGenerator(props.question.correct)
    }
    const randomNumHelperFunc = num => Math.floor(Math.random() * num);
    const fiftyFiftyGenerator = num => {
        // let randomFirst;
        // let randomSecond;
        // Generate first random number
        randomFirst = randomNumHelperFunc(4);
        while (randomFirst === num) {
            randomFirst = randomNumHelperFunc(4);
        }
        randomSecond = randomNumHelperFunc(4);
        while (randomSecond === randomFirst || randomSecond === num) {
            randomSecond = randomNumHelperFunc(4);
        }
        // hide two wrong answers
            if(showButton === false) {
                document.querySelector(`[id='${randomSecond}']`).style.display = "";
                document.querySelector(`[id='${randomFirst}']`).style.display = "";
            } else {
                document.querySelector(`[id='${randomSecond}']`).style.display = "none";
                document.querySelector(`[id='${randomFirst}']`).style.display = "none";
            }
    };
    return (
        <ContentStyles>
            <div className="row" style={{marginTop: 30}}>
                {props.question.content.map((item, index) => (
                    <div className="col-6">
                        <div style={{margin: 5}}>
                            <button  type="button" id={index} style={{width: 380 ,color:'black'}} className={` ${props.answerSelect === props.question.correct && props.answerSelect === index?'correct-style':'incorrect-style'}`}>
                                <div key={index}
                                     onClick={() => props.handleSelect(index)}>
                                    {item}
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/*<p>Data from Child: {datahelp}</p>*/}
            <Help parentCallback={handleDataChange} setShowBtn={setShowButton} showBtn={showButton}/>
        </ContentStyles>
    )
}
export default Contents;
