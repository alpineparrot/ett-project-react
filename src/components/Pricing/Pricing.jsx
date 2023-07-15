import "./messenger.css"
import Topbar from "../topbar/Topbar"
import React from 'react'
import Conversation from "../conversations/Conversation";
import Message from "../message/Message"
import ChatOnline from "../chatOnline/ChatOnline"

export default function Pricing({own}) {
    return (
      <>
        {/* <Topbar /> */}
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input
                placeholder="Search for friends"
                className="chatMenuInput"
              />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                <Message />
                <Message own={true} />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatOnlineWrapper"
                  placeholder="write something..."
                ></textarea>
                <button className="chatSubmitButton">Send</button>
              </div>
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatBoxWrapper">
              <ChatOnline />
            </div>
          </div>
        </div>
      </>
    );
}
