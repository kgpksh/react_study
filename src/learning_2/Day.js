import dummyData from "../data.json"
import { useParams } from "react-router-dom"
import Word from "./Word";

export default function Day() {
    const day = useParams().day;
    const wordList = dummyData.words.filter(word => word.day === Number(day));
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