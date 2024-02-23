import * as React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { getProducts } from "../Api/productapi";
import { useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { Form, useLoaderData } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

import Axios from 'axios';

import { Link } from 'react-router-dom';


  

export default function CustomSideBar({  theme }) {
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3002/api/categories/get')
       .then((response) => response.json())
       .then((data) => {
         // console.log(data);
          setCategories(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


   



  return (

        <div  className = "container" >
          <div className= "customsidebar"> 

            <List>
               {categories.map((category) => (

              <ListItem  key={category.id}  >
                <Link to={`/categories/${category.id}`}> 
               <ListItemText primary={` ${category.category_name}`} />
               </Link>
               </ListItem>
             
               ))}
            </List> 
          </div>    
          
          <div className = "defaultoutlet">
              <Outlet />
          
          </div>
         
        </div>

  );
}
