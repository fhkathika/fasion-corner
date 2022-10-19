import React from 'react';
import '../sidebar/sidebar.css'
import {LineStyle,Timeline,TrendingUp} from '@mui/icons-material';
const SideBar = () => {
    return (
        <div className="sidebar">
         <div className="sidebarWrapper">
             <h3 className="sidebarMenu">Dashboard</h3>
             <ul className="sidebarList">
              <li className="sidebarListItem">
                  <LineStyle/>
                  Home
              </li>  <li className="sidebarListItem">
                  <Timeline/>
                  Analitics
              </li>  <li className="sidebarListItem">
                  <TrendingUp/>
                  Sales
              </li>  <li className="sidebarListItem">
                  <LineStyle/>
                  Home
              </li>
             </ul>
         </div>
        </div>
    );
};

export default SideBar;