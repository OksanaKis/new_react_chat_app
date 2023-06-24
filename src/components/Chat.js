import React from 'react';
import '../components/Chat.css';
import { Avatar } from '@mui/material';
import sendIcon from "../images/send4.png";

function Chat() {
  return (
    <div className="chat">
        <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
        <h3>Room Name</h3>
        </div>
        </div>
        <div className="chat__body">
        <div className="chat__bodyMessage">
          
        </div>
        </div>
        <div className="chat__footer">
          <form>
            <input type="text" placeholder="Type a message"/>
            <button type="submit" >
            {" "}
            <img className="sendIcon" src={sendIcon} alt="" />
          </button>
          </form>
        </div>
    </div>
  )
}

export default Chat;