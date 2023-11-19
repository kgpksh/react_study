import { useState } from "react"

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setisDone] = useState(false);

    function showToggles() {
        setIsShow(!isShow)
    }

    function toggleDone() {
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