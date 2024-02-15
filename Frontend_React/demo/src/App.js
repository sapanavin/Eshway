import React, {useState,useEffect}  from 'react'
import {BrowserRouter , Route, Routes} from "react-router-dom";
import './App.css'
import CreatePost from './pages/CreatePost';
import MainPage from './pages/MainPage';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
 import Contact from './pages/Contact';
 import Home from './pages/Home';
 import Blogs from './pages/Blogs';
 import Navbar from './pages/Navbar';


// function App() {
 

//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//       <Route index element={<Navbar />} />
//         <Route index element={<Home />} />
       
//         <Route path="blogs" element={<Blogs />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="createpost" element={<CreatePost />} />
//         <Route path="mainpage" element={<MainPage />} />
//         <Route path="*" element={<NoPage />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>

//   );
// }

// export default App;
