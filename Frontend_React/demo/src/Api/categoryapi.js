import Axios from 'axios';

export async function getCategories() {
    
     
    var contacts;
    var contacts1 =
     await Axios.get("http://localhost:3002/api/get")
     .then((response)=>{
          contacts = response.data;
        
           console.log(response.data);
           console.log(response.status);
           console.log(response.statusText);
           console.log(response.headers);
           console.log(`contacts : ${response.data[0].first_name}`)
           console.log(`contacts : ${contacts}`)
   
     }, (error) =>{
       console.log(error);
     });
     //console.log(`From Outside contacts : ${contacts}`)
   return contacts1;
  }