import "./chatOnline.css"
import sofie from "../../assets2/sofie.jpg";


export default function ChatOnline() {
    return (
      <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img className="chatOnlineImg" src={sofie} alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Sofie Choi</span>
        </div>
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img className="chatOnlineImg" src={sofie} alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Sofie Choi</span>
        </div>
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img className="chatOnlineImg" src={sofie} alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Sofie Choi</span>
        </div>
      </div>
    );
}