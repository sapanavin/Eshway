import React from 'react'
import { Form, useLoaderData } from "react-router-dom";
import { getProducts } from "../Api/productapi";
import CustomCard from './customcard';


export async function loader() {

  const products = await getProducts();
 
  return products ;
}

function DefaultPage() {
  var  products  =  useLoaderData();
 
  const updatedNums = products.map((p)=>{
   // console.log(`product from database:==> ${p.image_url}`)
      return  <CustomCard kay="p.id" product={p}/>
  });
  const myproduct={"id":1, "img_url":"assets/images/products/books/book-luv2code-1000.png", "name":"JavaScript", "description":"This book is very hedfkdfjdkfj jfdkkdfhd fkdhjf fjkjfor hbfeiaen hdinfdif fh fidf ha f h"}
  return(
    <>
         <h1>I am from default Page Outlet I would take as much space as i need</h1>
        
         <div className="productdisplay">
         {updatedNums}  
           
         </div>
         </>
    )
  }


export default DefaultPage