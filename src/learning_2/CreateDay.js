import { useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch"

export function CreateDay() {
    const history = useNavigate();
    function addDay() {
        fetch(`http://localhost:3001/days/`, {
            method :'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                day : days.length + 1,
              })
        })
        .then(res => {
            if(res.ok) {
                alert("Day 추가가 완료되었습니다.")
                history(`/`)
            }
        })
    }
    const days = useFetch('http://localhost:3001/days')
    return (
        <div>
            <div>현재 일 수 : {days.length}일</div>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}