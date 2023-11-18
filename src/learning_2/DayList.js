import dummyData from "../data.json";

export function DayList() {
    return (
        <ul className="list_day">
            {dummyData.days.map(day => (
                <li key={day.id}>Day {day.day}</li>
            ))}
        </ul>
    )
}