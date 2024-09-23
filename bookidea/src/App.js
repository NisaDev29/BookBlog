import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Mainpage from './MainPage/Mainpage';
import AddBook from './CreateBook/AddBook'
import UpdateBook from './UpdateBook/UpdateBook';
import Single from './Single/Single';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route index element={<Mainpage/>}/>
            <Route path='/book/:di' element={<Single/>}/>
            <Route path='/createbook' element={<AddBook/>}/>
            <Route path='/updatebook/:id' element={<UpdateBook/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
