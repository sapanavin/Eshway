import { Form, useLoaderData } from "react-router-dom";
import { getProducts } from "../Api/productapi";



export async function loader() {

  const contact = await getProducts();
 
  return contact ;
}



export default function Contact() {
  var  products  =  useLoaderData();
 
const updatedNums = products.map((p)=>{
    return <li key={p.id} >{p.id} {p.name}</li>;
});

return(
    <div>
    {/* {updatedNums} */}
</div>
  )
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post" >
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}