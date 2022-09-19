import React from 'react';
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({ type }) => {

let data;
//temporary

const amount=600;
const paid=350;


switch(type){

  case "trainees":

   data={
    title:"TRAINEES",
    isMoney:false,
    link:"See all trainees",
    icon: <PersonOutlineOutlinedIcon className='icon'
    style={
      {
        backgroundColor:"rgba(255,0,0,0.2)",
        color:"crimson",
      }
    }
    
    />
   };

   break;

   case "courses":

   data={
    title:"ALL COURSES",
    isMoney:false,
    value:7,
    link:"See all courses",
    icon: <AutoStoriesIcon className='icon'
    
    style={
      {
        backgroundColor:"rgba(218,165,32,0.2)",
        color:"goldenrod",
      }
    }
    />
   };

   break;

   case "my courses":

   data={
    title:"MY COURSES",
    isMoney:false,
    value:7,
    link:"View your courses",
    icon: <AutoStoriesIcon className='icon'
    
    style={
      {
        backgroundColor:"rgba(0,128,0,0.2)",
        color:"green",
      }
    }
    />
   };

   break;

   case "cost":

   data={
    title:"COST",
    isMoney:true,
    link:"See payment details",
    icon: <AccountBalanceWalletOutlinedIcon className='icon' 
    
    style={
      {
        backgroundColor:"rgba(128,0,128,0.2)",
        color:"purple",
      }
    }
    />
   };

   break;

   default:
    break;

}



  return (
    <div className='widget'>

        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"} {data.value ? data.value:430}</div>
          <div className="link">{data.link}</div>

        </div>
        <div className="right">
           <div className="percentage positive ">
            {data.isMoney && "$"} { data.isMoney &&  Math.floor(paid*100/600)} %
           <KeyboardArrowUpIcon/>
            
           </div>
          {data.icon}
        </div>
       
    </div>
  )
}

export default Widget