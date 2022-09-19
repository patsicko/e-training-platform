import React from 'react';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LuggageIcon from '@mui/icons-material/Luggage';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from "./logo.png"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Sidebar = () => {
  return (

    <div className='sidebar'>
        <div className="top">
            <span className="logo">
                <img src={logo} height="50px" width="50px" className='patsitech'/>
            </span>
        </div>

        <hr />
        <div className="center">
       
         <ul>
            <div className="title">MAIN</div>
            <li>
            {<DashboardIcon className='icon'/>}
                <span>Dashboard</span>
            </li>
            <div className="title">LISTS</div>
            <li>
                <PersonOutlineIcon className='icon'/>
                <span>Trainees</span>
            </li>
            <li>
                <Inventory2Icon className='icon'/>
                <span>Courses</span>
            </li>
            <li>
                <LuggageIcon className='icon'/>
                <span>Ongoing courses</span>
            </li>
            <li>
                < AutoStoriesIcon className='icon'/>
                <span>Completede courses</span>
            </li>

            <div className="title">USEFUL</div>
            <li>
                <AssessmentIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <div className="title">SERVICE</div>
            <li>
                <SettingsSystemDaydreamIcon className='icon'/>
                <span>System health</span>
            </li>
            <li>
                <PsychologyIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsIcon className='icon'/>
                <span>Settings</span>
            </li>
            <div className="title">USER</div>
            <li>
                <AccountCircleIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppIcon className='icon'/>
                <span>Logout</span>
            </li>
         </ul>
        </div>
        <div className="bottom">
            <div className="colorOPtion"></div>
            <div className="colorOPtion"></div>
            
        </div>
        
    </div>
  )
}

export default Sidebar