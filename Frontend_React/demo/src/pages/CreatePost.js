import React,{ useState } from 'react';
import Axios from 'axios'
import '../App.css'

function CreatePost() {

const [userName,setUserName] = useState("");
const [title,setTitle] = useState("");
const [text,setText] = useState("");

const submitPost = () => {
Axios.post('http://localhost:3002/api/create', {userName: userName, title: title, text:text})
}

    return (
        <div className="CreatePost">
            <h1>CreatePost!!!!!!!!!!</h1>
        </div>
    )}

export default CreatePost