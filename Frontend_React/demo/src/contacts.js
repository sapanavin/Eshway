import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import Axios from 'axios'


const config = {
  method: 'get',
  url: 'http://localhost:3002/api/get' ,
  headers: {
         'Accept': 'application/json'
  }
}


export async function getContacts() {
  var contacts;
 var contacts1 =  await Axios(config )
            .then((response)=>{
            console.log(`Type Of Response : ${typeof(response)}`)
       //contacts = JSON.stringify(response.data);
contacts = response.data;
       //contacts = JSON.parse(response)
        console.log(response.data);
       // console.log(response.status);
        //console.log(response.statusText);
        //console.log(response.headers);
        //console.log(`contacts : ${response.data[0].first_name}`)
        //console.log(`contacts : ${contacts}`)

  }, (error) =>{
    console.log(error);
  });
  //console.log(`From Outside contacts : ${contacts}`)
return contacts;
}


// export async function getContacts(query) {

//     console.log(``)
//   await fakeNetwork(`getContacts:${query}`);
//   let contacts = await localforage.getItem("contacts");
//   if (!contacts) contacts = [];
//   if (query) {
//     contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
//   }
//   return contacts.sort(sortBy("last", "createdAt"));
// }

export async function createContact() {
  var contacts;
  var contacts1 =
   await Axios.get("http://localhost:3002/api/create")
   .then((response)=>{
        contacts = JSON.stringify(response.data);
         console.log(response.data);
         console.log(response.status);
         console.log(response.statusText);
         console.log(response.headers);
         console.log(`contacts : ${response.data[0].first_name}`)
         console.log(`contacts : ${contacts}`)
 
   }, (error) =>{
     console.log(error);
   });
   console.log(`From Outside contacts : ${contacts}`)
 return contacts;

}
// export async function createContact() {
//   await fakeNetwork();
//   let id = Math.random().toString(36).substring(2, 9);
//   let contact = { id, createdAt: Date.now() };
//   let contacts = await getContacts();
//   contacts.unshift(contact);
//   await set(contacts);
//   return contact;
// }

export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
  console.log(`From get API ${contacts}`);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
