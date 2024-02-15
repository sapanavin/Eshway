import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useNavigate } from 'react-router-dom'
import '../App.css'

function MainPage() {

const [postList,setPostList]=useState([]);


let history = useNavigate ();

useEffect(()=>{
Axios.get("http://localhost:3002/api/get").then((response)=>{
    

    setPostList(response.data);

    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    
});
},[])

const LikePost = (id) => {
Axios.post(`http://localhost:3002/api/like/${id}`).then((response)=>{
alert("you liked a post")
})
}
return (

  
        
        <div>
            <h1>From Main Page</h1>
                
            <div>

                
          <ul>
              {postList.map(username => (
                
                  <li key={username.id}>  {username.first_name} {username.last_name}  </li> 
              ))}
          </ul> 
      </div>
          <h1>I am inside map</h1>
      </div>
        
   )}

export default MainPage