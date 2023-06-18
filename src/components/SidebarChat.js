import React from 'react';
import "../components/SidebarChat.css";
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className="sidebarChat__info">
        <h2 className="sidebarChat__names">Room name</h2>
        <p>Last Message...</p>
        </div>
    </div>
  )
}

export default SidebarChat;