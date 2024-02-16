const express = require("express");
const cors = require("cors");

const db = require('./config/db')

const app = express();
const  PORT = 3002;

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//-------------------     Product API   ------------------------------------------------------------------

app.get("/api/get", (req,res)=>{
  db.query("SELECT * FROM product", (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   });
  
//-------------------     Categories API   ------------------------------------------------------------------
app.get("/api/categories/get", (req,res)=>{
    db.query("SELECT * FROM product_category", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });
   });
   //---------------------------------------------------------








  // Route to get one post
  app.get("/api/getFromId/:id", (req,res)=>{
  
  const id = req.params.id;
   db.query("SELECT * FROM router_demo WHERE id = ?", id, 
   (err,result)=>{
      if(err) {
      console.log(err)
      } 
      res.send(result)
      });   });
  
  // Route for creating the post
  app.post('/api/create', (req,res)=> {
  
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;
  
  db.query("INSERT INTO router_demo (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
     if(err) {
     console.log(err)
     } 
     console.log(result)
  });   })
  
  // Route to like a post
  app.post('/api/like/:id',(req,res)=>{
  
  const id = req.params.id;
  db.query("UPDATE router_demo SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
      if(err) {
     console.log(err)   } 
     console.log(result)
      });    
  });
  
  // Route to delete a post
  
  app.delete('/api/delete/:id',(req,res)=>{
  const id = req.params.id;
  
  db.query("DELETE FROM router_demo WHERE id= ?", id, (err,result)=>{
  if(err) {
  console.log(err)
          } }) })
  
  app.listen(PORT, ()=>{
      console.log(`Server is running on ${PORT}`)
  })

  //////////////////////////////////////           CATEGORY API         //////////////////////////////////////////////
  