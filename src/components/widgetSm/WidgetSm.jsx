import React from 'react';
import './widgetsm.css'
import {Visibility} from '@mui/icons-material';
const WidgetSm = () => {
    return (
        <div className='widgetsm'>
            <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img  src="/img/profileImg.png" alt="" className="widgetSmImg" />
                <div className='widgetSmUser'>
                <span className="widgetSmUsername">Fariha Hasan</span>
                <span className="widgetSmUserTitle">Front end Developer</span>
                </div>
               <button className="wudgetSmButton">
                   <Visibility className='widgetSmIcon'/>
                   Display
                   </button>
            </li>
            <li className="widgetSmListItem">
                <img src="/img/profileImg.png" alt="" className="widgetSmImg" />
                <div className='widgetSmUser'>
                <span className="widgetSmUsername">Fariha Hasan</span>
                <span className="widgetSmUserTitle">Front end Developer</span>
                </div>
               <button className="wudgetSmButton">
                   <Visibility className='widgetSmIcon'/>
                   Display
                   </button>
            </li><li className="widgetSmListItem">
                <img src="/img/profileImg.png"  alt="" className="widgetSmImg" />
                <div className='widgetSmUser'>
                <span className="widgetSmUsername">Fariha Hasan</span>
                <span className="widgetSmUserTitle">Front end Developer</span>
                </div>
               <button className="wudgetSmButton">
                   <Visibility className='widgetSmIcon'/>
                   Display
                   </button>
            </li><li className="widgetSmListItem">
                <img src="/img/profileImg.png"  alt="" className="widgetSmImg" />
                <div className='widgetSmUser'>
                <span className="widgetSmUsername">Fariha Hasan</span>
                <span className="widgetSmUserTitle">Front end Developer</span>
                </div>
               <button className="wudgetSmButton">
                   <Visibility className='widgetSmIcon'/> Display
                   </button>
            </li>
            
        </ul>
        </div>
    );
};

export default WidgetSm;