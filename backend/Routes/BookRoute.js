const express = require('express');
const BookModel = require('../Models/BookModel');

const router = express.Router();

//GET REQUEST FOR ALL BOOKS
router.get('/getallbooks', async(req, res) =>{
    try{
        const allbooks = await BookModel.find({});
      res.status(200).json(allbooks)
    }catch(error){
        console.log(error.message)
      res.status(500).json({message:error.message});
    }
  })

//GET ONE BOOK BY ID 
router.get('/book/:id', async(req, res)=>{
    try {
        const {id}= req.params;
        const onebook = await BookModel.findById(id);
        res.status(200).json(onebook)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message});  
    }
})

//GET ONE BOOK BY TITLE ???
router.get('/getallbooks/?title:', async(req, res)=>{
    try {
        const title=req.params;
        const onebooktitle = await BookModel.findOne({title:title});
        res.status(200).json(onebooktitle)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message});  
    }
})


//POST REQUEST FOR A NEW BOOK
router.post('/addnewbook', async(req, res) => {
      try {
        const newBook =await BookModel.create(req.body)
        res.status(200).json(newBook)
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
      }
  })

  //UPDATE A BOOK BY ID IN DB
  router.put('/update/:id', async(req, res)=>{
    try {
        const {id}= req.params;
        const bookupdate = await BookModel.findByIdAndUpdate(id, req.body);
        if(!bookupdate){
           return res.status(404).json({message: `Book not found by ${id}`})
        }
        const updatedbook = await BookModel.findById(id)
        res.status(200).json(updatedbook)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
  })



  //DELETE A BOOK ENTRY IN DB
  router.delete('/delete/:id', async (req, res) => {
    try {
        const {id}= req.params;
        const bookdeleted = await BookModel.findByIdAndDelete(id);
        if(!bookdeleted){
           return res.status(404).json({message: `Book not found by ID ${id}`})
        }
        res.status(200).json(bookdeleted)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
  })

module.exports = router