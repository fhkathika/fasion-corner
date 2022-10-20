import React from 'react';
import '../sidebar/sidebar.css'
import {LineStyle,Timeline,TrendingUp,PersonOutline,WorkOutline,Report,Message} from '@mui/icons-material';
const SideBar = () => {
    return (
        <div className="sidebar">
         <div className="sidebarWrapper">
             <div className='sidebarMenu'>
             <h3 className="sidebarTitle">Dashboard</h3>
             <ul className="sidebarList">
              <li className="sidebarListItem active">
                  <LineStyle className='sidebarIcon'/>
                  Home
              </li> 
               <li className="sidebarListItem">
                  <Timeline className='sidebarIcon'/>
                  Analitics
              </li>  <li className="sidebarListItem">
                  <TrendingUp/>
                  Sales
              </li>
             </ul>
             </div>  
                  <div className='sidebarMenu'>
             <h3 className="sidebarTitle">Quick Menu</h3>
             <ul className="sidebarList">
              <li className="sidebarListItem active">
                  <PersonOutline className='sidebarIcon'/>
                  User
              </li> 
               <li className="sidebarListItem">
                  <Timeline className='sidebarIcon'/>
                  Product
              </li>  <li className="sidebarListItem">
                  <TrendingUp/>
                  Transection
              </li>  <li className="sidebarListItem">
                  <LineStyle/>
                  Reports
              </li>
             </ul>
             </div>   
                 <div className='sidebarMenu'>
             <h3 className="sidebarTitle">Notifications</h3>
             <ul className="sidebarList">
              <li className="sidebarListItem active">
                  <LineStyle className='sidebarIcon'/>
                  Mail
              </li> 
               <li className="sidebarListItem">
                  <Timeline className='sidebarIcon'/>
                  Feedback
              </li> 
               <li className="sidebarListItem">
                  <Message/>
                  Massages
              </li>  
             </ul>
             </div> 
                 <div className='sidebarMenu'>
             <h3 className="sidebarTitle">Staff</h3>
             <ul className="sidebarList">
             
               <li className="sidebarListItem">
                  <WorkOutline className='sidebarIcon'/>
                  Manage
              </li> 
               <li className="sidebarListItem">
                  <Timeline className='sidebarIcon'/>
                  Analytics
              </li>  
              <li className="sidebarListItem">
                  <Report className='sidebarIcon'/>
                  Reports
              </li>
             </ul>
             </div>  
            
             
         </div>
        </div>
    );
};

export default SideBar;