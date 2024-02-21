import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { getProducts } from "../Api/productapi";
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const arr = [1,2,3,4,5,6,7];
const products = [{"id":1,"category":"books"},{"id":2,"category":"books2"}];
  const updatedNums = products.map((p)=>{
    return <li key={p.id} >{p.id} {p.name}</li>;
});


export default function CustomSideBar({ theme }) {

  return (
  <>

        <div  className = "container" >

             <div className= "customsidebar">      
            <IconButton 
                
              size="large"  edge="start"   color="inherit"  aria-label="open drawer"
            sx={{ mr: 2 }}
            >              <HomeIcon fontSize="large" />
            </IconButton>
            

                      {updatedNums}
                      <h2>I am a { theme}!</h2>
             </div>     
       
              <div className = "defaultoutlet">
                <Outlet />
             </div>
        </div>

        
      
   </>
  );
}
