import Axios from 'axios'
;

export async function getCategories() {
    
    var categories;
    var categories1 =
     await Axios.get("http://localhost:3002/api/categories/get")
     .then((response)=>{
        categories = response.data;
          // console.log(response.data);
          // console.log(response.status);
           //console.log(response.statusText);
           //console.log(response.headers);
           //console.log(`contacts : ${response.data[0].first_name}`)
           //console.log(`contacts : ${contacts}`)
   
     }, (error) =>{
       console.log(error);
     });
     //console.log(`From Outside contacts : ${contacts}`)
   return categories;
  }