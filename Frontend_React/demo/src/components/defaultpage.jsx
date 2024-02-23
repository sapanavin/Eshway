import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useState, useEffect , useContext} from 'react';




function DefaultPage() {
  const [products, setProducts] = useState([]);

  const [addtocart, setAddToCart]  = useState([]);
  
  useEffect(() => {
    window.localStorage.clear();
    window.localStorage.setItem('mycart', [])
    fetch('http://localhost:3002/api/products/get')
       .then((response) => response.json())
       .then((data) => {
          //console.log(data);
          setProducts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

useEffect(() => {

  
  if(window.localStorage.getItem('mycart')){
    console.log("I got item");
  }
  const json = window.localStorage.getItem('mycart');
   json.parse().push(addtocart);
  
}
   
 , [ addtocart])

 const handleSubmit =(product) => {
  
  setAddToCart();
  console.log(`From Click Event :`);
  console.log(` addtocart value $}`)
  
}
        
  return ( 
  <>
  <h1> Here is Add To Cart length :</h1>
    
     { addtocart.id }
 
 <div className="productdisplay">
  { products.map((product) => (
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
        <Button size="small" onClick={()=>setAddToCart(product)}>Add To Cart</Button> 
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
  </div>
  ))
  }
     
</div>
</> );

  
  }


export default DefaultPage;