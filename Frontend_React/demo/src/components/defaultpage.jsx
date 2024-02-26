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
import { blue } from '@mui/material/colors';
import {  useParams } from 'react-router-dom';
 

class MyProduct{
  constructor(id, name, image_url, description, price) {
    this.id = id;
    this.name = name;
    this.image_url = image_url;
    this.description = description;
    this.price = price;
  }

}


function DefaultPage() {

  var inCart ; var valuefind;
 
  let arr1 = [];
  let ExtractedPidsFromLocalStorage = [];


  const [products, setProducts] = useState([]);

  const [todos, setTodos] = useState([]);
	const [todoItem, setTodoItem] = useState(null);
  const [completedTasks, setCompletedTasks] = useState('');

  const params = useParams();
  console.log(`Params   ${params}`)

  useEffect(() => {
   // console.log(`from product useEffect`)
    fetch('http://localhost:3002/api/products')
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
  
  const todos = JSON.parse(localStorage.getItem('todos'));
 //  console.log(`cartArray : ==> ${ cartArray }`);
 
  if (todos) {
    setTodos(todos);
    
  }
}, []);

useEffect(() => {
  //console.log(`setting localstorage todos array`);
  localStorage.setItem('todos', JSON.stringify(todos));
  helperToExtratPid()

}, [todos]);

useEffect(()=>{
  console.log("In Response to todoItem UseEffect  ");
  helperToPrintInCart();
},[todoItem]);

//--------------------------------       Helper Function           ----------------------------

const handleSubmit = (e) => {
 
  var item  =  helperToHandleSubmit(e.target.value);
       
   if (item) {
     console.log(`inside if`);
    // let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
     let newTodoItem = {
       id: item.id,
       productDetails: item
       
     }
     
     setTodos([item, ...todos]);
     setTodoItem({});
   } else {
    console.log(`inside else`);
     setTodoItem({});
   }

  
 };


const helperToHandleSubmit = (e) =>{
  
      var item;
      for (let i = 0; i < products.length; i++) {
     
      if (products[i].id === Number(e)){
        const  item = new MyProduct(products[i].id, products[i].name, products[i].image_url, products[i].description);
         //console.log("product found", item);
        return  item;
         break;
    }
  } }

  const helperToExtratPid = ()=> {
     //console.log("helperToExtratPid am called")
    for (let i = 0; i < todos.length-1; i += 1) {
      ExtractedPidsFromLocalStorage.push(todos[i].id)
   }
            
  }
  
  const helperToPrintInCart = (pid) =>{
      helperToExtratPid();
      for (let i = 0; i < ExtractedPidsFromLocalStorage.length-1; i += 1) {
      if(pid == ExtractedPidsFromLocalStorage[i]){
          console.log(`Found in cart ${ ExtractedPidsFromLocalStorage[i]}`)
          return true;
       }
    }
       return false;
    }
 
  
  return ( 
  <>
 <h1>  Your Cart is fulled with   : { todos.length} items </h1>

 
 
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


      {inCart = helperToPrintInCart( product.id ) }  


    { inCart ? <Button sx={{ color: 'Red'}}  size="small" >INCART </Button> : 
                          <Button size="small" name="subject" type="submit" value={product.id} onClick={ handleSubmit } > Add To Cart </Button>  }             
        
        
        <Link to={`/details/${product.id}`}> <Button size="small">Details</Button></Link>
        </CardActions>
      </Card>
  </div>
  ))
  }
  </div>

</> );

  
  }



export default DefaultPage;


