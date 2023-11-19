import { useParams } from "react-router-dom"
import Word from "./Word";
import useFetch from "./hooks/useFetch";

export default function Day() {
    const {day} = useParams();
    const wordList =  useFetch(`http://localhost:3001/words?day=${day}`)
    
    return(
        <table>
            <tbody>
                {wordList.map(word => (
                    <Word word = {word} key={word.id} />
                ))}
            </tbody>
            
        </table>
    )
}