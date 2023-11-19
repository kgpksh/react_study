import { useState } from "react"
import useFetch from "./hooks/useFetch";

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setisDone] = useState(false);

    function showToggles() {
        setIsShow(!isShow)
    }

    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method :'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone: !isDone
            })
        })
        .then(res => {
            if(res.ok) {
                setisDone(!isDone)
            }
        })
        setisDone(!isDone)
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked = {isDone}
                onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={showToggles}>뜻 보기</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}