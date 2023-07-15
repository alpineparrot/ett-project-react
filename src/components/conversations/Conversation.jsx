import "./conversation.css";
import sofie from "../../assets2/sofie.jpg";


export default function Conversation() {
    return (
    <div className="conversation">
        <img className="conversationImg" src={sofie} alt="sofei"/>
        <span className="conversationName">Bryan</span>
    </div>
    )
}