import { useState } from "react"

export default function Word({ word : w}) {
    const [word, setWord] = useState(w);
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

    function del() {
        if(window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`,
            {method : 'DELETE'})
            .then(res => {
                if(res.ok) {
                    setWord({id : 0});
                }
            })
        }

        if(word.id === 0) {
            return null;
        }
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
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}