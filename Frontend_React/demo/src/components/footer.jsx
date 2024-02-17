import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';





export default function CustomFooter() {
  const [value, setValue] = React.useState(0);




  return (
    <Box sx={{ width: '100%'}}>
      <BottomNavigation
      sx={{backgroundColor:'info.main', mr: 'inherit', color:'white' }}
      
        showLabels
        value={value}
        onChange={(event, newValue) => {setValue(newValue);
        }}

        
      >
        <BottomNavigationAction sx={{  color:'white' }} label="About us" icon={<RestoreIcon />} />
        <BottomNavigationAction sx={{  color:'white' }} label="Contact us" icon={<FavoriteIcon />} />
        <BottomNavigationAction sx={{  color:'white' }} label="Nearby Shops" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}