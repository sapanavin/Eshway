
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import  CartDisplayTable   from './helper_components/cartdisplaytable';
import  CartContextProvider  from '../context/CartContextProvider';

function AddToCart() {

 const { cartItems } = useContext();
  

return(
  <div> 
   <h1>Shopping Cart</h1>
   <hr></hr>
   <div>
      <CartContextProvider>
      {/* { addtocart.map((product) => <p>{ product.id } {product.name}</p>)}  */}
      </CartContextProvider>
    </div>
  
  
  </div>
)

}
export default AddToCart;