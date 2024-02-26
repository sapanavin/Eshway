import React from 'react';
import { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

function CategoryWiseDisplay() {

const params = useParams();
console.log(`Params   ${params}`)

  const [singlecategories, setSingleCategories] = useState([]);
  
   
  
  useEffect(() => {
    
    console.log(`Params : ${ params.id }`)
    
    fetch(`http://localhost:3002/api/categories/${params.id}`)
       .then((response) => response.json())
       .then((data) => {
          //console.log(data);
          setSingleCategories(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, [params]);

 return ( 
 <div className="productdisplay">
  { singlecategories.map((product) => (
  <div key={product.id}>
    
      <Card  sx={{ m:1, width: [100, 200, 400] }} >
        <CardMedia   component="img" alt= {product.name} height="260"
          image={`../${product.image_url}`}
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
    
</div> );
}
export default CategoryWiseDisplay;