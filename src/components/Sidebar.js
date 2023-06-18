import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import search from "../images/search.png";
import SidebarChat from "../components/SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar className='sidebar__avatar'/>
                <div className="sidebar__headerRight"></div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <img className="search" src={search} alt="" />
                <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
            <h2>Chats</h2>
            <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;