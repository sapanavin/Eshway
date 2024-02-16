import * as React from 'react';
import Box from '@mui/material/Box';
import CustomSideBar from './sidebar';



export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' , position:'relative',left:'0px', border:'120px',borderColor:'primary'}}>
      
      <CustomSideBar /><h1>from DataGridDemo</h1>
    </Box>
  );
}