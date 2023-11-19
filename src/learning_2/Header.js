import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to={'/'}>홈으로</Link>
            </h1>
            <div className="menu">
                <Link to={'/create_word'} className="link">단어 추가</Link>
                <div className="link">Day 추가</div>
            </div>            
        </div>
    )
}