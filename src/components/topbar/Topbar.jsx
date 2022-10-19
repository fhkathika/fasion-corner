import React from 'react';
import "./topbar.css"
import { NotificationsNone,Language,Settings} from '@mui/icons-material';
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">fasion corner admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                      
                    </div>
                    <img src="/img/profileImg.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;