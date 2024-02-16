import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

import { getCategories  } from "../Api/category";
import CustomHeader  from "../components/header";
import DataGridDemo  from "../components/dataGrid";

export async function loader() {

    const contact = await getCategories();
    console.log(`from loader () contacts : ${contact}`)
    return contact ;
  }




export default function Root() {
  const  categories  =  useLoaderData();
  
  if (categories.isLoading) {
    return <div>Loading...</div>;
  }

  if (categories.isError) {
    return <div>Error loading posts.</div>;
  }
  

  const updatedNums = categories.map((p)=>{
    return <li key={p.id}>{p.id}   {p.category_name}</li>;
});

return (
      <>
        <CustomHeader />
      
            {/* <ul>
                   {updatedNums}
            </ul> */}

       
       
        <div>
           <Outlet />
        </div>

        
      </>
    );
  }