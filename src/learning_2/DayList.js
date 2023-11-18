import { Link } from "react-router-dom";
import dummyData from "../data.json";

export default function DayList() {
    return (
        <ul className="list_day">
            {dummyData.days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                </li>
            ))}
        </ul>
    )
}