import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Topbar() {
  const activeUser=useSelector(state=>state.user.currentUser)
  console.log(activeUser);
const history=useHistory()
const handleLogOut=()=>{
console.warn("apple");
localStorage.clear()
history.push("/login") 
}
  const handleLogin=(e)=>{
    e.preventDefault()
   
      history.push("/login") 
    
  
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shop Corner admin</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <div className="username">
            {
              activeUser?
              <>
                 {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
              <span className="user">{activeUser?.username}</span>
              </>
           
              :
            ""
            }
         
          </div>
          
           <div  >
             {
               activeUser ?
               <span className="LoginButton" onClick={handleLogOut} > LogOut </span>
               :
               <span className="LoginButton" onClick={handleLogin}> LogIn </span>
             }
          
       
          </div>
         
        </div>
      </div>
    </div>
  );
}
