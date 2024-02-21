import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
//  assets\images\products\books\book-luv2code-1000.png

export default function CustomCard({ product }) {
  
  return (
    <Card sx={{ 
      // maxWidth: 345,
      m:1,
      width: [100, 200, 400]
      
     }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { product.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/addtocart/${product.id}`}> <Button size="small">Add To Cart</Button> </Link>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}