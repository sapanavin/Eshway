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

  var inCart = false;
  const [products, setProducts] = useState([]);

  const [todos, setTodos] = useState([]);
	const [todoItem, setTodoItem] = useState(null);
  const [completedTasks, setCompletedTasks] = useState('');

  useEffect(() => {
   // console.log(`from product useEffect`)
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


 const helperToHandleSubmit = (e) =>{
  
  var item;

    for (let i = 0; i < products.length; i++) {
     
      if (products[i].id === Number(e)){
        const  item = new MyProduct(products[i].id, products[i].name, products[i].image_url, products[i].description);
         console.log("product found", item);
         
         return  item;
         break;
    }
  }
    
 
 }

 
 const handleSubmit = (e) => {

  
 var item  =  helperToHandleSubmit(e.target.value);
 
 
  if (item) {
    console.log(`inside if`);
   // let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
    let newTodoItem = {
      id: item.id,
      productDetails: item
      //complete: false,
    }
    
    setTodos([item, ...todos]);
    setTodoItem({});
  } else {
    //setError(true);
    console.log(`inside else`);
    setTodoItem({});
  }
};

useEffect(() => {
  //console.log(`useEffect()  []`)
  const todos = JSON.parse(localStorage.getItem('todos'));
  //console.log(`useEffect()  [] value of typeof todos : ==> ${ typeof(todos)}`)
  const cartArray = localStorage.getItem('todos');
  const cartArrayTypewithJSONParse = JSON.parse(cartArray);
  //console.log(`typeof cartArray : ==> ${ typeof(cartArray )}`)
 // console.log(`typeof cartArrayTypewithJSONParse : ==> ${ typeof(cartArrayTypewithJSONParse )}`)
 
  console.log(`cartArray : ==> ${ cartArray }`);
 
 
  if (todos) {
    setTodos(todos);
    //console.log(`ToDOs in Cart ${todos}`)
  }
}, []);


useEffect(() => {
 // console.log(`setting localstorage todos array`);
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

useEffect(()=>{
  console.log("In Response to todoItem UseEffect  ")
},[todoItem]);

let arr1 = [];
for (let i = 0; i < 2; i += 1) {
    arr1.push(true);
}
arr1.push(false)
console.log(arr1);

        
  return ( 
  <>
  <h1> Here is Add To Cart length :</h1>
    
  { arr1.map((a) => { inCart = (a !== 2).toString() }) }
  { arr1.map((a) => <h1>   { inCart } </h1> ) }
  { arr1.map((a) => <h1>   { a.toString() } </h1> ) }
 
 <div className="productdisplay">
  
  { products.map((product) => (

    <div key={product.id}>
      <h1> { typeof (product.id)}</h1> 
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

        {arr1.map((a) => (a  ? <h1>I am in Cart !</h1> : <h1>I am not In Cart.</h1>))}
      
        

     <Button size="small" name="subject" type="submit" value={product.id} onClick={ handleSubmit } >Add To Cart</Button>             
        
        
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


