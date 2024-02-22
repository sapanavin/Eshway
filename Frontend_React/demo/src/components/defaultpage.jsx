import React from 'react'


import CustomCard from './customcard';
import { useState, useEffect} from 'react';


// export async function loader() {

//   const products = await getProducts();
 
//   return products ;
// }

function DefaultPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3002/api/products/get')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setProducts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


  //var  products  =  useLoaderData();
 
  // const updatedNums = products.map((p)=>{
  //  // console.log(`product from database:==> ${p.image_url}`)
  //     return  <CustomCard product={p}/>
  // });
 
  return(
    <>
         <h1>I am from default Page Outlet </h1>
        
         <div className="productdisplay">
          
                  <CustomCard product_list={ products }/>
           
         </div>
         </>
    )
  }


export default DefaultPage;