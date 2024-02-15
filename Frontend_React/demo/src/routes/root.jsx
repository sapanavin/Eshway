import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

import { getContacts, createContact } from "../contacts";
import Axios from 'axios'

export async function loader() {

    const contact = await getContacts();
    console.log(`from loader () contacts : ${contact}`)
    return contact ;
  }

export async function action() {
  const contact = await createContact();
  return { contact };
}


export default function Root() {
  const  contacts  =  useLoaderData();
  
  if (contacts.isLoading) {
    return <div>Loading...</div>;
  }

  if (contacts.isError) {
    return <div>Error loading posts.</div>;
  }
  console.log(`from root.jsx :-----> ${ contacts }`);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            <ul>
              <li>
                < Link to={`/contacts/10`}>Your Name</Link>
              </li>
              <li>
                < Link to={`/contacts/20`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
           <Outlet />
        </div>

        
      </>
    );
  }