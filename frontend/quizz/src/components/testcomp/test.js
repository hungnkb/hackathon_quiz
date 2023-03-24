import React, { useState, useEffect } from 'react';
import questions from '../../assets/question.json'

function MyComponent() {
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
    const playSound = () => {
        const sound = new Audio('././sound/intro.mp3');
        sound.play();
    };
    return (
        <div>
            <ul>
                {/*<li>*/}
                {/*    <div>{status?jsonData[0].question:''}</div>*/}
                {/*</li>*/}
                {jsonData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}

            </ul>
            <button onClick={playSound}>Click Me!</button>
        </div>
    );
}
export default MyComponent