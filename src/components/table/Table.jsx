
import "./table.scss";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";


const Marks=()=>{

  const[marks,setMarks]=useState([{
    html:"50%",
    css:"30%",
    javascript:"45%",
    react:"",
    next:'',
    typescript:'',
    node:''
  }]);



  return(
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">HTML</TableCell>
            <TableCell align="right">CSS&nbsp;</TableCell>
            <TableCell align="right">JavaScript&nbsp;</TableCell>
            <TableCell align="right">React.js&nbsp;</TableCell>
            <TableCell align="right">Next.js&nbsp;</TableCell>
            <TableCell align="right">Typescript&nbsp;</TableCell>
            <TableCell align="right">Node.js&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {marks.map((score) => (
            <TableRow
              key={score.total}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Score
              </TableCell>
              <TableCell align="right">{score.html}</TableCell>
              <TableCell align="right">{score.css}</TableCell>
              <TableCell align="right">{score.javascript}</TableCell>
              <TableCell align="right">{score.react}</TableCell>
              <TableCell align="right">{score.next}</TableCell>
              <TableCell align="right">{score.typescript}</TableCell>
              <TableCell align="right">{score.node}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  )
}

export default Marks;


