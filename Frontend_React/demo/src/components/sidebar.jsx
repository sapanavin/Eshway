import * as React from 'react';
import Box from '@mui/material/Box';
import { getProducts } from "../Api/productapi";

const arr = [1,2,3,4,5,6,7];
const products = [{"id":1,"category":"books"},{"id":2,"category":"books2"}];
  const updatedNums = products.map((p)=>{
    return <li key={p.id} >{p.id} {p.name}</li>;
});


export default function CustomSideBar() {
  return (
    <Box
      sx={{ width: '15%', height: '100%',top:'0px',position:'relative', maxWidth: 360, bgcolor: 'background.paper',
    backgroundColor:'grey' }}
    >
       

                {updatedNums}
        
            
    </Box>
  );
}
