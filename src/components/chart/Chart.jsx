// import React from 'react';
// import "./chart.scss";
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


// const data = [
//   {
//     name: 'January',
//     Course: "HTML",
//     Marks:70
    
//   },
//   {
//     name: 'February',
//     Course: "CSS"
    
//   },
//   {
//     name: 'March',
//     Course:"JavaScript"
    
//   },
//   {
//     name: 'April',
//     Course: "React.js"
    
//   },
//   {
//     name: 'May',
//     Course: "Next.js" 
//   },
//   {
//     name: 'June',
//     Course: "Typescript" 
//   },
//   {
//     name: 'July',
//     Course: "Node.js" 
//   }
// ];


// const Chart = () => {
//   return (
// <div className='chart'>

//    <div className="title">Courses for seven months </div>  

    
//    <AreaChart width={730} height={350} data={data}
//      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//      <defs>
//      <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor= "#8884d8" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//     </linearGradient>
   
//   </defs>
//   <XAxis dataKey="name" stroke='gray' />
//   <XAxis dataKey="marks" stroke='gray'/>

//   <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
//   <Tooltip />
//   <Area 
//     type="monotone"
//     dataKey="Course" 
//     stroke="#8884d8"
//     fillOpacity={1}
//     fill="url(#total)"
//    />
 
 
//    </AreaChart>
// </div>
//   )
// }

// export default Chart


import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';




const data = [
  {
    name: 'January',
    Course: "HTML",
    marks:25,
    payment:70
    
  },
  {
    name: 'February',
    Course: "CSS",
    marks:30,
    payment:57
    
  },
  {
    name: 'March',
    Course:"JavaScript",
    marks:74,
    payment:45
    
  },
  {
    name: 'April',
    Course: "React.js",
    marks:''
    
  },
  {
    name: 'May',
    Course: "Next.js",
    marks:''
  },
  {
    name: 'June',
    Course: "Typescript",
    marks:''
  },
  {
    name: 'July',
    Course: "Node.js",
    marks:''

  }
];


 class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Course" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="payment"  barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="marks" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;