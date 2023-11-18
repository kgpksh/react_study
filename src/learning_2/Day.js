import dummyData from "../data.json"
import { useParams } from "react-router-dom"

export default function Day() {
    const day = useParams().day;
    const wordList = dummyData.words.filter(word => word.day === Number(day));
    return(
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    )
}