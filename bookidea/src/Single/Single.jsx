import React, { useEffect, useState } from 'react'
import './single.css'
import axios from 'axios';
import { useLocation} from 'react-router-dom';
const Single = () => {

    const [book, setBook]=useState({});
    const location = useLocation();
    const id = location.pathname.split("/")[2];
  
    useEffect(()=>{
        const getBook= async()=>{
            try {
                const res = await axios.get(`http://localhost:5000/book/${id}`)
                console.log(res)
              setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[id])

  return (
    <div>      
                <div  className='booksingle'>
            <img className='singleImg' src={book.img} alt="" />
            <div className='bookinfo'>
                <h1 className='singleTitle'>{book.title}</h1>
                <h3 className='singleOther'>Author : {book.author}</h3>
                <h3 className='singleOther'>Category: {book.category}</h3>
                <p className='singleDesc'>{book.desc}</p>
            </div>
        </div>      
    </div>
  )
}

export default Single