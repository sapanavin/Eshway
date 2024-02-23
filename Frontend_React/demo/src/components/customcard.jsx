import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function CustomCard({ product_list }) {
  [cartitem, setCartItem] = React.useState(0);


  return ( <>
        { product_list.map((product) => (
        <div key={product.id}>
          
            <Card  sx={{ m:1, width: [100, 200, 400] }} >
              <CardMedia   component="img" alt= {product.name} height="260"
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
        </div>
        ))
        }
          
     </> );
    
}