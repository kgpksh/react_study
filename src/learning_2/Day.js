import dummyData from "../data.json"

export default function Day() {
    return(
        <table>
            <tbody>
                {dummyData.words.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    )
}