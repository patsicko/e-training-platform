import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';


const Home = () => {
  return (
    <div className='home'>
        
        <Sidebar/>

        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="trainees"/>
            <Widget type="courses"/>
            <Widget type="my courses"/>
            <Widget type="cost"/>

          </div>
         <div className="charts">
         <Featured/>
          <Chart/>
         </div>
         <div className="listContainer">
            <div className="listTitle">Score for completed courses</div>
            <Table/>
         </div>

        </div>
    </div>
  )
}

export default Home