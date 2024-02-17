import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { getProducts } from "../Api/productapi";

const arr = [1,2,3,4,5,6,7];
const products = [{"id":1,"category":"books"},{"id":2,"category":"books2"}];
  const updatedNums = products.map((p)=>{
    return <li key={p.id} >{p.id} {p.name}</li>;
});


export default function CustomSideBar({display}) {
function displaySidebar(e){
  console.log(`from displaySidebar : ----->${e.target.value} `)
  display(e.target.value);
  hiddenstatus='hidden';
}
 var hiddenstatus='visible';

  return (
    <Box
      sx={{ width: '15%', height: '85vh',top:'0px',
      position:'relative', maxWidth: 360, 
      bgcolor: 'background.paper',
      backgroundColor:'info.main' ,
      visibility: {hiddenstatus}}}
    >
      <IconButton onClick={displaySidebar} 
        size="large"  edge="start"   color="inherit"  aria-label="open drawer"
       sx={{ mr: 2 }}
>
              <HomeIcon fontSize="large" />
      </IconButton>
       

                {updatedNums}
                <h2>I am a { display }!</h2>
        
            
    </Box>
  );
}
