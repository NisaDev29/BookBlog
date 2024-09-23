import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './main.css'
import { Link } from 'react-router-dom';

const Mainpage = () => {

    const [books, SetBooks]=useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
          try {
            const res = await axios.get("http://localhost:5000/getallbooks");
            SetBooks(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllBooks();
      }, []);
    
      console.log(books);

      const handleDelete = async(id)=>{
        try {
          const lostbook = await axios.delete(`http://localhost:5000/delete/${id}`)
          console.log(lostbook)
          window.location.reload();
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div>
        <h1 className='mainTitle'>WELCOME TO BOOKLAND</h1>
        <div className='mainPart'>
            {books.map(book =>{
                return (
                <div className='bookCard' key={book._id}>
                <img className='bookImg' src={book.img} alt="" />
                <h4 className='bookTitle'>
                  <Link to={`/book/${book._id}`}>{book.title}</Link></h4>
                <p className='bookOther'><strong>BY:</strong> {book.author}</p>
                <p className='bookOther'>{book.category}</p>
                <div className='buttons'>
                  <button className='mainButton'><Link to={`updatebook/${book._id}`}>Update</Link></button>
                  <button className='mainButton' onClick={() => handleDelete(book._id)}>Delete</button>
                </div>
                </div>
                )
            })}
       
        </div>
        <button className='mainAddButton'><Link to={'/createbook'}>Add New Book</Link></button>
    </div>
  )
}

export default Mainpage