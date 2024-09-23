import React, { useState } from 'react'
import axios from 'axios'
import './add.css'
import { useNavigate } from 'react-router-dom'
const AddBook = () => {
  const [book, setBook]=useState([{
    title: '',
    author: '',
    category: '',
    desc: '',
    img: ''
  }])

  const navigate = useNavigate()

const handleChange=(e)=>{
  setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  
}

const handleClick = async (e) => {
  e.preventDefault();
  try {
    const newbook = await axios.post("http://localhost:5000/addnewbook", book);
    console.log(newbook)
    navigate('/')
  } catch (err) {
    console.log(err);
  }
    
};

  return (
    <div id='AddBook'>
      <h1 className='addTitle'>Create New Book Entry</h1>
      <div className="addform">
      <input
        className='addinput'
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
      className='addinput'
        type="text"
        placeholder="Book Author"
        name="author"
        onChange={handleChange}
      />
      <input
      className='addinput'
        type="text"
        placeholder="Book Category"
        name="category"
        onChange={handleChange}
      />
      <textarea
      className='addtextarea'
      rows={10}
        type="text"
        placeholder="Book Description"
        name="desc"
        onChange={handleChange}
      />
      <input
      className='addinput'
        type="text"
        placeholder="Book cover"
        name="img"
        onChange={handleChange}
      />
      <button className='addbutton' onClick={handleClick}>Add New Book</button>
      </div>
    </div>
  )
}

export default AddBook