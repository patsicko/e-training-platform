import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Marks from '../table/Table';


const Featured = () => {
  return (
    <div className='featured'>
     <div className="top">
     <h1 className="title">Training progress</h1>
     <MoreVertIcon fontSize='small'/>
     </div>
     <div className="bottom">
       <div className="featuredChart">
        <CircularProgressbar  value={40} text={"40%"} strokeWidth="15"/>
       </div>
       
       {/* <p className="title">Total sales made today</p>
       <p className="amount">$420</p>
       <p className="desc">



        Previous transactions processing. Last payments not included
       </p> */}

        Payment
       <div className="summary">
        <div className="item">
            <div className="itemTitle">Total</div>
            <div className="itemResult positive">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount ">$600</div>
            </div>
        </div>
        <div className="item">
            <div className="itemTitle">Paid</div>
            <div className="itemResult positive">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount"> $350 </div>
            </div>
        </div>
        <div className="item">
            <div className="itemTitle">Rest </div>
            <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount">$250</div>
            </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Featured;