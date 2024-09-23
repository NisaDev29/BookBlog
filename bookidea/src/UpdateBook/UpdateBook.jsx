import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './update.css'
import { useLocation, useNavigate} from 'react-router-dom'

const UpdateBook = () => {

  const [book, setBook]=useState([''])
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [img, setImg]=useState(''); 
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.pathname.split("/")[2]
useEffect(()=>{

 const getBook = async()=>{
  try {
    const res = await axios.get(`http://localhost:5000/book/${id}`);
    console.log(res.data)
    setBook(res.data)
  } catch (error) {
    console.log(error)
  }
 }
 getBook();

},[id])

const handleChange=(e)=>{
  setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  
}

const handleClick = async (e) => {
  e.preventDefault();
  try {
    const updatebook = await axios.put(`http://localhost:5000/update/${id}`, book);
    console.log(updatebook)
    navigate('/')
  } catch (err) {
    console.log(err);
  }
    
};

  return (
    <div id='updateBook'>
      <h1 className='updateTitle'>Update Book</h1>
      <div className="updateform">
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
      <button className='updatebutton' onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default UpdateBook